import {
    Container,
    CardContainer,
    Date,
    Title,
    Description,
    Icon
} from './stylesPosts'

import { HiArrowRight } from 'react-icons/hi'
import { Fragment, useContext } from 'react'
import { PostsContext } from '../../context/posts'
import { PostsData } from '../../services/GetPost'
import Link from 'next/link'


const Posts = () => {

    const data = useContext(PostsContext)

    //Controlar a renderização. O valor inicial é '' e após chamar a função PostsData, que insere o valor na contextAPI, ele valor é alterado. Ou seja, não é chamado novamente, evitando o loop de renderização.
    if (data === '') {
        PostsData()

    }

    //console.log(data)

    function renderPosts(key: string, index: any) {

        let date = data[index]['created_at'].split('T')
        let splitDate = date[0].split('-')
        

        return (
            <Fragment key={index}>
                <CardContainer 
                value={Number(index)} 
                final={data[index + 1]}
                >
                <Link href={`/post/${[index]}`}>
                <Date>{splitDate[2]}/{splitDate[1]}/{splitDate[0]}</Date>
                <Title>
                    {data[index]['title']}
                </Title>
                <Description>
                {data[index]['description']}
                </Description>
                <Icon>
                    <HiArrowRight />
                </Icon>
                </Link>
                </CardContainer>
            </Fragment>
        )
    }


    return (
        <>
            <Container>
                {data !== '' &&
                    data.map(renderPosts)}
            </Container>
        </>
    )
}

export default Posts