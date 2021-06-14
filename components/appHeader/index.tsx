import Link from "next/link";
export default function AppHeader() {
    return (
        <header>
            <Link href="/">INICIO</Link>
            <Link href="/test">test</Link>
        </header>
    );
}
