import { NavLink, Link } from "react-router";
// NavLinks are Links with special capabilities!
import { Outlet } from "react-router";
// Outlets render child components!

export default function Dashboard() {
    return(
        <nav>
            <NavLink
                to="/settings"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                  })}
                >
                Settings
            </NavLink>
            <Link to="/secret">Secret</Link>
            <Outlet /> 
        </nav>
    )
}