import React from "react";
import "./home.css";
import {Avatar} from "@material-ui/core";
import Appsicon from "@material-ui/icons/Apps";
import {Link} from "react-router-dom";
import Search from "../components/search";

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <Appsicon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                 alt="logo"
                 />
                    <div className="home__inputContainer">
                        <Search />
                    </div>
                </div>
        </div>
    );
}

export default Home;