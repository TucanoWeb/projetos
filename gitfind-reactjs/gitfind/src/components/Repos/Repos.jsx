import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import './repos.css'

const Repos = (props) => {

    const [reposList, setReposList] = useState([])


    var controller = 1;
    useEffect(() => {
        if (controller === 1) {
            axios.get(`${process.env.REACT_APP_API_GITUSERS}/${props.data['login']}/repos`)
                .then((data) => {
                    setReposList(data.data)
                })
        }
        controller++
    }, [props.data])


    function reposRender(key, index) {
        return (
            <Fragment key={index}>
                <div className='reposTitle'>
                    <a href={reposList[index]['svn_url']} target='_blank'>{reposList[index]['name']}</a></div>
                <div className='reposDescription'>{reposList[index]['description']}</div>
                <hr />
            </Fragment>
        )
    }


    return (
        <div className='repos'>
            <hr></hr>
            <div className='titleRepo'>
                Repositórios
            </div>
            {reposList.length > 0 &&
                <div className='repoStyle'>
                    {reposList.map(reposRender)}
                </div>
            }


        </div>
    )
}

export default Repos