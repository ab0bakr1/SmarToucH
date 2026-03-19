import React, { useState, useEffect } from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
// افترضت هنا أن المكونات الفرعية موجودة لديك بالفعل
import Cart from "./Cart/Cart";
import Favorite from "./Favorite/Favorite";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import Search from "./Search/Search";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    // تأثير لتغيير شكل النافبار عند النزول للأسفل
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`custom-header sticky-top ${scrolled ? "scrolled" : ""}`}>
            <Container>
                <div className="header-wrapper d-flex justify-content-between align-items-center py-3">
                    {/* اللوجو بتصميم أحدث */}
                    <div className="logo-section">
                        <a href="/" className="main-logo">
                            <span className="brand-accent">S</span>mart<span className="brand-highlight">ouch</span>
                        </a>
                    </div>

                    {/* منطقة الأدوات */}
                    <div className="action-icons d-flex align-items-center">
                        <div className="search-wrapper px-2"><Search /></div>
                        <div className="icons-group d-flex align-items-center gap-4">
                            <Favorite />
                            <Cart />
                            <Login />
                            <div className="menu-divider"></div>
                            <Navbar />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
