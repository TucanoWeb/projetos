import { useContext } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { PostsContext } from '../../context/posts'
import { PostsData } from '../../services/GetPost'
import { ICardProps } from '../CardLeft/types';

const CardRight = ({value}: ICardProps) => {

    const data = useContext(PostsContext)

    //Controlar a renderização. O valor inicial é '' e após chamar a função PostsData, que insere o valor na contextAPI, ele valor é alterado. Ou seja, não é chamado novamente, evitando o loop de renderização.
    if (data === '') {
        PostsData()

    }

    return (
        <>
            <div className="cardRightBox">
                <div className="header">
                    NEXT
                </div>
                <div className="titleCard">
                {data !== '' &&
                        data[value + 1]['title']
                    }
                </div>
                <div className='arrowIconCard'>
                    <HiArrowRight />
                </div>
            </div>
        </>
    )
}

export default CardRight