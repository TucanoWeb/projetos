import { GetTopProductsQty } from '../../resources'
import { useState } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProductsTopSell = () => {

    const [rows, setRows] = useState([])

    return (
        <>

            <GetTopProductsQty
                setRows={setRows}
            />

                <BarChart
                    width={1000}
                    height={800}
                    data={rows}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="name" fill="#8884d8" />
                    <Bar dataKey="quantity" fill="#82ca9d" />
                </BarChart>


        </>
    )
}

export default ProductsTopSell