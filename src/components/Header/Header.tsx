import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md px-6 py-4 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold text-green-600 font-mono">
          MARKET
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Link
            to="/"
            className="px-4 py-2 border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-600 hover:text-white transition w-full md:w-auto text-center"
          >
            Trang chủ
          </Link>
          <Link
            to="/cart"
            className="px-4 py-2 border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-600 hover:text-white transition w-full md:w-auto text-center"
          >
            Xem giỏ hàng
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
