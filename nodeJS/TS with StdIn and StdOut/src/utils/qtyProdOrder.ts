import { SelectOrder } from "./selectOrder";
import { IOrders } from "../models/ordersSchema";

export const VerifyQtyProducts = (data: any) => {

    const orderSelected: any = SelectOrder(data)
    let result: boolean = true

    orderSelected.order_items.forEach((element: any) => {
        if(element.product_id === data.product_id){
            if(element.quantity === 5){
                result = false
            }
        }
    })
    

    return result
}