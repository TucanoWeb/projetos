// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Criação da interface no modelo IERC20
interface IERC20 {
    
    //Função que define o suprimento total de tokens no contrato
    function totalSupply() external  view  returns(uint256);
    
    //Checa o saldo de um determinado endereço
    function balanceOf(address account) external view returns (uint256);
    
    //Retorna o limite que pode ser utilizado
    function allowance(address owner, address spender) external view returns (uint256);
    
    //transferência de tokens
    function transfer(address recipient, uint256 amount) external returns (bool);
    
    //Serve para aprovar uma transação de alguém que foi delegada a função para gastar determinado saldo
    function approve(address spender, uint256 amount) external returns (bool);
    
    //O allowance define quanto pode gastar e o transferFrom define quem pode gastar
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    //Eventos que são disparados
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed  owner, address indexed spender, uint256);
  
}

contract GitCoin is IERC20 {
    string public constant name = "Git Coin";
    string public constant symbol = "Git";
    uint8 public constant decimals = 18;

    //Mapeia os endereços que podem utilizar o saldo
    mapping (address => uint256) balances;
    mapping (address => mapping (address=>uint256)) allowed;

    //Quantidade total que o contrato possui
    uint256 totalSupply_ = 10 ether;

    constructor(){

        balances[msg.sender] = totalSupply_;
    }

    //Retorna o suprimento total
    function totalSupply() public override view returns (uint256){
        return totalSupply_;
    }

    //Balanço de um determinado endereço
    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }

    //Padrão de transferência de tokens
    function transfer(address receiver, uint256 numTokens) public override returns(bool) {
        
        //require exige que a quantidade de tokens seja da pessoa que está enviando a transação
        require(numTokens <= balances[msg.sender]);
        
        //Quem envia subtrai token
        balances[msg.sender] = balances[msg.sender]-numTokens;
        
        //Envia recebe adiciona tokens
        balances[receiver] = balances[receiver]+numTokens;
        
        
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }


    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    //Informa quanto foi delegado para determinado endereço
    function allowance(address owner, address delegate) public override view returns (uint) {
        return allowed[owner][delegate];
    }

    //
    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool){
        
        //Requer que o número dos tokens seja menor ou igual ao balance do owner
        require(numTokens <= balances[owner]);
        //Requer que o número de tokens seja a quantidade liberada para que possa ser utilizada
        require(numTokens <= allowed[owner][msg.sender]);

        //Tira do owner e debita
        balances[owner] = balances[owner]-numTokens;
        //tira da quantidade que foi delegada/liberada para gasto
        allowed[owner][msg.sender] = allowed[owner][msg.sender]-numTokens;
        
        //Envia e soma para o buyer
        balances[buyer] = balances[buyer]+numTokens;
        emit Transfer(owner, buyer, numTokens);
        return true;
    }

}