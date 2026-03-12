import ProductCard from "./ProductCard";


interface ProductItem {
    id: number;
    title: string;
    price: number;
    image: string
}
const ProductPage = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=10');
    const products:ProductItem[] = await res.json();
    console.log(products) // Debug ทุกครั้งเมื่อเรียก api ว่ามีข้อมูลถูกส่งมาได้

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-6 gap-4">
        {
            products.map((product:ProductItem)=>(
                <ProductCard key={product.id} product={product}>
                </ProductCard>))
        }
      </div>
    </>
  );
};
export default ProductPage;