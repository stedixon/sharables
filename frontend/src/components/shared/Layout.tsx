import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import { Page } from "../../App";
import { useEffect, useState } from "react";

interface LayoutProps {
    username: string;
    currentPage: string;
    onNavigate: (page: Page) => void;
    onLogout: () => void;
  }

const Layout: React.FC<LayoutProps> = ({ username, currentPage, onNavigate, onLogout }) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        setShowMenu(currentPage !== "login" && currentPage !== "register");
    }, [currentPage, showMenu])

    return (
        <>
            {showMenu &&
            <MenuBar username={username} onNavigate={onNavigate}  onLogout={onLogout} />}
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;