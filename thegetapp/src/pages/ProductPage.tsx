import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ImageGallery from "../components/ImageGallery";
import Carousel from "../components/Carousel";
import { Avatar, Button, Card, CardHeader, CardFooter, CardBody, Divider, Chip } from "@heroui/react";
import { HeartIcon } from "../components/HeartIcon";
import { BookmarkIcon } from "../components/SavedIcon";
import { Star } from "lucide-react"
import React from "react";
import ReviewItem from "../components/ReviewItem";

const images = [
  "https://media-assets.grailed.com/prd/listing/temp/6715321cb166457bb7558949ae988a96?w=800",
  "https://media-assets.grailed.com/prd/listing/73652406/0e928061dfdc42f2b206c6cf2196e949?w=800",
  "https://media-assets.grailed.com/prd/listing/73652406/c41b9a29de1a45de9314a6ac6ddbcba1?w=800",
  "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
]

const reviews = [
  {
    date: "18 июня 2025",
    rating: 5,
    text: "Отличный товар, полностью соответствует описанию!",
    productName: "Nike Air Max",
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/6715321cb166457bb7558949ae988a96?w=800",
  },
  {
    date: "12 июня 2025",
    rating: 4,
    text: "Хорошее качество, но доставка задержалась.",
    productName: "Adidas Hoodie",
    imageSrc: "https://media-assets.grailed.com/prd/listing/73652406/c41b9a29de1a45de9314a6ac6ddbcba1?w=800",
  },
]


 const products = [
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
export default function Product() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [isSellerLiked, setSellerLiked] = React.useState(false);
  const [isSellerSaved, setSellerSaved] = React.useState(false);
  return (
    <>
   
    <Header/>
         <div className="px-[140px]">
         <div className="flex py-8 gap-12">
      {/* Галерея фото — слева */}
      <div className="w-[60%] ml-8">
           <ImageGallery images={images} />
      </div>

      {/* Информация о товаре — справа */}
      <div className="w-[30%] flex flex-col justify-start">
        <h1 className="text-[18px] font-bold mb-4">Tee × Tee Shirt × Vintage</h1>
        <p className="text-[14px] font-medium mb-2">Категория: Women sneakers</p>
         <p className="text-[14px] mb-2">Brand</p>
        <p className="text-[14px] mb-2">Men's / US S / EU 44-46 / 1</p>
        <p className="text-[14px] mb-2"><Chip variant="dot" color="primary" radius="none">Color</Chip></p>
        <p className="text-[14px] mb-2">Used</p>
        <p className="text-[14px] font-thin mb-4">
          Yugioh Tee Shirt Vintage 90s Y2k Joey Wheeler Blue Eyes White Dragon Longsleeve Shirt Size S/XS
        </p>
        <div className="flex items-center justify-between w-full mb-6">
           <div className="flex items-center gap-2">
          <Button isIconOnly aria-label="Like" variant="light" onPress={() => setLiked(!liked)}>
            <HeartIcon
              isFilled={liked}
              filledColor="red"
              strokeColor={liked ? "red" : "black"}
              size={25}
            />
          </Button>
          <Button isIconOnly aria-label="Like" variant="light" onPress={() => setSaved(!saved)}>
            <BookmarkIcon
              isFilled={saved}
              filledColor="black"
              strokeColor={"black"}
              size={25}
            />
          </Button>
        </div>
        <p className="text-2xl text-black font-bold text-end">$129.99</p>
        </div>
       
       
        <Button color="success" size="lg"  className="bg-gradient-to-tr my-2 from-pink-500 to-yellow-500 text-white shadow-lg rounded-none">Purchase</Button>
        <Button size="lg"  variant="ghost" className="py-2 px-6 my-2 rounded-none">Offer</Button>
        <Button size="lg"  variant="ghost" className="py-2 px-6 my-2 rounded-none">Message</Button>
       <Card className="max-w-[380px] bg-white hover:bg-slate-200 transition-colors duration-300 rounded-none mt-[40px] shadow-none">
      <CardHeader className="flex justify-between items-center">
        {/* Левая часть: аватар + инфо */}
        <div className="flex gap-4 items-center">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src="https://heroui.com/avatars/avatar-1.png"
          />
          <div className="flex flex-col items-start">
            <h4 className="text-medium font-semibold text-black">Zoey Lang</h4>
            <p className="text-sm text-default-400">128 отзывов</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#eab308" stroke="#eab308" />
              ))}
              <span className="text-xs text-default-500 ml-1">(5.0)</span>
            </div>
          </div>
        </div>
        <div>
          <Button isIconOnly aria-label="Like" variant="light" onPress={() => setSellerLiked(!isSellerLiked)}>
            <HeartIcon
              isFilled={isSellerLiked}
              filledColor="red"
              strokeColor={isSellerLiked ? "red" : "black"}
              size={25}
            />
          </Button>
          <Button isIconOnly aria-label="Like" variant="light" onPress={() => setSellerSaved(!isSellerSaved)}>
            <BookmarkIcon
              isFilled={isSellerSaved}
              filledColor="black"
              strokeColor={"black"}
              size={25}
            />
          </Button>
        </div>
        
        
      </CardHeader>

      <CardBody className="px-4 py-2 text-sm text-black">
        <p>Seller description</p>
      </CardBody>

      <CardFooter className="flex gap-4 px-4 py-4">
          <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : "bg-black text-white"}
          radius="none"
          size="md"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardFooter>
    </Card>
    <Divider/>
   <Carousel
  items={reviews.map((review, i) => (
    <ReviewItem
      key={i}
      date={review.date}
      rating={review.rating}
      text={review.text}
      productName={review.productName}
      imageSrc={review.imageSrc}
    />
  ))}
  visibleSlides={1}
/>


      </div>
    </div>
    
    <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>You may also like:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
                  <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Also in this category:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
    <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Also from this Seller:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>

     <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Also from this Brand:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
      <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Bestsellers:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
    </div>
    <Footer/>
    </>
  );
}