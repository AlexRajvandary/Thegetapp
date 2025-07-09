import { Link, useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import ProductCardMobile from "../components/ProductCardMobile";
import { useEffect } from "react";
import { backButton } from "@telegram-apps/sdk-react";

// Пример структуры данных: товары сгруппированы по дате
const viewedProductsByDate = [
  {
    date: "2025-07-09",
    products: [
      {
        title: "Dior Shoes",
        label: "Bestseller",
        category: "Women sneakers",
        price: "$129.99",
        href: "/product",
        imageSrc:
          "https://media-assets.grailed.com/prd/listing/temp/e1fb8280f2a645b9b7735ba29be88bdd?w=800",
        imageSrces: [],
      },
      {
        title: "Samba OG",
        label: "New",
        category: "Men sneakers",
        price: "$109.99",
        href: "/product",
        imageSrc:
          "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
        imageSrces: [],
      },
    ],
  },
  {
    date: "2025-07-08",
    products: [
      {
        title: "Gazelle Indoor Shoes",
        label: "Bestseller",
        category: "Women sneakers",
        price: "$129.99",
        href: "/product",
        imageSrc:
          "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
        imageSrces: [],
      },
    ],
  },
];

export default function HistoryPage() {
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
      <div className="mt-[70px] px-4 text-lg font-semibold">История просмотров</div>
      <div className="px-[2px] sm:px-6 max-w-[1440px] mx-auto">
        {viewedProductsByDate.map(({ date, products }) => (
          <div key={date} className="mt-6">
            <div className="text-sm text-gray-500 mb-2 px-1">{new Date(date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</div>
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[5px] sm:gap-4`}>
              {products.map((product, idx) => (
                <Link to={product.href} state={{ product }} key={idx}>
                  <ProductCardMobile product={product} singleColumn={false} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
}
