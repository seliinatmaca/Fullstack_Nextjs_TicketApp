import Link from "next/link";
import { FaTicketAlt, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-nav p-5 mdÇp-10 flex justify-between">
      <div className="flex items-center space-x-8">
        <Link
          href={"/"}
          className="flex items-center gap-2 hover:text-gray-400"
        >
          <FaHome />
          Anasayfa
        </Link>
        <Link
          href={"/form/new"}
          className="flex items-center gap-2 hover:text-gray-400"
        >
          <FaTicketAlt />
          Oluşturma
        </Link>
      </div>
      <div>
        <p>Selin</p>
      </div>
    </header>
  );
};

export default Header;
