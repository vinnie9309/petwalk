import Link from "next/link";
import logo from '../../public/assets/images/logo.png';
import Image from "next/image";

const Header = () => {
    return (
        <nav className="flex items-center flex-row w-full max-w-6xl">
            {/* <div className="flex items-center w-full"> */}
                <div className="ml-0 mr-0"><Image src={logo} alt="pesitter logo" height="120" width="160" /></div>
                <div className="flex ml-8 mr-0 grow justify-between items-center">
                    <div className="flex items-center ml-0 mr-0">
                        <Link href="/" className="mx-2">Home</Link>
                        <Link href="/sitter" className="mx-2">Станете Гледач</Link>
                        <Link href="/sitter" className="mx-2">Намерете Гледач</Link>
                        <Link href="/sitter" className="mx-2">Контакти</Link>
                        <Link href="/sitter" className="mx-2">Помощ</Link>
                    </div>
                    <div className="flex items-center mr-0 ml-2">
                        <Link href="/sitter">Вход</Link>
                        <Link href="/sitter" className="bg-red-500 text-white px-4 py-2 rounded ml-5">Регистрация</Link>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Header;
