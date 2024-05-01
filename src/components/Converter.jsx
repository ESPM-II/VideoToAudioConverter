import React from "react";
import './App.css';

export const Converter = () => {
    
    return(
        <div className="app">
        <div id="logo">
            <h2>MP3 DOWNLOADER</h2> 
        </div>

        <div id="body">
            <input 
                type="text"
                placeholder="YouTube link here" 
                />
            <span>It might take a moment to convert your video</span>
        </div>
        <button>Download</button>
        </div>
    )
}

