import MobileMenu from "./MobileMenu";
import NavigationBar from "./NavigationBar";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-10 bg-white shadow-lg">
      <NavigationBar setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
