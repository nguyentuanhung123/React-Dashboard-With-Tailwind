import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
       <div>
            <p>This is Dashboard page</p>
            <Link to="/products">go to products page</Link>
       </div>
    )
}

export default Dashboard
