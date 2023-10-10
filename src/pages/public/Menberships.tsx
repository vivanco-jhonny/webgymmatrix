import { Button, SxProps } from "@mui/material";
import "./Menberships.css";

export const ButtonInclined: SxProps = {
    background: "black", 
    height: "50px", 
    fontFamily: "kanit", 
    clipPath: "polygon(10% 0,100% 0, 90% 100%, 0 100%)", 
    color: "white", 
    paddingLeft: "30px", 
    paddingRight: "30px", 
    fontWeight: "700", 
    borderRadius: "0px",
    "&:hover": {
        background: "black"
    }
}

export const Menberships = () => {
    return (
        <div>
            <div style={{marginTop: "90px", marginBottom: "20px", marginLeft: "20px", marginRight: "20px"}}>
                <center>
                    <h1 style={{color: "black"}}>Escoje la menbresia que se acomode a tus preferencias.</h1>
                    <label style={{fontSize: "20px", fontWeight: "300", width: "90%", color: "black"}}>
                        Descubre un mundo de beneficios exclusivos y experiencias únicas a través de nuestra membresía. Únete a nuestra comunidad y accede a contenido premium, descuentos especiales y eventos que te harán sentir parte de algo extraordinario. No pierdas la oportunidad de vivir una experiencia más allá de lo ordinario. ¡Tu membresía te está esperando!
                    </label>
                    <div style={{clipPath: "polygon(20% 0,100% 0, 80% 100%, 0 100%)", padding: "5px", border: "5px solid black", width: "300px", height: "70px", marginTop: "20px"}}>
                        <Button sx={ButtonInclined} variant="contained" >- Comparar Menbresias -</Button>
                    </div>
                </center>
            </div>
            <div className="grid-menbresias">
                <Menbership title="basico" price={59.9} details={["Toalla de sudor personal", "Trainer a disposicion", "Complemento Nutricional"]} />
                <Menbership title="platino" price={99.9} details={["Toalla de sudor personal", "Trainer a disposicion", "Complemento Nutricional", "Guia de dietas"]} />
                <Menbership title="premium" price={159.9} details={["Toalla de sudor personal", "Trainer a disposicion", "Complemento Nutricional", "Guia de dietas", "Suplemento Creatina"]} />
            </div>
        </div>
    )
}

interface MenbershipProps {
    title: string;
    price: number;
    details: Array<string>;
}

const buttonPrimary: SxProps = {
    border: "solid 1px black",
    borderRadius: "10px",
    color: "white",
    background: "black",
    fontFamily: "Kanit",
    ":hover": {
        color: "black"
    }
}

export const Menbership = ({ title, price, details }: MenbershipProps) => {
    return (
        <article>
            <p>{title} <i className="bi bi-circle-fill"></i></p>
            <h1 style={{ color: "rgb(0, 0, 0)" }}>GYM MATRIX {title}</h1>
            <h5>S/. {price.toFixed(2)}</h5>
            <ul>
                <label>Detalles:</label>
                {
                    details?.map((detail: string) => {
                        return (
                            <li>{detail}. <i className="bi bi-check"></i></li>
                        )
                    })
                }
            </ul>
            <div>
                <Button sx={buttonPrimary}>Obtener ahora
                    <i className="bi bi-cart-plus-fill"></i>
                </Button>
            </div>
        </article>
    )
}
