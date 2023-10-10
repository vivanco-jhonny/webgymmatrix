import { Button, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const ButtonRegister: SxProps = {
    background: "black", 
    height: "50px", 
    fontFamily: "kanit",
    fontSize: "14px",
    color: "white", 
    width: "100%",
    fontWeight: "700", 
    borderRadius: "0px",
    "&:hover": {
        background: "black"
    }
}

export const Register = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="backregister">
                <div className="register-form">
                    <form>
                        <h2>GYM MATRIX®</h2>
                        <div style={{width: "100%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem"}}>
                            <section>
                                <label>Nombre:</label>
                                <input type="text" name="nombre" />
                            </section>
                            <section>
                                <label>Apellido:</label>
                                <input type="text" name="nombre" />
                            </section>
                        </div>
                        <div style={{width: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem"}}>
                            <section>
                                <label>Correo:</label>
                                    <input type="email" name="correo" />
                                </section>
                            <section>
                                <label>Celular:</label>
                                <input type="text" name="celular" />
                            </section>
                            <section>
                                <label>Contraseña:</label>
                                <input type="password" name="password" />
                            </section>
                        </div>
                        <div>
                            <section>
                                <label>Fecha de Nacimiento:</label>
                                <input type="date" name="datenacimiento" />
                            </section>
                        </div>
                        <div style={{marginTop: "40px", marginBottom: "40px"}}>
                            <input type="checkbox" name="terms" style={{accentColor: "black"}} />
                            <label style={{color: "black", textDecoration: "underline"}}> Aceptar Terminos y Condiciones</label>
                        </div>
                        <Button sx={ButtonRegister} variant="contained">Verificar Correo <i className="bi bi-box-arrow-in-right" style={{ fontSize: "24px" }}></i></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
