import { ICommandRow } from "../../archives/typesFile"
import { IOrdersItems } from "../../models/ordersSchema"
import { RemoveItem } from "../../services/orders/removeItem/removeItemService"
import { OrderIndex } from "../../utils/OrderIndex"
import { FindProduct } from "../../utils/findProduct"
import { SelectOrder } from "../../utils/selectOrder"

export const RemoveItemController = (command_row: ICommandRow) => {

    // Módulo para selecionar Pedido
    const orderSelectec: any = SelectOrder(command_row)

    // Módulo para localizar a index do order
    const keyOrder: number = OrderIndex(command_row)

    // Localiza o produto pelo product_id
    const indexProduct: number = FindProduct(command_row)

    // Verifica o status do pedido
    if (orderSelectec.status === "OPEN") {
        RemoveItem(keyOrder, command_row.product_id as number)
    } else {
        console.log({
            "order_id": orderSelectec.order_id,
            "error": "ORDER_ALREADY_IN_CHECKOUT"
        })
    }

}