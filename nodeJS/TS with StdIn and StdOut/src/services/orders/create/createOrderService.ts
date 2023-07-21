import { orders } from "../../../models/ordersSchema"

export const createOrder = (data: any): void => {

    orders.push({
        "status": "OPEN",
        "order_id": data.order_id,
        "order_items": [],
        "total_amount": 0
    })
    console.log(
        {
            "status": "OPEN",
            "order_id": data.order_id,
            "order_items": [],
            "total_amount": 0
        })
    return
}