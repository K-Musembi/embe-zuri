import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <main>{children}</main>
            <footer>2024 embe zuri</footer>
        </div>
    );
};

export default MainLayout;
