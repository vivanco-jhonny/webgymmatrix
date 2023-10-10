import "./Plans.css";

export const Plans = () => {
    return (
        <div>
            <div style={{marginTop: "90px"}}>
                <center>
                    <h1 style={{color: "black"}}>Escoge tu camino, forja tu fuerza: ¡Tu éxito, tu plan en el gym!</h1>
                    <label style={{fontSize: "20px", fontWeight: "300", width: "90%", color: "black"}}>
                        Elige más que un plan de estancia en el gimnasio, elige una transformación personalizada. Nuestros
                        planes están diseñados para llevar tus metas al siguiente nivel, brindándote las herramientas y el
                        apoyo necesarios para lograr el éxito. Tu viaje hacia la fuerza, la resistencia y la confianza
                        comienza aquí. ¿Listo para comprometerte con tu mejor versión?
                    </label>
                </center>
            </div>
            <div className="grid-plans">
                <Plan title="Día" days={1} price={14.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Baile"]} />
                <Plan title="1 Mes" days={30} price={119.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Guia de Dietas"]} />
                <Plan title="3 Meses" days={90} price={269.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Te regalamos Complemento nutricional"]} />
                <Plan title="6 Meses" days={180} price={519.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Suplemento Creatina"]} />
            </div>
        </div>
    )
}

interface PlanProps {
    title: string;
    days: number;
    price: number;
    details: Array<string>
}

export const Plan = ({ title, days, price, details }: PlanProps) => {
    return (
        <article>
            <p>Duracion {days} Día(s) <i className="bi bi-hourglass-top"></i></p>
            <h1>Plan {title}</h1>
            <h5>S/. {price.toFixed(2)}</h5>

            <div>
                <ul>
                    <label><i className="bi bi-list-nested"></i> Detalles</label>
                    {
                        details.map((detail: string) => {
                            return (
                                <li key={detail}>{detail}. <i className="bi bi-check" style={{ color: "white" }}></i></li>
                            )
                        })
                    }
                </ul>
                <button>Empezar ahora</button>
            </div>
        </article>
    )
}
