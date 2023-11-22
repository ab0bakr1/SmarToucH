import React from "react";
import "./Header.css"
import Cart from "./Cart/Cart";
import Favorite from "./Favorite/Favorite";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import Search from "./Search/Search";
import { Container } from "react-bootstrap";



function Header() {
    return (
        <header className="sticky-top" style={{backgroundColor:"white"}}>
            <Container>
                <div className="d-flex justify-content-between py-2" style={{backgroundColor:"white"}}>
                    <div className="logo">
                        <h1><a href="/"><span className="logo1" >Smar</span><span className="logo3">T</span><span className="logo2">oucH</span></a></h1>
                    </div>
                    <div className="HM d-flex justify-center align-items-center">
                        <Search />
                        <Cart />
                        <Favorite />
                        <Login />
                        <Navbar />
                    </div>
                </div>
            </Container>
        </header>
    )
}
export default Header