import Link from "next/link";

const Header = () => {
    return (
        <nav className="flex items-center flex-row w-full max-w-6xl">
            {/* <div className="flex items-center w-full"> */}
                <div className="ml-0 mr-0">Logo</div>
                <div className="flex ml-8 mr-0 grow justify-between items-center">
                    <div className="flex items-center ml-0 mr-0">
                        <Link href="/" className="mx-2">Home</Link>
                        <Link href="/sitter" className="mx-2">Become a Pet Sitter</Link>
                        <Link href="/sitter" className="mx-2">Find Pet Sitter</Link>
                        <Link href="/sitter" className="mx-2">Contacts</Link>
                        <Link href="/sitter" className="mx-2">Help</Link>
                    </div>
                    <div className="flex items-center mr-0 ml-2">
                        <Link href="/sitter">Log in</Link>
                        <Link href="/sitter" className="bg-red-500 text-white px-4 py-2 rounded ml-5">Register</Link>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Header;
