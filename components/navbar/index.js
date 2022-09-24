import Catalog from "./Catalog";
import Prices from "./Prices";
import UserNavigation from "./UserNavigation";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header>
      <div>
        <Logo />
        <Catalog />
        <Prices />
      </div>
      <UserNavigation />
    </header>
  );
}
