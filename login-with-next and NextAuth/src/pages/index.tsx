import { useContext } from "react"
import GetUsers from '../services/supabase/GetUsers';
import { ContextProps, ContextGetUser } from '../Context/context';
import { User } from "../components";

export default function Home() {

  const [user, setUser] = useContext(ContextProps)
  const [getUserRequisition, setGetUserRequisition] = useContext(ContextGetUser)

  //console.log(user)

  return (
    <>
      {getUserRequisition.requisition === false &&
        <GetUsers />
      }
      <div className="containerIndex">
        <User />
      </div>
    </>
  )
}
