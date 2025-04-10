import React from "react";

const TableRow = ({
  image,
  title,
  price,
  timeLeft,
  id,
  onAdd,
  isFavourite,
}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="text-blue-dark">{title}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="font-medium text-blue-dark">${price}</p>
      </td>
      <td>
        <p className="font-medium text-blue-dark">{timeLeft}</p>
      </td>
      <th>
        <button
          className="cursor-pointer disabled:cursor-not-allowed"
          onClick={() => onAdd(id)}
          disabled={isFavourite}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className={`size-5  ${
              isFavourite
                ? "stroke-red-600 fill-red-600"
                : "stroke-blue-dark fill-none"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
