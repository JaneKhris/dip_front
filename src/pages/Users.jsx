import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import UserItem from './UserItem';
import Cookies from 'js-cookie';


function Users() {

  const { isAuth, profile } = useContext(AuthContext)
  const [users, setUsers] = useState([])

  const CSRFToken = Cookies.get('csrftoken')


  useEffect(() => {
    console.log(profile.isStaff)
    fetch(import.meta.env.VITE_PORT + "/users/?ordering=username", {
      credentials: 'include',
      method: 'GET',
      headers: {
        "X-CSRFToken": CSRFToken
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
            <table className="users__table">
              <thead className='users__table head'>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>Number of files</th>
                <th>Total size</th>
                <th>Admin</th>
                <th>Delete</th>
                <th>Storage</th>
              </thead>
              <tbody>
              {users.map((user) =>
                <UserItem className='user__item' key={user.id} user={user}></UserItem>
              )}

              </tbody>
            </table>



          </div>
        </>}
    </>
  )
}

export default Users