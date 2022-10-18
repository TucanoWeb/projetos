import { useEffect, useState } from 'react'
import './profile.css'

const Profile = (props) => {

    const [profile, setProfile] = useState(false)

    useEffect(() => {

        setProfile(props.data)


    }, [props.data])


    return (
        <>
            {profile ? (
                <div className='profile'>
                    <div className='photoProfile'>
                        <img src={profile.avatar_url} alt="" />
                    </div>
                    <div className='infoProfileWrapper'>
                        <div className='nameProfile'>
                            {profile.name}
                        </div>
                        <div className='tagProfile'>
                            @{profile.login}
                        </div>
                        <div className='descriptionProfile'>
                            {profile.bio}
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <div className='profile'>
                        <div className='photoProfile'>
                        </div>
                        <div className='infoProfileWrapper'>
                            <div className='nameProfile'>
                                Nome Sobrenome
                            </div>
                            <div className='tagProfile'>
                                @usuario
                            </div>
                            <div className='descriptionProfile'>
                                Descrição do profile
                            </div>
                        </div>
                    </div>



                )}
        </>
    )
}

export default Profile