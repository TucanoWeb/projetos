import { IOrdersItems, orders } from '../../../models/ordersSchema';
import { productsList } from '../../../models/products';
import { qtyItems } from '../../../models/qtyItemSchema';


export const RemoveItem = (indexOrder: number, command_row_prod_id: number): void => {

    // Localiza o respectivo item e o retira da array
    orders[indexOrder]['order_items'].forEach((element: IOrdersItems, key: number) => {
        if (element.product_id === command_row_prod_id) {
            delete orders[indexOrder]['order_items'][key]

        }
    })

    // Atualiza o valor total do pedido
    let totalAmount: number = 0
    orders[indexOrder]['order_items'].forEach((element: IOrdersItems) => {
        productsList.forEach((products: any) => {
            if (element.product_id === products.id) {
                totalAmount = totalAmount + (element.quantity * products.price)
            }
        })
    })
    orders[indexOrder]['total_amount'] = totalAmount

    console.log({
        "status": orders[indexOrder]['status'],
        "order_id": orders[indexOrder]['order_id'],
        "order_items": orders[indexOrder]['order_items'].filter((str: any) => str !== ''),
        "total_amount": totalAmount
    })

}