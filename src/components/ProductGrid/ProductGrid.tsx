import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product";

const ProductGrid = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sản phẩm nổi bật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                product={{
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  imageUrl: item.imageUrl,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
