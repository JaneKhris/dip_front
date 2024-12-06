import Register from './pages/Register'
import Home from './pages/Home'
import Layout from './components/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Files from './pages/Files'
import File from './pages/File'


import './App.css'
import FilesTest from './components/FilesTest'
import Users from './pages/Users'
import Login from './pages/Login'
import AddFile from './pages/AddFile'
import { NotFound } from './pages/NotFound'
import { fileLoader } from './loaders'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Profile from './pages/Profile'
import Download from './pages/Download'


function App() {

  const { token } = useContext(AuthContext)
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-file" element={<AddFile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/storage/:id" element={<Files />} />
          <Route path="/files" element={<Files />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/file" element={<File />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/download/:str" element={<Download />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={routes} />

  );
}


export default App;


