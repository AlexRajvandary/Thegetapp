export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t mt-16">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Brand Name</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Impact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sell</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sell on Curated</a></li>
              <li><a href="#" className="hover:underline">Become a Curated Creator</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">Safety Centre</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
