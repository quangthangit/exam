import { useCart } from "../../hook/useCart";
import type { Product } from "../../types/Product";
import { ShoppingCart } from "lucide-react";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col items-center group">
      <div className="w-full h-[320px] bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-center text-lg font-semibold text-gray-900 line-clamp-2 min-h-[48px]">
        {product.name}
      </h3>

      <p className="text-green-600 text-xl font-bold mt-1 mb-4">
        {product.price.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-base font-medium transition"
      >
        <ShoppingCart size={18} />
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
