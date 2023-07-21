import { orders } from "../models/ordersSchema";

export const SelectOrder = (data: any) => {

    let response: object = {}

    orders.map((element: any, key: any) => {
        if (element.order_id == data.order_id) {
            response = orders[key]
        }
    })

    return response
}
