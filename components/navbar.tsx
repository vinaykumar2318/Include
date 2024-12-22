import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-2 py-2 lg:px-5">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/includeLogo.png"
          width={180}
          height={32}
          alt="include logo"
          className="max-sm:size-30"
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;