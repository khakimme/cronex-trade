import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image alt="Cronex logo" src={logo} width={88} height={20} />
      </a>
    </Link>
  );
}
