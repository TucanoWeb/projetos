import { CheckoutOrder } from "../../services/orders/checkout/checkoutOrderService";
import { OrderIndex } from "../../utils/OrderIndex"
import { SelectOrder } from "../../utils/selectOrder";

export const CheckouOrderController = (command_row: any): void => {

    // Módulo para selecionar Pedido
    const orderSelectec: any = SelectOrder(command_row)

    // Módulo para localizar a index do order
    const keyOrder: number = OrderIndex(command_row)

    // Verifica se pedido possui itens
    if (orderSelectec.total_amount !== 0) {
        CheckoutOrder(keyOrder)
    } else {
        console.log({
            "order_id": orderSelectec.order_id,
            "error": "ORDER_IS_EMPTY"
        })
    }

}