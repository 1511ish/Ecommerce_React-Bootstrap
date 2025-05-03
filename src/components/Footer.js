// Footer.js
import React from 'react';
// import './Footer.css'; // optional for custom styles

const Footer = () => {
    return (
        <footer className="text-white text-center py-4" style={{background:"#56CCF2"}}>
            <div className="d-flex justify-content-around align-items-center mt-2 px-4">
                <div className="footer-title h4 mb-3">The Generics</div>
                <div className="footer-icons">
                    <ul className="list-unstyled d-flex justify-content-center gap-4 m-0 p-0">
                        <li>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="youtube" width="40" />
                            </a>
                        </li>
                        <li>
                            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                                <img src="./img/Spotify Logo.png" alt="Spotify" width="40" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="./img/Facebook Logo.png" alt="facebook" width="40" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
