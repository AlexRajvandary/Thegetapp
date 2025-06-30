export default function ProfileSettings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-8">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">User Name</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="border p-2 w-full rounded"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 hover:bg-black"
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}
