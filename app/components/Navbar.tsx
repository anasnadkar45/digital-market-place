import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Navbar() {
    const {isAuthenticated} = getKindeServerSession();
    const {getUser} = getKindeServerSession();
    const user = getUser();
    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link href='/'>
                    <h1 className="text-2xl font-semibold">Digi<span className="text-primary">Market</span></h1>
                </Link>
            </div>

            <NavbarLinks />

            {/* Login & Register Buttons */}
            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
                {/* <div className="hidden md:flex gap-x-2">
                    <Button>Login</Button>
                    <Button variant={"secondary"}>Register</Button>
                </div> */}

                <LoginLink>
                    <Button>Login</Button>
                </LoginLink>
                <RegisterLink>
                    <Button variant={"secondary"}>Register</Button>
                </RegisterLink>

                {/* small device menu */}
                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}