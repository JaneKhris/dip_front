import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import UserItem from './UserItem';


function Users() {

  const {token, profile} = useContext(AuthContext)
  const [users, setUsers] = useState([])



  useEffect(() => {
    fetch(import.meta.env.VITE_PORT + "/users/?ordering=username", {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`
      },
    })
      .then((response) => response.json())
      .then(item => setUsers(item))

    
  }, [])


  return (
    <>
      {profile.isStaff && 
      <>

        <div className="users">

          <h1>Users</h1>
          <ul className="users__item">
            {users.map((user) =>
              <UserItem className='user__item' key={user.id} user={user}></UserItem>
            )}
          </ul>

        </div>
      </>}
      <div>No token</div>
    </>
  )
}

export default Users