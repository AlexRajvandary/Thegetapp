const letters = [
  {
    src: "https://static.tildacdn.com/tild6430-3638-4439-a163-346639643664/1d1be0c0-adbe-4a7c-8.png", // T
    alt: "T",
  },
  {
    src: "https://static.tildacdn.com/tild3163-6466-4861-b966-356166363736/45f53242-7e81-402b-9.png", // H
    alt: "H",
  },
  {
    src: "https://static.tildacdn.com/tild6237-3937-4039-b937-356266636137/a761e0e2-a9ef-49a9-a.png", // E
    alt: "E",
  },
  {
    src: "https://static.tildacdn.com/tild3665-6363-4932-b735-376639616333/24782b3e-3fef-4631-a.png", // G
    alt: "G",
  },
  {
    src: "https://static.tildacdn.com/tild6166-3664-4864-a638-313265633830/42d401af-a3cf-4552-b.png", // E
    alt: "E",
  },
  {
    src: "https://static.tildacdn.com/tild3637-3236-4464-b931-323530366664/7785a8a9-669d-4b3d-8.png", // T
    alt: "T",
  },
];

const LogoTheGetBalloons = () => {
  const firstRow = letters.slice(0, 3);
  const secondRow = letters.slice(3);

  return (
    <div className="w-full flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center">
      {/* Первая строка: ширина 100%, контент по центру */}
      <div className="w-full flex space-x-2">
        {firstRow.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            className="h-[115px] w-auto sm:h-[220px]"
            draggable={false}
          />
        ))}
      </div>

      {/* Вторая строка: ширина 100%, контент по центру */}
      <div className="w-full flex space-x-2">
        {secondRow.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            className="h-[115px] w-auto sm:h-[220px]"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoTheGetBalloons;
