import { Button } from "@/components/ui/button";
import Img from "../../public/assets/Wanderlast.png";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl)  bg-white shadow-md">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div>
          <Image src={Img} width={200} height={200} alt="wanderlust"></Image>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="hidden rounded-full sm:inline-flex"
            variant="outline"
          >
            Profile
          </Button>
          <Button className="rounded-full">Login</Button>
          <Button className="rounded-full">SignUp</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
