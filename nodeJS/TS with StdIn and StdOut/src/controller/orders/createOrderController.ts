import { createOrder } from "../../services/index"

export const createOrderController = (data: any): void => {

    // Não tendo regras de violações para a criação de pedidos e considerando, 
    // como o enunciado, que todas as entradas são válidas, resta chamar o respectivo service
    createOrder(data)

}

