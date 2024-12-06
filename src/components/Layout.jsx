import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="site-container">
      <Header />
      <Nav/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout