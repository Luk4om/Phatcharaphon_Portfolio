import Link from "next/link";
import Button from "./ui/Button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Halls<span className="text-amber-400">.</span>
                    </h1>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        {/* <p>Hire me</p> */}
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav & hire me button */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header;