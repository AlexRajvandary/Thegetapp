import { Link, useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import ProductCardMobile from "../components/ProductCardMobile";
import { useEffect } from "react";
import { backButton } from "@telegram-apps/sdk-react";

const products = [
  {
    imageSrc:
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    title: "Dior",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://media-assets.grailed.com/prd/listing/temp/7091b3adf6b0496795fe9bf0af550a9d?w=800",
    title: "Enfants Riches Deprimes",
    label: "New",
    category: "T-Shirt",
    price: "$109.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://media-assets.grailed.com/prd/listing/temp/e1fb8280f2a645b9b7735ba29be88bdd?w=800",
    title: "Dior Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://media-assets.grailed.com/prd/listing/48549855/b40a8af8b5ec4e3295dd5cda53501b1f?w=800",
    title: "Ballenciaga",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://media-assets.grailed.com/prd/listing/temp/df113a4515bf442295a74f9199c93020?w=800",
    title: "Monclere",
    label: "Bestseller",
    category: "Moncler Maya Jacket",
    price: "549.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
  {
    imageSrc:
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product",
    imageSrces: [
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    ],
  },
];

export default function SavedItemsPage() {
   const navigate = useNavigate();
   useEffect(() => {
      if (backButton.mount.isAvailable()) backButton.mount();
      if (backButton.show.isAvailable()) backButton.show();
  
      const handler = () => {
        navigate(-1);
        if (backButton.hide.isAvailable()) backButton.hide();
      };
  
      if (backButton.onClick.isAvailable()) backButton.onClick(handler);
      return () => {
        if (backButton.offClick.isAvailable()) backButton.offClick(handler);
        if (backButton.hide.isAvailable()) backButton.hide();
      };
    }, [navigate]);
  
  return (
    <AnimatedPage>
      <div className="mt-[70px]">Сохраненные товары</div>
      <div
        className={`grid ${"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"} gap-[5px] px-[2px] sm:gap-4 sm:px-6 max-w-[1440px] mx-auto`}
      >
        {products.map((product) => (
          <Link to="/product" state={{ product }}>
            {" "}
            <ProductCardMobile
              key={product.href}
              product={product}
              singleColumn={false}
            />
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
}
