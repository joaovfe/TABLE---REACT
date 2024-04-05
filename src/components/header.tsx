import allienIcon from "../assets/allien-icon.svg"
import { NavLink } from "./nav-link"

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={allienIcon} />

            <nav className="flex items-center gap-5">
                <NavLink href="/Events">Events</NavLink>
                <NavLink href="/Participants">Participants</NavLink>
            </nav>
        </div >
    )
}