import { useState, useEffect } from "react";
import LogoTheGetBalloons from "../components/Logo";
import ProductCardMobile from "../components/ProductCardMobile";
import SearchInput from "../components/SearchInput";
import { ArrowDownUp, Columns2, Funnel, Rows2 } from "lucide-react";
import { Button, Pagination } from "@heroui/react";
import { backButton } from "@telegram-apps/sdk-react";
import Carousel from "../components/Carousel";
import SubscriptionCardMobile from "../components/SubscriptionCardMobile";
import Filters from "../components/Filters";
import FilterChips from "../components/FilterChips";
import { Link, useNavigate } from "react-router-dom";
import AbroadOrderExample from "../components/AbroadOrderExample";
import Banner from "../components/Banner";

export default function App() {
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
  const subscriptions = [
    {
      imageSrc: "/spotify.webp",
      title: "Spotify",
      label: "Bestseller",
      category: "Music",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/adobe.webp",
      title: "Adobe",
      label: "Bestseller",
      category: "Work",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/deezer.webp",
      title: "Deezer",
      label: "Bestseller",
      category: "Music",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/discord.webp",
      title: "Discord",
      label: "Bestseller",
      category: "Social",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/disney.webp",
      title: "Disney",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/netflix.webp",
      title: "Netflix",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/prime.webp",
      title: "Prime",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion",
    },
    {
      imageSrc: "/youtube.webp",
      title: "Youtube",
      label: "Bestseller",
      category: "Film",
      price: "$129.99",
      href: "/subscribtion",
    },
  ];

  return (
    <div className="mb-[50px]">
      <div className="flex pt-[110px] pb-[30px] bg-transparent mx-4 sm:mx-0 sm:justify-center lg:mx-[500px]">
        <LogoTheGetBalloons />
      </div>
      <div className="mx-4">
        <div className="grid grid-cols-2 gap-3 px-3 pt-4 max-w-[600px] mx-auto">
          <div className="col-span-2 bg-gradient-to-br from-sky-400 to-pink-400 rounded-[14px] py-4 my-2">
            <div className="top-0 z-20 font-extrabold text-[22px] mx-4 py-[5px] leading-[130%] tracking-[-0.01em] text-white select-none">
              Оплачивай любые сервисы
            </div>
            <Carousel
              visibleSlides={2}
              items={subscriptions.map((subscription) => (
                <SubscriptionCardMobile
                  key={subscription.title} // обязательно уникальный key
                  title={subscription.title}
                  price={subscription.price}
                  imageSrc={subscription.imageSrc}
                  category={subscription.category}
                  href={subscription.href}
                  label={subscription.label}
                />
              ))}
            />
          </div>

          <div className="col-span-2 bg-gradient-to-br from-sky-400 to-pink-400 rounded-[14px] py-4 my-2">
            <div className="top-0 z-20 font-extrabold text-[22px] mx-4 py-[5px] leading-[130%] tracking-[-0.01em] text-white select-none">
              Из-за границы под заказ
            </div>
            <Carousel
              visibleSlides={1}
              items={[
                <AbroadOrderExample
                  key="1"
                  title="Хрупкий товар из Европы? Легко!"
                  countryISO="cr"
                  text="Недавно у нас оформили выкуп и доставку чашек ручной работы из Хорватии — хрупкий товар, но мы умеем с таким работать."
                  imageSrc="/OrderFromAbroad.jpg"
                />,
                <AbroadOrderExample
                  key="2"
                  title="Свежий заказ из Японии"
                  imageSrc="OIP.webp"
                  countryISO="jp"
                  text="Клиент заказал цифровые камеры. Sony DSC-F707 и Fujifilm FinePix 1700Z. Так же — редкий USB-картридер для старых форматов медиа. Мы работаем с Mercari, Rakuten, Yahoo Auctions и другими японскими площадками. Если вы давно хотели товар из Японии, но не знали с чего начать — всё просто: отправляете ссылку на товар, а дальше мы берём всё на себя."
                />,
                <AbroadOrderExample
                  key="3"
                  title="С пустыми руками — не уходим!"
                  countryISO="it"
                  imageSrc="/labubu.jpg"
                  text="Две куклы лимитированной серии, которые были выпущены специально для Италии, куплены нашим агентом, спустя несколько часов ожидания в очереди и нескольких дней подготовки. 2 штуки в наличии в Москве — через 15 дней"
                />,
                <AbroadOrderExample
                  key="4"
                  title="Оплата 9.100$ за победные лоты на аукционе."
                  countryISO={["us", "fr", "jp", "hk", "cn"]}
                  imageSrc="/soda.jpg"
                  text="Сумма выкупов: ~4 млн. рублей. Число позиций: более 30 штук. США, Гонконг, Китай, Франция, Япония."
                />,
                <Banner
                  key="5"
                  title="Оплатим для вас покупку на любом сайте или в приложении!"
                  imageSrc="/jpmoney.jpg"
                  text="Оплачиваем товары, услуги и подписки в USD, EUR, GBP, CNY, JPY, INR и других валютах через PayPal или карты (Visa, Mastercard, AmEx).

✅ Надёжно — только личные и проверенные аккаунты.
⏱️ Быстро — обычно до нескольких минут, в редких случаях до 18 часов.
🎁 Скидка 5% за положительный отзыв!"
                />,
              ]}
            />
          </div>
        </div>
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
      </div>
    </div>
  );
}
