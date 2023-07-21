import { AddNewItemOrder } from "../../services/orders/addItem/addNewItem"
import { SelectOrder } from "../../utils/selectOrder"
import { productsList } from "../../models/products"
import { OrderIndex } from "../../utils/OrderIndex"
import { FindProduct } from "../../utils/findProduct"
import { IOrdersItems } from "../../models/ordersSchema"

export const AddItemOrderController = (command_row: object): void => {

    let controllerQty: boolean = false

    // Módulo para selecionar Pedido
    const orderSelectec: any = SelectOrder(command_row)

    // Módulo para localizar a index do order
    const keyOrder: number = OrderIndex(command_row)

    // Localiza o produto pelo product_id
    const indexProduct: number = FindProduct(command_row)

    // Verifica a regra de negócio de qty máx de itens iguais no pedido
    orderSelectec.order_items.forEach((element: IOrdersItems): void => {
        if (element.product_id === productsList[indexProduct]['id']) {
            if (element.quantity === 5) {
                controllerQty = true
            }
        }
    })

    // Valida quantidade e status
    if (!controllerQty && orderSelectec.status === "OPEN") {
        AddNewItemOrder(keyOrder, indexProduct)
    } else {
        if (controllerQty && orderSelectec.status === "OPEN") {
            console.log({
                "order_id": orderSelectec.order_id,
                "error": "MAX_PRODUCTS_REACHED"
            })
        } else {
            console.log({
                "order_id": orderSelectec.order_id,
                "error": "ORDER_ALREADY_IN_CHECKOUT"
            })
        }
    }

}