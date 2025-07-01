import { useState, useEffect } from "react";
import LogoTheGetBalloons from "../components/Logo";
import ProductCardMobile from "../components/ProductCardMobile";
import SearchInput from "../components/SearchInput";
import CustomFilters from "../components/CustomFilters";
import { ArrowDownUp, Columns2, Rows2, Settings2 } from "lucide-react";
import { Button } from "@heroui/react";
import { backButton } from "@telegram-apps/sdk-react";

export default function App() {
  const [singleColumn, setSingleColumn] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

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
      href: "/product",
    },
    // ... остальные товары
  ];

  return (
    <div>
      <div className="flex pt-[110px] pb-[30px] bg-transparent mx-4 sm:mx-0 sm:justify-center">
        <LogoTheGetBalloons />
      </div>

      <div className="px-[10px] py-[15px] flex items-center gap-2">
        <SearchInput />
        <Button
          isIconOnly
          variant="light"
          onClick={() => setFiltersOpen(true)}
          aria-label="Открыть фильтры"
        >
          <Settings2 strokeWidth={1} color="black" />
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
          className="fixed inset-0 z-50 bg-white p-6 overflow-auto"
          style={{ backdropFilter: "blur(4px)" }}
          role="dialog"
          aria-modal="true"
        >
          <h2 className="text-xl font-bold mb-4">Настройки фильтров</h2>
          <CustomFilters />
          {/* Инструкция, что можно закрыть кнопкой назад Telegram */}
        </div>
      )}
    </div>
  );
}
