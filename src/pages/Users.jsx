import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import UserItem from './UserItem';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/utils';


function Users() {

  const { isAuth, setIsAuth, profile, setProfile } = useContext(AuthContext)
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const CSRFToken = Cookies.get('csrftoken')

  


  useEffect(() => {
    if (CSRFToken) {
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
    } else {
      logout(setIsAuth, setProfile, navigate)
      navigate('/')
    }
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