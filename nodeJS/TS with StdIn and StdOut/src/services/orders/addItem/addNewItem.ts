import { orders } from "../../../models/ordersSchema"
import { productsList } from '../../../models/products';

export const AddNewItemOrder = async (keyOrder: number, indexProduct: number) => {

    let productSelected: object = {}
    let hvProduct: boolean = false
    let indexOrderItems: number = 0
    let price: number = 0

    // Seleciona o produto com o index passado pelo controller
    if (indexProduct >= 0) {
        productSelected = {
            "product_id": productsList[indexProduct]['id'],
            "quantity": 1
        }
        price = productsList[indexProduct]['price']


        // Trigger inicial para populaçao de array no produto
        if (orders[keyOrder]["order_items"].length === 0) {
            orders[keyOrder]['order_items'].push(productSelected)

            // Atribui valor ao total_amount
            orders[keyOrder]['total_amount'] = orders[keyOrder]['total_amount'] + price
        }
        // Se já houver algum item na array, o bloco abaixo é chamado
        else {

            // Verifica se o produto já existe na array
            orders[keyOrder]['order_items'].forEach(async (element: any, key: number) => {
                if (element.product_id === productsList[indexProduct]['id']) {
                    hvProduct = true
                    indexOrderItems = key
                }
            })


            // O produto existindo na array, a quantidade é acrescida
            if (hvProduct) {
                orders[keyOrder]['order_items'][indexOrderItems] = {
                    "product_id": productsList[indexProduct]['id'],
                    "quantity": orders[keyOrder]["order_items"][indexOrderItems]["quantity"] + 1
                }
            } else {
                // Controle passado pelo controller, que define se há 
                // itens iguais no array do pedido
                orders[keyOrder]['order_items'].push(productSelected)
            }


            // Atribui valor ao total_amount
            orders[keyOrder]['total_amount'] = orders[keyOrder]['total_amount'] + price
        }

    }


    console.log({
        "status": orders[keyOrder]['status'],
        "order_id": orders[keyOrder]['order_id'],
        "order_items": orders[keyOrder]['order_items'].filter((str: any) => str !== ''),
        "total_amount": orders[keyOrder]['total_amount']
    })

    return
}