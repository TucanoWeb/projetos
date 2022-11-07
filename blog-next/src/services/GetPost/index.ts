import axios from "axios";
import { useContext } from 'react';
import { PostsContextProps } from '../../context/posts';

export const PostsData = () => {

    const [postsData, setPostsData] = useContext(PostsContextProps)


    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rest/v1/posts?select=*`, {
        headers: {
            apikey: `${process.env.NEXT_PUBLIC_SERVICE_KEY}`
        }
    })
        .then((response) => {
            //console.log(response)
            setPostsData(response.data)
            

        }).catch((error) => {
            console.log(error)
        })
            

}