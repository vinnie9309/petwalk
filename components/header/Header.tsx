import Link from "next/link";

const Header = () => {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sitter">Become a Pet Sitter</Link></li>
            <li><Link href="/sitter">Find Pet Sitter</Link></li>
            <li><Link href="/sitter">Contacts</Link></li>
        </ul>
    )
}

export default Header;
