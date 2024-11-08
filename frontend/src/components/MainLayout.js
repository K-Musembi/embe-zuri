import React from "react";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <NavBar />
            <main>{children}</main>
            <footer>2024 embe zuri</footer>
        </div>
    );
};

export default MainLayout;
