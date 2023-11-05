import Container from "@/components/ui/container";
import Link from "next/link";

import getCategories from "@/actions/get-categories";
import MainNavbar from "./main-nav";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const NavBar = async () => {
  const categories = await getCategories();

  return (
    <div className="broder-b">
      <Container>
        <div className="relative px-4 md:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">MansaExpress</p>
          </Link>
          <MainNavbar data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
