import React, { useEffect, useState } from "react";
import './App.css';
import { fetch } from "../services/Api";
import { Loader } from "./Loader";

export const Converter = () => {
    const [link, setLink] = useState('');
    const [id, setId] = useState(null);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(id) {
            const fetchData = async () => {
                setIsLoading(true);
                let interval = setInterval(async function () {
                    const res = await fetch(id);

                    if(res.status === 200 && res.data.status === "ok"){
                        setResponse(res.data);
                        clearInterval(interval);
                        setIsLoading(false);
                        setLink(''); // Restablecer el estado del enlace
                        alert("Se descargó el archivo correctamente");
                        window.location.reload(); // Recargar la página después de la descarga
                    } else if (res.status === 200 && res.data.status === "fail"){
                        alert("Invalid video ID");
                        clearInterval(interval);
                        setIsLoading(false);
                    }
                    
                }, 1000);
            }

            fetchData();
        }
    }, [id]);

    useEffect(() => {
        if(response) {
            window.location.href = response.link;
        }
    }, [response]);
    
    return(
        <div className="app">
            <div id="logo">
                <h2>YT2MP3</h2> 
            </div>

            <div id="body">
                <input 
                    type="text"
                    placeholder="Pega aquí el link de YouTube"
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value);
                    }} 
                />
                <span>Podríamos tardar un momento en convertir tu video a mp3</span>
            </div>
            <button
                onClick={() => {
                    const text = link.split("=")[1];
                    if (text) {
                        setId(text);
                    }
                }}
            >
                Descargar
            </button>
            {isLoading && <Loader />}
        </div>
    )
}
