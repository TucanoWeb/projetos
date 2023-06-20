import '../../pages/App.css'

import { InsertProductButton, TablesProducts } from "../../components"

const Produtos = () => {
    return (
        <>
            <div className='wrapperButton'>
                <InsertProductButton />
            </div>
            <TablesProducts />
        </>
    )
}

export default Produtos