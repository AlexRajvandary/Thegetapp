import { Avatar, Chip } from "@heroui/react";

const countries = [
  { key: "us", label: "USA" },
  { key: "eu", label: "EU" },
  { key: "jp", label: "Japan" },
  { key: "gb", label: "UK" },
  { key: "in", label: "India" },
  { key: "ru", label: "Russia" },
  { key: "au", label: "Australia" },
  { key: "ca", label: "Canada" },
  { key: "ch", label: "Switzerland" },
  { key: "cn", label: "China" },
  { key: "hk", label: "Hong Kong" },
  { key: "se", label: "Sweden" },
  { key: "nz", label: "New Zealand" },
  { key: "kr", label: "South Korea" },
  { key: "sg", label: "Singapore" },
  { key: "mx", label: "Mexico" },
  { key: "za", label: "South Africa" },
  { key: "br", label: "Brazil" },
  { key: "tr", label: "Turkey" },
  { key: "pl", label: "Poland" },
  { key: "no", label: "Norway" },
  { key: "dk", label: "Denmark" },
  { key: "cz", label: "Czech Republic" },
  { key: "hu", label: "Hungary" },
  { key: "il", label: "Israel" },
  { key: "th", label: "Thailand" },
  { key: "my", label: "Malaysia" },
  { key: "ph", label: "Philippines" },
  { key: "id", label: "Indonesia" },
  { key: "ro", label: "Romania" },
  { key: "bg", label: "Bulgaria" },
];

type Props = {
  countryKey: string;
  className?: string;
};

export default function CountryFlag({ countryKey }: Props) {
  const country = countries.find((c) => c.key === countryKey.toLowerCase());

  if (!country) return null;

  return (
    <Chip variant="flat" radius="sm" size="lg"
   classNames={{
                    base: "border-thin",
                    content: "font-bold text-gray-800",
                }}
      startContent={
        <Avatar
          alt={country.label}
          className="w-5 h-5 rounded-full"
          src={`https://flagcdn.com/w40/${country.key}.png`}
          style={{ objectFit: "cover" }}
        />
      }
      className="select-none"
    >
      From {country.label}
    </Chip>
  );
}
