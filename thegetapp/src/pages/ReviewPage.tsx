import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button, Textarea } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Оценка:", rating);
    console.log("Отзыв:", text);
    navigate("/"); // или куда нужно перенаправить после отправки
  };

    useEffect(() => {
      if (backButton.mount.isAvailable()) backButton.mount();
      if (backButton.show.isAvailable()) backButton.show();
  
      const handler = () => {
        navigate(-1);
        if (backButton.hide.isAvailable()) backButton.hide();
      };
  
      if (backButton.onClick.isAvailable()) backButton.onClick(handler);
      return () => {
        if (backButton.offClick.isAvailable()) backButton.offClick(handler);
        if (backButton.hide.isAvailable()) backButton.hide();
      };
    }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f9f9f9] p-6 pt-[100px]">
      <h1 className="text-xl font-semibold mb-4 text-center">Оставьте отзыв</h1>

      {/* Звезды */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={32}
            className={`cursor-pointer transition-colors ${
              (hovered ?? rating) >= i ? "text-yellow-400" : "text-gray-300"
            }`}
            fill={(hovered ?? rating) >= i ? "#facc15" : "none"}
            strokeWidth={1.5}
            onClick={() => setRating(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Текстовое поле */}
      <Textarea
        placeholder="Напишите ваш отзыв..."
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mb-6"
      />

      {/* Кнопки */}
      <div className="flex justify-between gap-4">
        <Button
          variant="light"
          className="w-1/2"
          onPress={() => navigate(-1)}
        >
          Отмена
        </Button>
        <Button
          className="w-1/2 bg-black text-white hover:bg-gray-900"
          disabled={rating === 0 || text.trim() === ""}
          onPress={handleSubmit}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
}
