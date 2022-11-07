import { useContext } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { PostsContext } from '../../context/posts'
import { PostsData } from '../../services/GetPost'
import { ICardProps } from './types';

const CardLeft = ({value}: ICardProps) => {

    const data = useContext(PostsContext)

    //Controlar a renderização. O valor inicial é '' e após chamar a função PostsData, que insere o valor na contextAPI, ele valor é alterado. Ou seja, não é chamado novamente, evitando o loop de renderização.
    if (data === '') {
        PostsData()

    }

    return (
        <>
            <div className="cardLeftBox">
                <div className="header">
                    PREVIOUS
                </div>
                <div className="titleCard">
                    {data !== '' &&
                        data[value -1]['title']
                    }
                </div>
                <div className='arrowIconCard'>
                    <HiArrowLeft />
                </div>
            </div>
        </>
    )
}

export default CardLeft