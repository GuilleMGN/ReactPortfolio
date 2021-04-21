import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="two-toned-footer-color"></div>
            <p className="text-muted-footer text-center">
                &copy; Copyright 2021 Matthew Guillen
            </p>
        </footer>
    );
}
export default Footer;