export default function SecuritySettings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-8">Security</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Текущий пароль</label>
          <input
            type="password"
            className="border p-2 w-full"
            placeholder="Введите текущий пароль"
          />
        </div>
        <div>
          <label className="block font-medium">Новый пароль</label>
          <input
            type="password"
            className="border p-2 w-full"
            placeholder="Новый пароль"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 hover:bg-black"
        >
          Обновить пароль
        </button>
      </form>
    </div>
  );
}
