import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";

const currencies = [
  { key: "usd", label: "USD – ($)", flag: "us", alt: "USA" },
  { key: "eur", label: "EUR – (€)", flag: "eu", alt: "EU" },
  { key: "jpy", label: "JPY – (¥)", flag: "jp", alt: "Japan" },
  { key: "gbp", label: "GBP – (£)", flag: "gb", alt: "UK" },
  { key: "inr", label: "INR – (₹)", flag: "in", alt: "India" },
  { key: "rub", label: "RUB – (₽)", flag: "ru", alt: "Russia" },
  { key: "aud", label: "AUD – (A$)", flag: "au", alt: "Australia" },
  { key: "cad", label: "CAD – (C$)", flag: "ca", alt: "Canada" },
  { key: "chf", label: "CHF – (Fr)", flag: "ch", alt: "Switzerland" },
  { key: "cny", label: "CNY – (¥)", flag: "cn", alt: "China" },
  { key: "hkd", label: "HKD – (HK$)", flag: "hk", alt: "Hong Kong" },
  { key: "sek", label: "SEK – (kr)", flag: "se", alt: "Sweden" },
  { key: "nzd", label: "NZD – (NZ$)", flag: "nz", alt: "New Zealand" },
  { key: "krw", label: "KRW – (₩)", flag: "kr", alt: "South Korea" },
  { key: "sgd", label: "SGD – (S$)", flag: "sg", alt: "Singapore" },
  { key: "mxn", label: "MXN – ($)", flag: "mx", alt: "Mexico" },
  { key: "zar", label: "ZAR – (R)", flag: "za", alt: "South Africa" },
  { key: "brl", label: "BRL – (R$)", flag: "br", alt: "Brazil" },
  { key: "try", label: "TRY – (₺)", flag: "tr", alt: "Turkey" },
  { key: "pln", label: "PLN – (zł)", flag: "pl", alt: "Poland" },
  { key: "nok", label: "NOK – (kr)", flag: "no", alt: "Norway" },
  { key: "dkk", label: "DKK – (kr)", flag: "dk", alt: "Denmark" },
  { key: "czk", label: "CZK – (Kč)", flag: "cz", alt: "Czech Republic" },
  { key: "huf", label: "HUF – (Ft)", flag: "hu", alt: "Hungary" },
  { key: "ils", label: "ILS – (₪)", flag: "il", alt: "Israel" },
  { key: "thb", label: "THB – (฿)", flag: "th", alt: "Thailand" },
  { key: "myr", label: "MYR – (RM)", flag: "my", alt: "Malaysia" },
  { key: "php", label: "PHP – (₱)", flag: "ph", alt: "Philippines" },
  { key: "idr", label: "IDR – (Rp)", flag: "id", alt: "Indonesia" },
  { key: "ron", label: "RON – (lei)", flag: "ro", alt: "Romania" },
  { key: "bgn", label: "BGN – (лв)", flag: "bg", alt: "Bulgaria" },
];


export default function CurrencyWithFlags() {
   const itemClass =
    "!bg-transparent rounded-none hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white aria-selected:!bg-black aria-selected:!text-white";

  return (
    <Autocomplete
      className="max-w-xs"
      label="Select currency"
      radius="none"
      scrollShadowProps={{ isEnabled: false }}
      classNames={{
        popoverContent: "rounded-none",
        listbox: "rounded-none",
      }}
    >
      {currencies.map(({ key, label, flag, alt }) => (
        <AutocompleteItem
          key={key}
          className={itemClass}
          startContent={
            <Avatar alt={alt} className="w-6 h-6" src={`https://flagcdn.com/${flag}.svg`} />
          }
        >
          {label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
