import React, { useEffect, useState } from 'react'


const Contador = ({ fechaLimite }) => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const diff = fechaLimite - now;
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                setTimeRemaining({ days, hours, minutes, seconds });
            } else {
                // La fecha límite ha pasado, puedes manejarlo aquí
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(intervalId);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [fechaLimite]);

    return (
        <div style={{
            textAlign: "center",
            maxWidth: "950px",
            margin: "0 auto",
            border: "1px solid #e6e6e6",
            padding: "40px 25px",
            marginTop: "50px"
        }}>
            <p>Tiempo restante para finalizar el censo:</p>
            <p>Dias: {timeRemaining.days}, Horas: {timeRemaining.hours}, Minutos: {timeRemaining.minutes} </p>
        </div>
    );
};

export default Contador;