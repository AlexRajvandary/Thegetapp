import { useState, useEffect } from "react";
import LogoTheGetBalloons from "../components/Logo";
import ProductCardMobile from "../components/ProductCardMobile";
import SearchInput from "../components/SearchInput";
import { ArrowDownUp, Columns2, Funnel, Rows2 } from "lucide-react";
import { Button } from "@heroui/react";
import { backButton } from "@telegram-apps/sdk-react";
import Carousel from "../components/Carousel";
import SubscriptionCardMobile from "../components/SubscriptionCardMobile";
import Filters from "../components/Filters";
import FilterChips from "../components/FilterChips";

export default function App() {
  const [singleColumn, setSingleColumn] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    // Монтируем кнопку назад, если доступна
    if (backButton.mount.isAvailable()) {
      backButton.mount();
    }

    return () => {
      backButton.unmount();
    };
  }, []);

  useEffect(() => {
    if (filtersOpen) {
      // Показываем кнопку назад
      if (backButton.show.isAvailable()) {
        backButton.show();
      }

      // Обработчик клика по кнопке назад
      const onBackClick = () => {
        setFiltersOpen(false);
      };

      if (backButton.onClick.isAvailable()) {
        backButton.onClick(onBackClick);

        // Очистка подписки при закрытии фильтров или размонтировании
        return () => {
          backButton.offClick(onBackClick);
          if (backButton.hide.isAvailable()) {
            backButton.hide();
          }
        };
      }
    } else {
      // Скрываем кнопку назад если фильтры закрыты
      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    }
  }, [filtersOpen]);

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
    }
  ];
  const subscriptions = [
 {
      imageSrc: '/spotify.png',
      title: "Spotify",
      label: "Bestseller",
      category: "Music",
      price: "$129.99",
      href: "/subscribtion"
    },
     {
      imageSrc: '/adobe.png',
      title: "Adobe",
      label: "Bestseller",
      category: "Work",
      price: "$129.99",
      href: "/subscribtion"
    },
    {
      imageSrc: '/deezer.png',
      title: "Deezer",
      label: "Bestseller",
      category: "Music",
      price: "$129.99",
      href: "/subscribtion"
    },
    {
      imageSrc: '/discord.png',
      title: "Discord",
      label: "Bestseller",
      category: "Social",
      price: "$129.99",
      href: "/subscribtion"
    },
    {
      imageSrc: '/disney.png',
      title: "Disney",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion"
    },
    {
      imageSrc: '/netflix.png',
      title: "Netflix",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion"
    },
    {
      imageSrc: '/prime.png',
      title: "Prime",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion"
    },
    {
      imageSrc: '/youtube.png',
      title: "Youtube",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion"
    },

  ];

  return (
    <div>
      <div className="flex pt-[110px] pb-[30px] bg-transparent mx-4 sm:mx-0 sm:justify-center">
        <LogoTheGetBalloons />
      </div>
        <h2 className="mx-4 font-extrabold text-[24px] leading-[130%] tracking-[-0.01em]">
          Подписки
        </h2>
      <div className="mx-4 bg-gray-200 rounded-lg py-2 my-2">
        <Carousel visibleSlides={2} items={subscriptions.map(subscription => (
  <SubscriptionCardMobile
    key={subscription.title}         // обязательно уникальный key
    title={subscription.title}
    price={subscription.price}
    imageSrc={subscription.imageSrc}
    category={subscription.category}
    href={subscription.href}
    label={subscription.label}
  />
))} />
      </div>
      <h2 className="font-extrabold text-[24px] mx-4 py-[5px] leading-[130%] tracking-[-0.01em]">
        Одежда
      </h2>
      <div className="px-[10px] py-[15px] flex items-center gap-2">
        <SearchInput />
        <Button
          isIconOnly
          variant="light"
          onPress={() => setFiltersOpen(true)}
          aria-label="Открыть фильтры"
        >
          <Funnel strokeWidth={1} color="black" />
        </Button>
        <Button isIconOnly variant="light">
          <ArrowDownUp strokeWidth={1} color="black" />
        </Button>
        <Button
          isIconOnly
          variant="light"
          onPress={() => setSingleColumn((prev) => !prev)}
          aria-label="Переключить вид списка"
        >
          {singleColumn ? (
            <Columns2 strokeWidth={1} color="black" />
          ) : (
            <Rows2 strokeWidth={1} color="black" />
          )}
        </Button>
      </div>
       <FilterChips
      categories={selectedCategories}
      brands={selectedBrands}
      colors={selectedColors}
      sizes={selectedSizes}
      genders={selectedGenders}
      priceRange={priceRange}
      onRemove={(type, value) => {
        if (type === "category") {
          setSelectedCategories((prev) => prev.filter((c) => c !== value));
        }
        if (type === "brand") {
          setSelectedBrands((prev) => prev.filter((b) => b !== value));
        }
        if (type === "color") {
          setSelectedColors((prev) => prev.filter((c) => c !== value));
        }
        if (type === "size") {
          setSelectedSizes((prev) => prev.filter((s) => s !== value));
        }
        if (type === "gender") {
          setSelectedGenders((prev) => prev.filter((g) => g !== value));
        }
        if (type === "price") {
          setPriceRange([0, 1000]); // сброс диапазона
        }
      }}/>

      {/* Сетка товаров */}
      <div className={`grid ${singleColumn ? "grid-cols-1" : "grid-cols-2"} gap-[5px] px-2`}>
        {products.map((product) => (
          <ProductCardMobile
            key={product.href}
            title={product.title}
            price={product.price}
            imageSrc={product.imageSrc}
            category={product.category}
            href={product.href}
            label={product.label}
            singleColumn={singleColumn}
          />
        ))}
      </div>

      {/* Fullscreen фильтры */}
     {filtersOpen && (
  <div
    className="fixed inset-0 z-50 bg-white pt-[110px] p-6 overflow-auto"
    style={{ backdropFilter: "blur(4px)" }}
    role="dialog"
    aria-modal="true"
  >
    <h2 className="text-xl py-[5px] font-bold mb-4">Выберите Фильтры</h2>

    {/* 🟡 Чипы с выбранными фильтрами */}
    <FilterChips
      categories={selectedCategories}
      brands={selectedBrands}
      colors={selectedColors}
      sizes={selectedSizes}
      genders={selectedGenders}
      priceRange={priceRange}
      onRemove={(type, value) => {
        if (type === "category") {
          setSelectedCategories((prev) => prev.filter((c) => c !== value));
        }
        if (type === "brand") {
          setSelectedBrands((prev) => prev.filter((b) => b !== value));
        }
        if (type === "color") {
          setSelectedColors((prev) => prev.filter((c) => c !== value));
        }
        if (type === "size") {
          setSelectedSizes((prev) => prev.filter((s) => s !== value));
        }
        if (type === "gender") {
          setSelectedGenders((prev) => prev.filter((g) => g !== value));
        }
        if (type === "price") {
          setPriceRange([0, 1000]); // сброс диапазона
        }
      }}
    />

    {/* 🔵 Аккордеоны фильтров */}
    <Filters
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      selectedBrands={selectedBrands}
      setSelectedBrands={setSelectedBrands}
      selectedColors={selectedColors}
      setSelectedColors={setSelectedColors}
      selectedSizes={selectedSizes}
      setSelectedSizes={setSelectedSizes}
      selectedGenders={selectedGenders}
      setSelectedGenders={setSelectedGenders}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
    />
  </div>
)}
    </div>
  );
}
