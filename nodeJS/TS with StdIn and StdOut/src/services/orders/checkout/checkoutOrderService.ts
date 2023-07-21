import { orders } from "../../../models/ordersSchema"

export const CheckoutOrder = (indexOrder: number): void => {

    orders[indexOrder] = {
        ...orders[indexOrder],
        "status": "WAITING_PAYMENT"
    }

    console.log({
        "status": orders[indexOrder]['status'],
        "order_id": orders[indexOrder]['order_id'],
        "order_items": orders[indexOrder]['order_items'].filter((str: any) => str !== ''),
        "total_amount": orders[indexOrder]['total_amount']
    })

}