import GetData from "./Customers/AllUser/db";
import DeleteUserRes from "./Customers/DeleteUser/Delete";
import Insert from "./Customers/InsertUser/Insert";
import UpdateUser from "./Customers/UpdateUser/UpdateUser";
import GetSpentCustomers from "./Plots/GetSpentCustomer";
import GetTopQtyCustomers from "./Plots/GetTopQtyCustomer";
import GetTailQtyCustomer from "./Plots/GetTailQtyCustomer";
import GetTopProductsQty from "./Plots/GetTopProductsQty";
import GetTopProductsPerGender from "./Plots/GetTopProductsPerGender";
import GetDataProducts from "./Products/AllProducts/FindAllProducts";
import InsertProductResource from "./Products/InsertNew/InsertProductResource";
import EditProductResource from "./Products/EditProducts/EditProductResource";
import DeleteProductResource from "./Products/DeleteProduct/DeleteProductResource";
import GetDataSells from "./Sells/AllSells/FindAllSells";
import DeleteSellResource from "./Sells/DeleteSell/DeleteSellResource";
import InsertSellResource from "./Sells/InsertSell/InsertSellResource";


export {
    GetData,
    DeleteUserRes,
    Insert,
    UpdateUser,
    GetSpentCustomers,
    GetTopQtyCustomers,
    GetTailQtyCustomer,
    GetTopProductsQty,
    GetTopProductsPerGender,
    GetDataProducts,
    InsertProductResource,
    EditProductResource,
    DeleteProductResource,
    GetDataSells,
    DeleteSellResource,
    InsertSellResource
}