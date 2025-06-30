import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import { Pagination } from "@heroui/react";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: "Gazelle Indoor Shoes",
  category: "Women sneakers",
  price: "$129.99",
  label: "Bestseller",
  imageUrl:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e3635543c9f4019a265793eed48d382_9366/Samba_OG_Shoes_White_JH5688_01_00_standard.jpg",
}));

export default function Drafts(){
    return (<>
    <Header/>
    <div className="mx-[150px]">
        <div className="w-full my-[40px]">
             <h1 className="text-3xl font-bold text-center">Drafts</h1>
        </div>
        <div className="mt-[20px] flex justify-center">
            <div className="max-w-[1000px] w-full">
                <ProductGrid products={products}/>
            </div>
            
        </div>
       
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
  
    <Footer/>
    </>)
}