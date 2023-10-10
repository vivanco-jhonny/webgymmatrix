import { Button, IconButton, SxProps } from "@mui/material"
import { useState } from "react"
import { Link, Navigate, Route, useNavigate } from "react-router-dom"
import { Public } from "../../routes/routes"
import { Contact } from "./Contact"
import { Gallery } from "./Gallery"
import { Landing } from "./Landing"
import "./Main.css"
import { Menberships } from "./Menberships"
import Notfound from "./Notfound"
import { Plans } from "./Plans"
import { Schedules } from "./Schedules"

export const ButtonContainedPrimary: SxProps = {
    fontFamily: "kanit",
    color: "rgb(255,230,0)",
    background: "black",
    ":hover": {
        background: "black",
        color: "rgb(255,230,0)"
    }
}

export const ButtonOutlinedPrimary: SxProps = {
    fontFamily: "kanit",
    color: "black",
    border: "1px solid black",
    ":hover": {
        color: "black",
        border: "1px solid black"
    }
}

export const Main = () => {
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <>
            {dropdown &&
                <div className="menu-movil">
                    <button className="btn" onClick={() => { setDropdown(false)}}><i className="bi bi-x-lg"></i></button>
                    <button className="btn" onClick={() => { setDropdown(false)}}><Link to={Public.Landing}>Inicio</Link></button>
                    <button className="btn" onClick={() => { setDropdown(false)}}><Link to={Public.Menberships}>Menbresias</Link></button>
                    <button className="btn" onClick={() => { setDropdown(false)}}><Link to={Public.Plans}>Planes</Link></button>
                    <button className="btn" onClick={() => { setDropdown(false)}}><Link to={Public.Gallery}>Galeria</Link></button>
                    <button className="btn" onClick={() => { setDropdown(false)}}><Link to={Public.Schedules}>Horarios</Link></button>
                    <button className="btn" onClick={() => { setDropdown(false)}}><Link to={Public.Contact}>Contacto</Link></button>
                    <button className="btn" style={{background: "black", color: "white", borderRadius: "0px"}} onClick={() => { navigate("/login") }}>Iniciar Sesion</button>
                    <button className="btn" style={{background: "black", color: "white", borderRadius: "0px"}} onClick={() => { navigate("/register") }}>Registrarse</button>
                </div>
            }
            <header>
                <label>GYM MATRIX®</label>
            </header>
            <nav>
                <div className="navegacion">
                    <button className="btn"><Link to={Public.Landing}>Inicio</Link></button>
                    <button className="btn"><Link to={Public.Menberships}>Menbresias</Link></button>
                    <button className="btn"><Link to={Public.Plans}>Planes</Link></button>
                    <button className="btn"><Link to={Public.Gallery}>Galeria</Link></button>
                    <button className="btn"><Link to={Public.Schedules}>Horarios</Link></button>
                    <button className="btn" style={{ marginRight: "10px" }}><Link to={Public.Contact}>Contacto</Link></button>
                    <Button variant="contained" onClick={() => { navigate("/login") }} sx={ButtonContainedPrimary} disableElevation>Iniciar Sesion</Button>
                    <Button variant="outlined" onClick={() => { navigate("/register") }} sx={ButtonOutlinedPrimary}>Registrarse</Button>
                </div>
                <div className="navegacion-movil">
                    <IconButton sx={{ width: "50px", height: "50px" }} onClick={() => { setDropdown(true) }}><i className="bi bi-list" style={{ color: "black" }}></i></IconButton>
                </div>
            </nav>

            <div style={{ marginTop: "70px" }}>
                <Notfound>
                    <Route path="/" element={<Navigate to={Public.Landing} />} />
                    <Route path={Public.Contact} element={<Contact />} />
                    <Route path={Public.Gallery} element={<Gallery />} />
                    <Route path={Public.Landing} element={<Landing />} />
                    <Route path={Public.Menberships} element={<Menberships />} />
                    <Route path={Public.Plans} element={<Plans />} />
                    <Route path={Public.Schedules} element={<Schedules />} />
                </Notfound>
            </div>
            <footer>
                <section>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>
                </section>
                <p className="copyright">© {new Date().getFullYear()} Gym Matrix Club Premium.</p>
            </footer>
        </>
    )
}
