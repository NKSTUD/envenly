import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={"border-t"}>
            <div className={"flex-center wrapper flex-between flex flex-col gap-5 p-4 text-center sm:flex-row "}>
                <Link href={"/"}>
                    <Image
                        src={"/assets/images/logo.svg"}
                        width={128}
                        height={38}
                        alt={"Evently Logo"}
                    />
                </Link>

                <p>
                    &copy; 2021 Evently. All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer