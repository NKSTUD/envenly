import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <header className={"w-full border-b"}>
            <div className="wrapper flex items-center justify-between">
                <Link href={"/"} className={"w-36"}>
                    <Image src={"/assets/images/logo.svg"} width={128}
                           height={38}
                           alt={"Evently Logo"}></Image>
                </Link>

                <div>
                    <SignedIn>
                        <UserButton afterSignOutUrl={"/"}/> {/*L'url de redirection après la connection*/}
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className={"rounded-full"} size={"lg"}>
                            <Link href={"/sign-in"}>Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}
