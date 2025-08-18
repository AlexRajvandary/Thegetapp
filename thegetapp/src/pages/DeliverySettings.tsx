import { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";

interface Address {
  id: number;
  city: string;
  street: string;
  building: string;
}

export default function DeliverySettingsPage() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (backButton.mount.isAvailable()) backButton.mount();
    if (backButton.show.isAvailable()) backButton.show();

    const handler = () => {
      navigate(-1);
      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    };

    if (backButton.onClick.isAvailable()) backButton.onClick(handler);

    return () => {
      if (backButton.offClick.isAvailable()) {
        backButton.offClick(handler);
      }
      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    };
  }, [navigate]);


  const [form, setForm] = useState({
    city: "",
    street: "",
    building: "",
  });

  const resetForm = () => {
    setForm({ city: "", street: "", building: "" });
    setEditingAddress(null);
  };

  const handleSave = () => {
    if (editingAddress) {
      // Редактирование
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddress.id ? { ...editingAddress, ...form } : addr
        )
      );
    } else {
      // Новый адрес
      setAddresses((prev) => [...prev, { id: Date.now(), ...form }]);
    }

    resetForm();
    setIsFormOpen(false);
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setForm(address);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <AnimatedPage>
      <div className="p-4 mt-[70px]">
        <h1 className="font-extrabold text-[24px] mx-4 lg:mx-auto lg:max-w-[1440px] py-[5px] leading-[130%] tracking-[-0.01em] mb-4">Мои адреса доставки</h1>

        {addresses.length === 0 && (
          <p className="text-gray-600 mb-4">
            У вас ещё нет добавленных адресов.
          </p>
        )}

        <ul className="space-y-3 mb-6">
          {addresses.map((addr) => (
            <li
              key={addr.id}
              className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              <div>
                <div className="font-medium">
                  {addr.city}, {addr.street}, {addr.building}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(addr)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>

        {!isFormOpen ? (
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Добавить адрес
          </button>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium">Город</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, city: e.target.value }))
                }
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Улица</label>
              <input
                type="text"
                value={form.street}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, street: e.target.value }))
                }
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Дом</label>
              <input
                type="text"
                value={form.building}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, building: e.target.value }))
                }
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Сохранить
              </button>
              <button
                onClick={() => {
                  resetForm();
                  setIsFormOpen(false);
                }}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Отмена
              </button>
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}
