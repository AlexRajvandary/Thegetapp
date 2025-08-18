import ProductCardMobile from "../components/ProductCardMobile";
import SearchInput from "../components/SearchInput";
import { ArrowDownUp, Columns2, Funnel, Rows2 } from "lucide-react";
import { Button, Pagination } from "@heroui/react";
import Filters from "../components/Filters";
import FilterChips from "../components/FilterChips";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { backButton } from "@telegram-apps/sdk-react";
import './../App.css';

export default function Catalogue() {
     const [singleColumn, setSingleColumn] = useState(false);
      const [filtersOpen, setFiltersOpen] = useState(false);
      const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
      const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
      const [selectedColors, setSelectedColors] = useState<string[]>([]);
      const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
      const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
      const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
      const navigate = useNavigate();

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
  return <>
   <h2 className="font-extrabold text-[24px] mx-4 lg:mx-auto lg:max-w-[1440px] py-[5px] leading-[130%] tracking-[-0.01em]">
          Каталог
        </h2>
        <div className="px-[10px] py-[15px] flex items-center gap-2 lg:max-w-[1440px] lg:mx-auto">
          <div
            onClick={() => navigate("/search")}
            className="w-full md:w-[700px]"
          >
            <SearchInput readOnly />
          </div>

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
        <div className="mx-[10px]">
          <FilterChips
            categories={selectedCategories}
            brands={selectedBrands}
            colors={selectedColors}
            sizes={selectedSizes}
            genders={selectedGenders}
            priceRange={priceRange}
            onRemove={(type, value) => {
              if (type === "category") {
                setSelectedCategories((prev) =>
                  prev.filter((c) => c !== value)
                );
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
        </div>

        {/* Сетка товаров */}
        <div
          className={`grid ${
            singleColumn
              ? "grid-cols-1"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          } gap-[5px] px-[2px] sm:gap-4 sm:px-6 max-w-[1440px] mx-auto`}
        >
          {products.map((product) => (
            <Link to="/product" state={{ product }}>
              {" "}
              <ProductCardMobile
                key={product.href}
                product={product}
                singleColumn={singleColumn}
              />
            </Link>
          ))}
        </div>
        <div className="mx-[5px] mt-[20px]">
          <Pagination
            showControls
            initialPage={1}
            radius="md"
            total={10}
            variant="light"
          />
        </div>

        {/* Fullscreen фильтры */}
        {filtersOpen && (
          <div
            className="fixed inset-0 z-50 bg-white pt-[110px] pb-[200px] p-6 overflow-auto"
            style={{ backdropFilter: "blur(4px)" }}
            role="dialog"
            aria-modal="true"
          >
            <h2 className="text-xl py-[5px] font-bold mb-4">
              Выберите Фильтры
            </h2>

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
                  setSelectedCategories((prev) =>
                    prev.filter((c) => c !== value)
                  );
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
  </>;
}