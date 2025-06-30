import { useState } from "react";
import {Link} from "@heroui/react";

export default function MegaMenu({ title, categories, image }: {
  title: string;
  categories: {
    heading?: string;
    links: { label: string; href: string }[];
  }[];
  image?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-4 py-2 hover:bg-black hover:text-white">{title}</button>

      {open && (
        <div className="fixed left-0 top-[105px] w-screen bg-white shadow-lg border-t z-50">
          <div className="mx-[160px] mb-[50px] grid grid-cols-6 gap-8 py-8">
            {categories.map((cat, idx) => (
              <div key={idx}>
                {cat.heading && (<h4 className="text-lg font-semibold mb-3">{cat.heading}</h4>)}
                <ul className="space-y-2">
                  {cat.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} color="foreground" className="text-md mb-3 hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {image && (
              <div className="col-span-1">
                <img
                  src={image}
                  alt="Featured"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
