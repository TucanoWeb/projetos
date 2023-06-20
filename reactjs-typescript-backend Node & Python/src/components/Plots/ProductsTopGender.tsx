import { GetTopProductsPerGender } from '../../resources'
import { useState } from 'react';

import { PieChart, Pie, Tooltip } from 'recharts';

const ProductsTopGender = () => {

    const [rowsM, setRowsM] = useState([])
    const [rowsF, setRowsF] = useState([])


    return (
        <>

            <GetTopProductsPerGender
                setRowsM={setRowsM}
                setRowsF={setRowsF}

            />

            <PieChart width={800} height={450}>
                <Pie
                    dataKey="quantity"
                    isAnimationActive={false}
                    data={rowsF}
                    cx="30%"
                    cy="30%"
                    outerRadius={80}
                    fill="#e77eaa"
                    label
                />
                <Pie
                    dataKey="quantity"
                    data={rowsM}
                    cx="70%"
                    cy="30%"
                    outerRadius={80}
                    fill="#2c81a3"
                    label
                />
                <Tooltip />
            </PieChart>

        </>
    )
}

export default ProductsTopGender