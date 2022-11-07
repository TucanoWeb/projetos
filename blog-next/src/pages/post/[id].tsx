import { useRouter } from "next/router"
import { CardLeft, CardRight } from "../../components"
import { useContext } from 'react';
import { PostsContext } from '../../context/posts';
import { PostsData } from "../../services/GetPost";
import Link from "next/link";

const PostPage = () => {

    const route = useRouter()
    const { id } = route.query


    const data = useContext(PostsContext)

    //Controlar a renderização. O valor inicial é '' e após chamar a função PostsData, que insere o valor na contextAPI, ele valor é alterado. Ou seja, não é chamado novamente, evitando o loop de renderização.
    if (data === '') {
        PostsData()

    }

    return (
        <div className="container">
            {data !== '' &&
                <>
                    <h1>{data[Number(id)]['title']}</h1>
                    <div className="content">
                        {data[Number(id)]['body']}
                        <div className="sub-content">
                            This is an example post. There's another one here.
                        </div>
                    </div>
                    <div className="cardsWrapper">
                        {data[Number(id) - 1] !== undefined &&
                            <Link href={`/post/${Number(id) -1}`}>
                                <CardLeft
                                    value={Number(id)}
                                />
                            </Link>
                        }
                        {data[Number(id) + 1] !== undefined &&
                            <Link href={`/post/${Number(id) + 1}`}>
                                <CardRight
                                    value={Number(id)}
                                />
                            </Link>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default PostPage