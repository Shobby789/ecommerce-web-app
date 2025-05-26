import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSort } from "react-icons/bi";
import { PRODUCTS } from "../../constants/products";
import axios from "axios";
import { BASE_URL } from "../../api/api";
import Loader from "../Loaders/Loader";

const CustomersList = () => {
  const [customers, setCustomers] = useState(null);
  const LIMIT = 10;
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/users?limit=${LIMIT}`);
      setCustomers(res?.data?.users);
    } catch (error) {
      console.log("err while fetching products >>>>", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Customers";
    fetchCustomers();
  }, []);
  return (
    <div className="w-full pb-10 bg-white rounded-lg border">
      <div className="w-full p-10 flex items-center justify-between">
        <h2 className="page-heading">Customers</h2>
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

      {loading ? (
        <Loader />
      ) : isError ? (
        <div className="flex justify-center">
          <p>Something went wrong.</p>
        </div>
      ) : (
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
                  Email
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 secondary-text font-medium text-sm"
                >
                  Shipping Address
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
              {customers &&
                customers?.map((product, i) => {
                  return (
                    <tr className="" key={i}>
                      <td
                        className={`px-10 ${
                          i === 0 ? "pb-4 py-10" : " py-4"
                        } secondary-text whitespace-nowrap text-sm flex items-center gap-8`}
                      >
                        <div className="w-[48px] h-[48px] bg-gray-100 flex items-center justify-center font-medium text-blue-500">
                          <span>{product?.firstName?.slice(0, 1)}</span>
                          <span>{product?.lastName?.slice(0, 1)}</span>
                        </div>
                        <span>
                          {product?.firstName} {product?.lastName}
                        </span>
                      </td>
                      <td
                        className={`px-10 ${
                          i === 0 ? "pb-4 py-10" : " py-4"
                        } secondary-text text-sm font-normal`}
                      >
                        {product?.email}
                      </td>
                      <td
                        className={`px-10 ${
                          i === 0 ? "pb-4 py-10" : " py-4"
                        } secondary-text text-sm font-normal`}
                      >
                        {product?.address?.address} {product?.address?.city},{" "}
                        {product?.address?.state}, {product?.address?.country}
                      </td>
                      <td
                        className={`px-14 ${i === 0 ? "pb-4 py-10" : " py-4"}`}
                      >
                        <button className="" type="button">
                          <HiDotsHorizontal className="text-base text-gray-500" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* pagination */}
          <div
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersList;
