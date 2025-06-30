export default function NotificationsSettings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-8">Notifications</h2>
      <form className="space-y-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="email" className="h-4 w-4" />
          <label htmlFor="email">Получать уведомления по Email</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="sms" className="h-4 w-4" />
          <label htmlFor="sms">Получать уведомления по SMS</label>
        </div>
        <button
          type="submit"
         className="bg-black text-white px-4 py-2 hover:bg-black"
        >
          Сохранить изменения
        </button>
      </form>
    </div>
  );
}
