import {Card, CardHeader, Image} from "@heroui/react";

export default function CategorySection() {
  return (
    <div className="max-w-[1200px] mx-auto gap-2 grid grid-cols-12 grid-rows-2 px-8">
      
      <Card className="col-span-12 sm:col-span-4 h-[300px]" radius="none">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://media-assets.grailed.com/prd/misc/c5a5de7a98414713be94565d7a68d98b?w=1250"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]" radius="none">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
          <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://balenciaga.dam.kering.com/m/21e7c31419a88071/eCom-841765WCURB1000_E.jpg?v=1"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]" radius="none">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
          <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full scale-125 object-cover"
          src="https://media-assets.grailed.com/prd/listing/temp/5598f61230d8411d862483b249b6a6b5?w=800"
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5" radius="none">
        <Image
          removeWrapper
          alt="Manswear"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://outmaxshop.ru/images/_NEWS2024_/novosti_rubruka/06.09/Bal_1920.jpg"
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7" radius="none">
        <Image
          removeWrapper
          alt="Womanswear"
          className="z-0 w-full h-full object-cover"
          src="https://a.lmcdn.ru//files/cms/get_the_look/gallery_images/%D0%BC_%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC_%D0%BD%D0%BA%D0%B4_28-05-2025.jpg"
        />
      </Card>
    </div>
  );
}
