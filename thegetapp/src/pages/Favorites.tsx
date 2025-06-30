import Footer from "../components/Footer";
import Header from "../components/Header";
import { Tabs, Tab, Pagination} from "@heroui/react";
import ProductGrid from "../components/ProductGrid";
import '../App.css';

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: "Gazelle Indoor Shoes",
  category: "Women sneakers",
  price: "$129.99",
  label: "Bestseller",
  imageUrl:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e3635543c9f4019a265793eed48d382_9366/Samba_OG_Shoes_White_JH5688_01_00_standard.jpg",
}));

export default function Favorites(){
    return (<>
    <Header/>
        <div className="my-[40px] flex justify-center">
  <div className="w-full max-w-[1000px] px-4">
    <h1 className="text-3xl font-bold text-center">Favorites</h1>

    <div className="my-[10px] text-center">
      <Tabs className="mt-[20px]" size="lg" radius="none">
        <Tab title="Listings">
          <div className="mt-[10px]">
            <ProductGrid products={products} />
              <div className="mt-[20px] flex justify-center">
              <Pagination
                classNames={{ cursor: "bg-foreground text-background" }}
                color="default"
                variant="light"
                initialPage={1}
                total={5}
                size="lg"
                showControls
              />
      </div>
          </div>
        </Tab>
        <Tab title="Brands" />
        <Tab title="Sellers" />
      </Tabs>
    </div>
  </div>
</div>

      
    <Footer/>
    </>)
}