import Image from 'next/image';
import Link from 'next/link';
import {
  Grid2X2,
  Grid2x2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';

function Header() {
  return (
    <header className="flex items-center bg-walmart px-10 py-7 space-x-5">
      <Link href="/" className="">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>

      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none 
        placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div>
        <Link
          href={'/'}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2x2 size={20} />
          <p>Departments</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
