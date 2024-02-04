import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavigationBar from "./NavigationBar";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-10 bg-white">
      <NavigationBar setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};
