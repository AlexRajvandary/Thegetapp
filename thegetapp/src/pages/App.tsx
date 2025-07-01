import "../styles.css";
import React from "react";
import LogoTheGetBalloons from "../components/Logo";
import { useLocation } from "react-router-dom";
import ProductCardMobile from "../components/ProductCardMobile";
import SearchInput from "../components/SearchInput";
import { ArrowDownUp, Settings2 } from "lucide-react";
import { Button } from "@heroui/react";

type SearchIconProps = {
  size?: number;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  [key: string]: unknown;  // для остальных props (если нужны)
};

export const SearchIcon: React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function App() {

 const products = [
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    title: "Dior",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/7091b3adf6b0496795fe9bf0af550a9d?w=800",
    title: "Enfants Riches Deprimes",
    label: "New",
    category: "T-Shirt",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/e1fb8280f2a645b9b7735ba29be88bdd?w=800",
    title: "Dior Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/48549855/b40a8af8b5ec4e3295dd5cda53501b1f?w=800",
    title: "Ballenciaga",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/df113a4515bf442295a74f9199c93020?w=800",
    title: "Monclere",
    label: "Bestseller",
    category: "Moncler Maya Jacket",
    price: "549.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
  // другие карточки...
];

 const location = useLocation();
 
  console.log(location.search);

  return (
    <div>
     <div className="flex pl-[35px] pt-[70px] pb-[30px] bg-transparent mx-4 sm:mx-0 sm:justify-center">
  <LogoTheGetBalloons />
</div>  
 <div className="px-[10px] py-[15px] flex items-center gap-2">
    <SearchInput />
    <Button isIconOnly variant="light">
       <Settings2 strokeWidth={1} color="black"/>
    </Button>
    <Button isIconOnly variant="light">
       <ArrowDownUp strokeWidth={1} color="black"/>
    </Button>
   
  </div>   
    
        <div className="grid grid-cols-2 gap-[5px] px-2">
  {products.map(product => (
   <ProductCardMobile title={product.title} 
                      price={product.price} 
                      imageSrc={product.imageSrc} 
                      category={product.category}
                      href={product.href}
                      label={product.label}/>
  ))}
</div>

   
      </div>
    
  );
}