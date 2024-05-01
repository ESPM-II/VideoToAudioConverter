import React, { useEffect, useState } from "react";
import './App.css';
import { fetch } from "../services/Api";

export const Converter = () => {
    const [link, setLink] = useState('');
    const [id, setId] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if(id) {
        const fetchData =  () => {
            let interval = setInterval(async function () {
                const res = await fetch(id);

                if(res.status === 200 && res.data.status === "ok"){
                    setResponse(res.data);
                    clearInterval(interval);
                } else if (res.status === 200 & res.data.status === "fail"){
                    alert("Invalid video ID");
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
            <h2>MP3 DOWNLOADER</h2> 
        </div>

        <div id="body">
            <input 
                type="text"
                placeholder="YouTube link here"
                value={link}
                onChange={(e) => {
                    setLink(e.target.value);
                }} 
                />
            <span>It might take a moment to convert your video</span>
        </div>
        <button
            onClick={() => {
                const text = link.split("=")[1];
                if (text) {
                    setId(text);
                }
            }}
        >Download</button>
        </div>
    )
}

