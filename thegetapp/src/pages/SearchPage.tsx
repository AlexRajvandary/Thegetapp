import { backButton } from "@telegram-apps/sdk-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
    
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

   useEffect(() => {
      if (backButton.mount.isAvailable()) backButton.mount();
      if (backButton.show.isAvailable()) backButton.show();

      const handler = () => {
        navigate(-1);
        if (backButton.hide.isAvailable()){ 
        backButton.hide();
      }
    };
      if (backButton.onClick.isAvailable()) backButton.onClick(handler);
  
      return () => {
        if(backButton.offClick.isAvailable()){
          backButton.offClick(handler);
        }
        
        if (backButton.hide.isAvailable())
          {
             backButton.hide();
            
            }
      };
    }, [navigate]);

  return (
    <div className="p-4 mt-[110px]">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Поиск..."
        className="w-full p-2 border rounded"
      />

      {/* Подсказки / результаты */}
      <ul className="mt-4">
        {/* Мапай querySuggestions здесь */}
      </ul>
    </div>
  );
}
