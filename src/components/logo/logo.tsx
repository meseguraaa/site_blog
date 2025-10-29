import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="" title="Páginsa inicial">
            <Image src="/logo.svg" alt="Logo site"width={116} height={32} />     
        </Link>
    )
}   