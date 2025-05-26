import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSort } from "react-icons/bi";
import { PRODUCTS } from "../../constants/products";

const OrdersList = () => {
  useEffect(() => {
    document.title = "Orders";
  }, []);
  return (
    <div className="w-full pb-10 bg-white rounded-lg border">
      <div className="w-full p-10 flex items-center justify-between">
        <h2 className="page-heading">Orders</h2>
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-2 px-3 h-[40px] w-[282px] border rounded-lg justify-between">
            <IoSearchOutline className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search orders"
              className="w-full border-none outline-none text-sm secondary-text"
            />
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="secondary-text border-b border-t">
            <tr>
              <th
                scope="col"
                className="px-14 py-3 secondary-text font-medium text-sm flex items-center gap-12"
              >
                <button type="button">
                  <BiSort className="text-base" />
                </button>
                Name
              </th>
              <th
                scope="col"
                className="px-10 py-3 secondary-text font-medium text-sm"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-10 py-3 secondary-text font-medium text-sm"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-10 py-3 secondary-text font-medium text-sm"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-10 py-3 secondary-text font-medium text-sm"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {PRODUCTS?.map((product, i) => {
              return (
                <tr className="" key={i}>
                  <td
                    className={`px-10 ${
                      i === 0 ? "pb-4 py-10" : " py-4"
                    } secondary-text whitespace-nowrap text-sm flex items-center gap-8`}
                  >
                    <div className="w-[48px] h-[48px] bg-gray-100 flex items-center justify-center">
                      <img
                        src={product?.image}
                        alt={product?.name}
                        width={32}
                        height={46}
                        className="object-contain"
                      />
                    </div>
                    <span>{product?.name}</span>
                  </td>
                  <td
                    className={`px-10 ${
                      i === 0 ? "pb-4 py-10" : " py-4"
                    } secondary-text text-sm font-normal`}
                  >
                    12 Mar, 2024
                  </td>
                  <td
                    className={`px-10 ${
                      i === 0 ? "pb-4 py-10" : " py-4"
                    } secondary-text text-sm font-normal`}
                  >
                    ${product?.price}
                  </td>
                  <td
                    className={`px-10 ${
                      i === 0 ? "pb-4 py-10" : " py-4"
                    } secondary-text text-sm font-normal`}
                  >
                    Processing
                  </td>
                  <td className={`px-14 ${i === 0 ? "pb-4 py-10" : " py-4"}`}>
                    <button className="" type="button">
                      <HiDotsHorizontal className="text-base text-gray-500" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <nav
        aria-label="Page navigation"
        className="mt-16 flex justify-end px-10"
      >
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-100 hover:bg-gray-100 hover:text-gray-700"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrdersList;
