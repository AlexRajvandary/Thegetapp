export default function PhotoGrid() {
  return (
    <div className="my-12">
      <h2 className="text-[24px] font-semibold mb-6">Photos</h2>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length:8 }).map((_, index) => (
          <div
            key={index}
            className="w-[240px] 
                      aspect-square
                      bg-gray-200 
                      rounded-none
                      flex
                      items-center
                      justify-center
                      hover:bg-gray-300 
                      cursor-pointer 
                      transition"
          >
            <svg
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black"
            >
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M2 13.3636C2 10.2994 2 8.76721 2.74902 7.6666C3.07328 7.19014 3.48995 6.78104 3.97524 6.46268C4.69555 5.99013 5.59733 5.82123 6.978 5.76086C7.63685 5.76086 8.20412 5.27068 8.33333 4.63636C8.52715 3.68489 9.37805 3 10.3663 3H13.6337C14.6219 3 15.4728 3.68489 15.6667 4.63636C15.7959 5.27068 16.3631 5.76086 17.022 5.76086C18.4027 5.82123 19.3044 5.99013 20.0248 6.46268C20.51 6.78104 20.9267 7.19014 21.251 7.6666C22 8.76721 22 10.2994 22 13.3636C22 16.4279 22 17.9601 21.251 19.0607C20.9267 19.5371 20.51 19.9462 20.0248 20.2646C18.9038 21 17.3433 21 14.2222 21H9.77778C6.65675 21 5.09624 21 3.97524 20.2646C3.48995 19.9462 3.07328 19.5371 2.74902 19.0607C2.53746 18.7498 2.38566 18.4045 2.27673 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path d="M19 10H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
