import CartIcon from "../CartIcon/CartIcon";
import { useCart } from "../../hook/useCart";

const CartDropDown = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-sm space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Giỏ hàng</h3>

      {cartItems.length === 0 || cartItems.every((item) => item.quantity === 0) ? (
        <p className="text-gray-500 text-sm text-center">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <>
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
            {cartItems.map((item, index) =>
              item.quantity > 0 ? (
                <CartIcon
                  key={index}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  number={item.quantity}
                  price={item.price}
                />
              ) : null
            )}
          </div>

          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-base font-medium text-gray-700">Tổng tiền:</span>
            <span className="text-lg font-bold text-green-600">
              {total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>

          <button className="w-full py-2 mt-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
            Thanh toán
          </button>
        </>
      )}
    </div>
  );
};

export default CartDropDown;
