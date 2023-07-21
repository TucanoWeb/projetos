import { orders } from "../models/ordersSchema"
import { productsList } from "../models/products"

export const FindProduct = (order: any): number => {

    let result: number = -1

    // Localiza o produto pelo product_id
    productsList.forEach(async (product: any, key: number) => {
        if (product.id === order.product_id) {
            result = key
        }
    })

    return result
}