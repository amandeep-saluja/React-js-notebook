/**
 * 
 * HMR - Hot Module Reloading
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable with older version of browser
 * HTTPS on dev
 * port Number
 * Consistant Hashing Algorithm
 * Tree Shaking - Removing unwanted code
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", 
    {
        className: "title",
        key: "h1"
    }, 
    "Hello world");

const heading2 = React.createElement("h2", 
    {
        className: "title",
        key: "h2"
    }, 
    "Namaste React JS!");

const heading3 = <h1 id="title" key="h3">Namaste JS</h1>;

const container = React.createElement("div", {
    id: "container",
    namaste: "reactjs"
}, [heading1,heading2, heading38]);

// passing 
const root = ReactDOM.createRoot(document.getElementById("app"));

//async differ
root.render(container);