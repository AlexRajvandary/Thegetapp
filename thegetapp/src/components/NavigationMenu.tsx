import MegaMenu from "./MegaMenu";

export default function NavigationMenu() {
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb" }}>
      <div className="flex space-x-6 px-[145px]">
        <MegaMenu
          title="Menswear"
          categories={[
            {
              heading: "Tops",
              links: [
                { label: "Long Sleeve T-Shirts", href: "/catalog?mens=long-sleeve-t-shirts" },
                { label: "Polos", href: "/catalog?mens=polos" },
                { label: "Shirts (Button Ups)", href: "/catalog?mens=shirts-%28button-ups%29" },
                { label: "Short Sleeve T-Shirts", href: "/catalog?mens=short-sleeve-t-shirts" },
                { label: "Sweaters & Knitwear", href: "/catalog?mens=sweaters-and-knitwear" },
                { label: "Sweatshirts & Hoodies", href: "/catalog?mens=sweatshirts-and-hoodies" },
                { label: "Tank Tops & Sleeveless", href: "/catalog?mens=tank-tops-and-sleeveless" },
                { label: "Jerseys", href: "/catalog?mens=jerseys" },
              ],
            },
            {
              heading: "Bottoms",
              links: [
                { label: "Casual Pants", href: "/catalog?mens=casual-pants" },
                { label: "Cropped Pants", href: "/catalog?mens=cropped-pants" },
                { label: "Denim", href: "/catalog?mens=denim" },
                { label: "Leggings", href: "/catalog?mens=leggings" },
                { label: "Overalls & Jumpsuits", href: "/catalog?mens=overalls-and-jumpsuits" },
                { label: "Shorts", href: "/catalog?mens=shorts" },
                { label: "Sweatpants & Joggers", href: "/catalog?mens=sweatpants-and-joggers" },
                { label: "Swimwear", href: "/catalog?mens=swimwear" },
              ],
            },
            {
              heading: "Outerwear",
              links: [
                { label: "Bombers", href: "/catalog?mens=bombers" },
                { label: "Cloaks & Capes", href: "/catalog?mens=cloaks-and-capes" },
                { label: "Denim Jackets", href: "/catalog?mens=denim-jackets" },
                { label: "Heavy Coats", href: "/catalog?mens=heavy-coats" },
                { label: "Leather Jackets", href: "/catalog?mens=leather-jackets" },
                { label: "Light Jackets", href: "/catalog?mens=light-jackets" },
                { label: "Parkas", href: "/catalog?mens=parkas" },
                { label: "Raincoats", href: "/catalog?mens=raincoats" },
                { label: "Vests", href: "/catalog?mens=vests" },
              ],
            },
            {
              heading: "Footwear",
              links: [
                { label: "Boots", href: "/catalog?mens=boots" },
                { label: "Casual Leather Shoes", href: "/catalog?mens=casual-leather-shoes" },
                { label: "Formal Shoes", href: "/catalog?mens=formal-shoes" },
                { label: "Hi-Top Sneakers", href: "/catalog?mens=hi-top-sneakers" },
                { label: "Low-Top Sneakers", href: "/catalog?mens=low-top-sneakers" },
                { label: "Sandals", href: "/catalog?mens=sandals" },
                { label: "Slip Ons", href: "/catalog?mens=slip-ons" },
              ],
            },
            {
              heading: "Accessories",
              links: [
                { label: "Bags & Luggage", href: "/catalog?mens=bags-and-luggage" },
                { label: "Belts", href: "/catalog?mens=belts" },
                { label: "Glasses", href: "/catalog?mens=glasses" },
                { label: "Gloves & Scarves", href: "/catalog?mens=gloves-and-scarves" },
                { label: "Hats", href: "/catalog?mens=hats" },
                { label: "Jewelry & Watches", href: "/catalog?mens=jewelry-and-watches" },
                { label: "Wallets", href: "/catalog?mens=wallets" },
                { label: "Miscellaneous", href: "/catalog?mens=miscellaneous" },
                { label: "Socks & Underwear", href: "/catalog?mens=socks-and-underwear" },
                { label: "Sunglasses", href: "/catalog?mens=sunglasses" },
                { label: "Ties & Pocketsquares", href: "/catalog?mens=ties-and-pocketsquares" },
              ],
            },
            {
              heading: "Tailoring",
              links: [
                { label: "Blazers", href: "/catalog?mens=blazers" },
                { label: "Formal Shirting", href: "/catalog?mens=formal-shirting" },
                { label: "Formal Trousers", href: "/catalog?mens=formal-trousers" },
                { label: "Suits", href: "/catalog?mens=suits" },
                { label: "Tuxedos", href: "/catalog?mens=tuxedos" },
                { label: "Vests", href: "/catalog?mens=vests" },
              ],
            },
          ]}
        />

        <MegaMenu
          title="Womenswear"
          categories={[
            {
              heading: "Tops",
              links: [
                { label: "Blouses", href: "/catalog?womens=blouses" },
                { label: "Bodysuits", href: "/catalog?womens=bodysuits" },
                { label: "Button Ups", href: "/catalog?womens=button-ups" },
                { label: "Crop Tops", href: "/catalog?womens=crop-tops" },
                { label: "Hoodies", href: "/catalog?womens=hoodies" },
                { label: "Long Sleeve T-Shirts", href: "/catalog?womens=long-sleeve-t-shirts" },
                { label: "Polos", href: "/catalog?womens=polos" },
                { label: "Short Sleeve T-Shirts", href: "/catalog?womens=short-sleeve-t-shirts" },
                { label: "Sweaters", href: "/catalog?womens=sweaters" },
                { label: "Sweatshirts", href: "/catalog?womens=sweatshirts" },
                { label: "Tank Tops", href: "/catalog?womens=tank-tops" },
              ],
            },
            {
              heading: "Bottoms",
              links: [
                { label: "Jeans", href: "/catalog?womens=jeans" },
                { label: "Jumpsuits", href: "/catalog?womens=jumpsuits" },
                { label: "Leggings", href: "/catalog?womens=leggings" },
                { label: "Maxi Skirts", href: "/catalog?womens=maxi-skirts" },
                { label: "Midi Skirts", href: "/catalog?womens=midi-skirts" },
                { label: "Mini Skirts", href: "/catalog?womens=mini-skirts" },
                { label: "Pants", href: "/catalog?womens=pants" },
                { label: "Shorts", href: "/catalog?womens=shorts" },
                { label: "Dresses", href: "/catalog?womens=dresses" },
                { label: "Mini Dresses", href: "/catalog?womens=mini-dresses" },
                { label: "Midi Dresses", href: "/catalog?womens=midi-dresses" },
                { label: "Maxi Dresses", href: "/catalog?womens=maxi-dresses" },
                { label: "Gowns", href: "/catalog?womens=gowns" },
              ],
            },
            {
              heading: "Outerwear",
              links: [
                { label: "Blazers", href: "/catalog?womens=blazers" },
                { label: "Bombers", href: "/catalog?womens=bombers" },
                { label: "Coats", href: "/catalog?womens=coats" },
                { label: "Denim Jackets", href: "/catalog?womens=denim-jackets" },
                { label: "Down Jackets", href: "/catalog?womens=down-jackets" },
                { label: "Fur & Faux Fur", href: "/catalog?womens=fur-and-faux-fur" },
                { label: "Jackets", href: "/catalog?womens=jackets" },
                { label: "Leather Jackets", href: "/catalog?womens=leather-jackets" },
                { label: "Rain Jackets", href: "/catalog?womens=rain-jackets" },
                { label: "Vests", href: "/catalog?womens=vests" },
              ],
            },
            {
              heading: "Footwear",
              links: [
                { label: "Boots", href: "/catalog?womens=boots" },
                { label: "Heels", href: "/catalog?womens=heels" },
                { label: "Platforms", href: "/catalog?womens=platforms" },
                { label: "Mules", href: "/catalog?womens=mules" },
                { label: "Flats", href: "/catalog?womens=flats" },
                { label: "Hi-Top Sneakers", href: "/catalog?womens=hi-top-sneakers" },
                { label: "Low-Top Sneakers", href: "/catalog?womens=low-top-sneakers" },
                { label: "Sandals", href: "/catalog?womens=sandals" },
                { label: "Slip Ons", href: "/catalog?womens=slip-ons" },
              ],
            },
            {
              heading: "Accessories",
              links: [
                { label: "Belts", href: "/catalog?womens=belts" },
                { label: "Glasses", href: "/catalog?womens=glasses" },
                { label: "Gloves & Scarves", href: "/catalog?womens=gloves-and-scarves" },
                { label: "Hair Accessories", href: "/catalog?womens=hair-accessories" },
                { label: "Hats", href: "/catalog?womens=hats" },
                { label: "Jewelry & Watches", href: "/catalog?womens=jewelry-and-watches" },
                { label: "Wallets", href: "/catalog?womens=wallets" },
                { label: "Watches", href: "/catalog?womens=watches" },
                { label: "Miscellaneous", href: "/catalog?womens=miscellaneous" },
                { label: "Socks & Intimates", href: "/catalog?womens=socks-and-intimates" },
                { label: "Sunglasses", href: "/catalog?womens=sunglasses" },
              ],
            },
            {
              heading: "Bags",
              links: [
                { label: "Backpacks", href: "/catalog?womens=backpacks" },
                { label: "Belt Bags", href: "/catalog?womens=belt-bags" },
                { label: "Bucket Bags", href: "/catalog?womens=bucket-bags" },
                { label: "Clutches", href: "/catalog?womens=clutches" },
                { label: "Crossbody Bags", href: "/catalog?womens=crossbody-bags" },
                { label: "Handle Bags", href: "/catalog?womens=handle-bags" },
                { label: "Hobo Bags", href: "/catalog?womens=hobo-bags" },
                { label: "Luggage & Travel", href: "/catalog?womens=luggage-and-travel" },
                { label: "Messengers & Satches", href: "/catalog?womens=messengers-and-satches" },
                { label: "Mini Bags", href: "/catalog?womens=mini-bags" },
                { label: "Shoulder Bags", href: "/catalog?womens=shoulder-bags" },
                { label: "Tote Bags", href: "/catalog?womens=tote-bags" },
                { label: "Other", href: "/catalog?womens=other" },
              ],
            },
          ]}
        />

        <MegaMenu
          title="Kids"
          categories={[
            {
              heading: "Dresses",
              links: [
                { label: "Evening", href: "/catalog?kids=evening" },
                { label: "Summer", href: "/catalog?kids=summer" },
                { label: "Casual", href: "/catalog?kids=casual" },
              ],
            },
            {
              heading: "Accessories",
              links: [
                { label: "Bags", href: "/catalog?kids=bags" },
                { label: "Jewelry", href: "/catalog?kids=jewelry" },
                { label: "Scarves", href: "/catalog?kids=scarves" },
              ],
            },
            {
              heading: "Shoes",
              links: [
                { label: "Heels", href: "/catalog?kids=heels" },
                { label: "Flats", href: "/catalog?kids=flats" },
                { label: "Sneakers", href: "/catalog?kids=sneakers" },
              ],
            },
          ]}
        />

        <MegaMenu
          title="Sales"
          categories={[
            {
              heading: "Dresses",
              links: [
                { label: "Evening", href: "/catalog?sales=evening" },
                { label: "Summer", href: "/catalog?sales=summer" },
                { label: "Casual", href: "/catalog?sales=casual" },
              ],
            },
            {
              heading: "Accessories",
              links: [
                { label: "Bags", href: "/catalog?sales=bags" },
                { label: "Jewelry", href: "/catalog?sales=jewelry" },
                { label: "Scarves", href: "/catalog?sales=scarves" },
              ],
            },
            {
              heading: "Shoes",
              links: [
                { label: "Heels", href: "/catalog?sales=heels" },
                { label: "Flats", href: "/catalog?sales=flats" },
                { label: "Sneakers", href: "/catalog?sales=sneakers" },
              ],
            },
          ]}
        />

        <MegaMenu
          title="Brands"
          categories={[
            {
              links: [
                { label: "Acne Studios", href: "/catalog?brand=acne-studios" },
                { label: "Amiri", href: "/catalog?brand=amiri" },
                { label: "Arc'teryx", href: "/catalog?brand=arc%27teryx" },
                { label: "Balenciaga", href: "/catalog?brand=balenciaga" },
                { label: "Bape", href: "/catalog?brand=bape" },
                { label: "Bottega Veneta", href: "/catalog?brand=bottega-veneta" },
                { label: "Carhartt", href: "/catalog?brand=carhartt" },
                { label: "Celine", href: "/catalog?brand=celine" },
              ],
            },
            {
              links: [
                { label: "Chanel", href: "/catalog?brand=chanel" },
                { label: "Chrome Hearts", href: "/catalog?brand=chrome-hearts" },
                { label: "Comme des Garcons", href: "/catalog?brand=comme-des-garcons" },
                { label: "Dior", href: "/catalog?brand=dior" },
                { label: "Enfants Riches Deprimes", href: "/catalog?brand=enfants-riches-deprimes" },
                { label: "Gucci", href: "/catalog?brand=gucci" },
                { label: "Kapital", href: "/catalog?brand=kapital" },
                { label: "Louis Vuitton", href: "/catalog?brand=louis-vuitton" },
              ],
            },
            {
              links: [
                { label: "Maison Margiela", href: "/catalog?brand=maison-margiela" },
                { label: "Moncler", href: "/catalog?brand=moncler" },
                { label: "Nike", href: "/catalog?brand=nike" },
                { label: "Polo Ralph Lauren", href: "/catalog?brand=polo-ralph-lauren" },
                { label: "Prada", href: "/catalog?brand=prada" },
                { label: "Raf Simons", href: "/catalog?brand=raf-simons" },
                { label: "Rick Owens", href: "/catalog?brand=rick-owens" },
                { label: "Saint Laurent Paris", href: "/catalog?brand=saint-laurent-paris" },
              ],
            },
            {
              links: [
                { label: "Stone Island", href: "/catalog?brand=stone-island" },
                { label: "Stussy", href: "/catalog?brand=stussy" },
                { label: "Supreme", href: "/catalog?brand=supreme" },
                { label: "Undercover", href: "/catalog?brand=undercover" },
                { label: "Vetements", href: "/catalog?brand=vetements" },
                { label: "Vintage", href: "/catalog?brand=vintage" },
                { label: "Vivienne Westwood", href: "/catalog?brand=vivienne-westwood" },
                { label: "Yohji Yamamoto", href: "/catalog?brand=yohji-yamamoto" },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
