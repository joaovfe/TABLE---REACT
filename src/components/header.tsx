import allienIcon from "../assets/allien-icon.svg"
/* cSpell:disable */
import { NavLink } from "./nav-link"
import { Link } from "react-router-dom";

// <a> <a/>
// nao recarrega a pagina inteira -> página bem mais rapida

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={allienIcon} />
            <nav className="flex items-center gap-5">
                <Link to="/events">
                    <NavLink href="/Events">Events</NavLink>
                </Link>
                <Link to="/Participants">
                    <NavLink href="/Participants">Participants</NavLink>
                </Link>
            </nav>
        </div >
    )
}