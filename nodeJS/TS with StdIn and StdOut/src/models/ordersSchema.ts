export interface IOrders {
    order_id: any,
    status: string,
    order_items: any,
    total_amount: number
}

export interface IOrdersItems {
    product_id: number
    quantity: number
}

export const orders: IOrders[] = []
