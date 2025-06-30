import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id?: number;
  title?: string;
  category?: string;
  price?: string;
  label?: string;
  imageSrc?: string;
};

type ProductGridProps = {
  products: Product[];
}

export default function ProductGrid({products} : ProductGridProps) {
  
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    // Эмулируем загрузку: можно заменить на props.products.length === 0 если нужно
    if (products.length > 0) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [products]);

  const skeletonCount = 8;

  return (
    <div className="flex-1">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
          gap: "16px",
          justifyContent: "start",
        }}
      >
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <ProductCard key={`skeleton-${i}`} isLoading />
            ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                label={product.label}
                category={product.category}
                price={product.price}
                href={`/product/${product.id}`}
              />
            ))}
      </div>
    </div>
  );
}
