import { readFile } from 'fs/promises';
import { createOrder } from '../services/index';


test("Test create order with success status", async () => {

    const file = await (readFile('./src/__mocks__/createOrder.json', "utf8"))
    const mockData = JSON.parse(file)


    const mockCallback = [{ "order_id": undefined, "order_items": [], "status": "OPEN", "total_amount": 0 }]

    const spyLog = jest.spyOn(global.console, 'log')

    createOrder(mockData)

    expect(spyLog.mock.calls).toContainEqual(mockCallback)

})

