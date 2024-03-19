import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div className="bg-sky-200">sidebar</div>
            <div className="bg-teal-100">header</div>
            <div>
                {<Outlet />}
            </div>
            <div>footer</div>
        </div>
    )
}

export default Layout
