import React from "react";

const Sidebar = ({ favouriteItems = [] }) => {
  const totalPrice =
    favouriteItems.length === 0
      ? 0
      : favouriteItems.reduce((acc, item) => acc + item?.currentBidPrice, 0);

  return (
    <>
      <h3 className="font-medium text-lg text-blue-dark flex items-center justify-center py-4 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`size-5 stroke-blue-dark`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>{" "}
        Favourite Items
      </h3>
      <hr className="border-gray-200" />
      <div className="py-8">
        {favouriteItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-medium text-black">No Favourites Yet</h4>
            <p className="text-black/[0.7] text-xs mt-3 text-center">
              Click the heart icon on any item <br /> to add it to your
              favorites
            </p>
          </div>
        ) : (
          <div className="px-3">
            {favouriteItems.map((item) => (
              <div
                className="flex justify-between border-b border-solid pb-3 border-gray-200"
                key={item.id}
              >
                <div className="flex gap-2">
                  <img
                    src={item.image}
                    alt=""
                    className="size-16 shrink-0 object-cover"
                  />
                  <div className="text-sm text-blue-dark">
                    <p className="line-clamp-2">{item.title}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p>${item.price}</p>
                      <p>Bids: {item.bidsCount}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <hr className="border-gray-200" />
      <div className="py-4 flex items-center justify-between px-3">
        <p className="text-sm text-black">Total Bids Amount</p>
        <p className="text-sm font-medium">${totalPrice}</p>
      </div>
    </>
  );
};

export default Sidebar;
