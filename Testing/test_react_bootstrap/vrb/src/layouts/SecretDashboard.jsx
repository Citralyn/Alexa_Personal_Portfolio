import { NavLink, Link } from "react-router";
// NavLinks are Links with special capabilities!
import { Outlet } from "react-router";
// Outlets render child components!

export default function Dashboard() {
    return(
        <nav>
            <NavLink
                to="/"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                  })}
                >
                Original
            </NavLink>
            <Link to="/secret/cheese">Yum!</Link>
            <Outlet /> 
        </nav>
    )
}