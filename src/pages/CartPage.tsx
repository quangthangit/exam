import BuyerForm from '../components/BuyerForm/BuyerForm';
import CartDropDown from '../components/CartDropdown/CartDropDown';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Giỏ hàng</h2>
          <CartDropDown />
        </div>
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông tin người mua</h2>
          <BuyerForm />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
