import { orders } from "../models/ordersSchema"

export const OrderIndex = (order: any) => {
    
    let result: number = -1
    
    orders.map( (element: any, key: any) => {
        if (element.order_id == order.order_id) {
            result = key
        }
    })

    return result
}