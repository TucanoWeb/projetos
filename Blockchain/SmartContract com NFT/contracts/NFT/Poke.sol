// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Poke is ERC721{

    struct Pokemon {
        string name;
        uint level;
        string img;
}

    //Criar arrays de pokemons
    Pokemon[] public pokemons;
    address public gameOwner;

    constructor () ERC721 ("PokeNFT", "PKD"){

        gameOwner = msg.sender;

    }

    modifier onlyOwnerOf(uint _monsterId){

        require(ownerOf(_monsterId) == msg.sender, "Apenas o dono pode batalhar com esse Pokemon");
        //usa o _ abaixo para continuar a execução
        _;

    }

    function battle(uint _attackingPokemon, uint _defendingPokemon) public onlyOwnerOf(_attackingPokemon){
        Pokemon storage attacker = pokemons[_attackingPokemon];
        Pokemon storage defender = pokemons[_defendingPokemon];

        if (attacker.level >= defender.level) {
            attacker.level += 2;
            defender.level += 1;
        }else {
            attacker.level += 1;
            defender.level += 2;
        }

    }


    function createNewPokemon(string memory _name, address _to, string memory _img) public {
        //Apenas o dono do jogo pode criar pokemon
        require(msg.sender == gameOwner, "Apenas o dono do jogo pode criar novos Pokemons");

        //atribuir um id ao pokemon
        uint id = pokemons.length;

        pokemons.push(Pokemon(_name, 1, _img));

        _safeMint(_to, id);



    }

}