import Logo from "./Logo";
import Catalog from "./Catalog";
import Markets from "./Markets";
import UserNavigation from "./UserNavigation";

export default function Navbar() {
  return (
    <header className="flex flex-rows justify-between items-center px-2 h-navbar-height">
      <div className="flex flex-rows items-center gap-5">
        <Logo />
        <Catalog />
        <Markets />
      </div>
      <UserNavigation />
    </header>
  );
}
