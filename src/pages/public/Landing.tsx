import { Button, SxProps } from "@mui/material";
import classe1 from "../../../public/multimedia/home-programs-img1.jpg";
import classe2 from "../../../public/multimedia/home-programs-img2.jpg";
import classe3 from "../../../public/multimedia/home-programs-img3.jpg";
import classe4 from "../../../public/multimedia/home-programs-img4.jpg";
import baner from "../../../public/multimedia/img-gym-02.jpg";
import banermovil from "../../../public/multimedia/img-gym-07.jpg";
import video from "../../../public/multimedia/vid-gym-presentacion.mp4";
import "./Landing.css";
export const ButtonStart: SxProps = {
    paddingLeft: "50px",
    paddingRight: "50px",
    fontFamily: "kanit",
    fontSize: "20px",
    borderRadius: "0px",
    color: "black",
    background: "rgb(255, 230, 0)",
    clipPath: "polygon(10% 0,100% 0, 90% 100%, 0 100%)",
    "&:hover": {
        background: "rgb(255, 230, 0)",
    }
}
export const ButtonStartMovil: SxProps = {
    width: "250px",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontFamily: "kanit",
    fontSize: "15px",
    borderRadius: "0px",
    color: "black",
    background: "rgb(255, 230, 0)",
    clipPath: "polygon(10% 0,100% 0, 90% 100%, 0 100%)",
    "&:hover": {
        background: "rgb(255, 230, 0)",
    }
}
export const Landing = () => {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <div className="baner">
                    <img src={baner} alt="baner" style={{ width: "100%" }} />
                    <div className="borderbutton">
                        <Button sx={ButtonStart} variant="contained">¡EMPEZAR AHORA! <i className="bi bi-play-fill"></i></Button>
                    </div>
                </div>
                <div className="baner-movil">
                    <img src={banermovil} alt="banermovil" style={{ width: "100%" }} />
                    <div className="borderbutton">
                        <Button sx={ButtonStartMovil} variant="contained">¡EMPEZAR AHORA! <i className="bi bi-play-fill"></i></Button>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "100px"}}>
                <center>
                    <h2 style={{ margin: "10px", fontWeight: "300", fontSize: "50px", width: "95%", marginBottom: "50px", color: "black" }}>
                        Transforma tu sudor en éxito y tus metas en realidad en nuestro gimnasio.
                    </h2>
                </center>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 30rem), 1fr))", gap: "5rem", padding: "40px" }}>
                    <video src={video} autoPlay={true} muted loop style={{ width: "100%", borderRadius: "20px", boxShadow: "0px 0px 0px 5px black" }}></video>
                    <p style={{ fontSize: "32px", color: "black", fontWeight: "300" }}>
                        "Empiezo este emocionante viaje hacia un estilo de vida más saludable y activo en el gimnasio. Cada
                        repetición, cada gota de sudor y cada esfuerzo serán pasos hacia mi mejor versión. ¡Hoy marco el
                        comienzo de mi transformación física y mental!"
                    </p>
                </div>
                <center>
                    <h2 style={{ margin: "10px", fontWeight: "300", fontSize: "50px", width: "95%", marginBottom: "50px", color: "black" }}>
                        Clases Funcionales Para Deportistas.
                    </h2>
                </center>
                <div className="grid-classes">
                    <section>
                        <h1>Spinning</h1>
                        <button>Ver detalles</button>
                        <img src={classe1} alt="m1"/>
                    </section>
                    <section>
                        <h1>Full body</h1>
                        <button>Ver detalles</button>
                        <img src={classe2} alt="m1"/>
                    </section>
                    <section>
                        <h1>Yoga</h1>
                        <button>Ver detalles</button>
                        <img src={classe3} alt="m1"/>
                    </section>
                    <section>
                        <h1>Funcional</h1>
                        <button>Ver detalles</button>
                        <img src={classe4} alt="m1"/>
                    </section>
                </div>
            </div>
        </div>
    )
}
