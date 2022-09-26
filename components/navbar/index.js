import Logo from "./Logo";
import Catalog from "./Catalog";
import Markets from "./Markets";
import UserNavigation from "./UserNavigation";

export default function Navbar() {
  return (
    <header
      className="flex 
                       flex-rows 
                       justify-between 
                       items-center 
                       px-2 h-navbar 
                       bg-grayish-blue-89 
                       border-b 
                       border-grayish-blue-86"
    >
      <div className="flex flex-rows items-center gap-5">
        <Logo />
        <Catalog />
        <div className="md:hidden">
          <Markets />
        </div>
      </div>
      <UserNavigation />
    </header>
  );
}
