interface IProductsList {
    id: number,
    name: string,
    price: number
}

// ATENÇÃO:
// O arquivo do desafio estava com o atribudo incorreto. 
// Alterado de id para product_id para obedecer a arquitetura proposta

export const productsList: IProductsList[] = [
    { 'id': 1, 'name': 'coffee', 'price': 500 },
    { 'id': 2, 'name': 'cookie', 'price': 400 },
    { 'id': 3, 'name': 'water', 'price': 200 },
]
