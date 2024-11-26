import Register from './pages/Register'
import Home from './pages/Home'
import Layout from './components/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { filesLoader } from './loaders'
import Files from './pages/Files'

import './App.css'
import NewRes from './components/NewRes'
import FilesTest from './components/FilesTest'
import Users from './pages/Users'
import Login from './pages/Login'


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newfile" element={<NewRes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/files" element={<Files />}  />
      </Route>
    )
  );
  return (
    <RouterProvider router={routes} />

  );
}

// function App() {
//   return (
//     <Files/>
//   )
// }

export default App;


