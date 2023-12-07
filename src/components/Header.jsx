import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
const Header = () => {

    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark');
    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    
    let Icon = darkMode ?  IconSun: IconMoon
    
    useEffect(() => {
        if (darkMode) {
            localStorage.removeItem('theme')
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else {
            localStorage.removeItem('theme')
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);

    

    return (
        <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className=" uppercase text-white text-3xl font-semibold tracking-[.3em]">
                        Todo
                    </h1>
                    <button onClick={toggleTheme}>
                        <i className="fa-solid fa-plus">
                            <Icon fill="white"/>
                        </i>
                    </button>
                </div>
            </header>
    );
};
export default Header;