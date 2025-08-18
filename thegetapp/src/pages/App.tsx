import { useEffect } from "react";
import LogoTheGetBalloons from "../components/Logo";
import { backButton } from "@telegram-apps/sdk-react";
import Carousel from "../components/Carousel";
import SubscriptionCardMobile from "../components/SubscriptionCardMobile";
import AbroadOrderExample from "../components/AbroadOrderExample";
import Banner from "../components/Banner";
import "./../App.css";
import { Button } from "@heroui/react";
import { CircleArrowRight } from "lucide-react";

export default function App() {
  useEffect(() => {
    // Монтируем кнопку назад, если доступна
    if (backButton.mount.isAvailable()) {
      backButton.mount();
    }

    return () => {
      backButton.unmount();
    };
  }, []);

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
                  key={subscription.title}
                  title={subscription.title}
                  price={subscription.price}
                  imageSrc={subscription.imageSrc}
                  category={subscription.category}
                  href={subscription.href}
                  label={subscription.label}
                />
              ))}
            />

            {/*
<div className="flex justify-end mx-4 mt-8">
  <Button
    radius="sm"
    endContent={<CircleArrowRight />}
    className="text-md font-bold bg-gray-700 text-white shadow-md"
  >
    Смотреть все
  </Button>
</div>
*/}
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
      </div>
    </div>
  );
}
