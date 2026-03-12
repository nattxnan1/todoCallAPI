import Image from "next/image";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductProps {
  product: ProductItem;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col items-center border border-blue-200 rounded-2xl p-4 mt-4 shadow-md hover:shadow-xl transition duration-300 bg-white">
      
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={120}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-start w-full mt-3">
        <h2 className="text-sm font-semibold text-blue-800">
          {product.title}
        </h2>

        <div className="flex justify-between items-center w-full mt-2">
          <h2 className="text-lg font-bold text-blue-600">
            ${product.price}
          </h2>

          <button className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;