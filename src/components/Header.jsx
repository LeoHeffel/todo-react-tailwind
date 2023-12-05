import MoonIcon from "./icons/IconMoon";
const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className=" uppercase text-white text-3xl font-semibold tracking-[.3em]">
                        Todo
                    </h1>
                    <button>
                        <i className="fa-solid fa-plus">
                            <MoonIcon fill="white"/>
                        </i>
                    </button>
                </div>
            </header>
    );
};
export default Header;