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
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {
    className: "title"
}, "Hello world");

const heading2 = React.createElement("h2", {
    className: "title"
}, "Namaste React JS!");

const container = React.createElement("div", {
    id: "container",
    namaste: "reactjs"
}, [heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(container);