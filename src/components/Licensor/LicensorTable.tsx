import { useState } from "react";
import Modal from "../../layouts/Modal";
import LicensorView from "./LicensorView";
import { Edit, Eye, Filter, Invoice } from "../icons/icon";

type Props = {};
interface Licensor {
  id: string;
  name: string;
  email: string;
  country: string;
}

const licensors: Licensor[] = [
  {
    id: "LIC001",
    name: "T-SERIES",
    email: "tseries@email.com",
    country: "India",
  },
  {
    id: "LIC001",
    name: "Eagle tale",
    email: "tseries@email.com",
    country: "United states",
  },
  {
    id: "LIC001",
    name: "Star Sports",
    email: "tseries@email.com",
    country: "India",
  },
  {
    id: "LIC001",
    name: "Arun Smoki",
    email: "tseries@email.com",
    country: "India",
  },
  {
    id: "LIC001",
    name: "Mazhavil Manorama",
    email: "tseries@email.com",
    country: "India",
  },
  {
    id: "LIC002",
    name: "Universal Music Group",
    email: "universal@email.com",
    country: "United States",
  },
  {
    id: "LIC003",
    name: "Sony Music Entertainment",
    email: "sony@email.com",
    country: "Japan",
  },
  {
    id: "LIC004",
    name: "Warner Music Group",
    email: "warner@email.com",
    country: "United States",
  },
  {
    id: "LIC005",
    name: "EMI Group",
    email: "emi@email.com",
    country: "United Kingdom",
  },
  {
    id: "LIC006",
    name: "Bollywood Studios",
    email: "bollywood@email.com",
    country: "India",
  },
  // Add more licensors here
];

function LicensorTable({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl ml-[34px] mt-[24px] mr-[34px] h-[75svh] pr-9">
      <div className="relative pl-8 pb-5 pt-8 pr-8 ">
        <div className="flex justify-between text-sm">
          <input
            type="text"
            placeholder="             Search"
            className="border border-gray-300 rounded-md w-[566px] h-[42px] pr-[40px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-12 top-[53px] transform -translate-y-1/2 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <button className="flex items-center px-4 gap-2 w-[93px] h-[34px] border border-gray-400 text-black font-medium bg-gray-100 rounded-lg">
            Filter
            <span>
              <Filter />
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto px-9 rounded-lg">
        <table className="w-full h-[368px] table-auto ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-1 text-left text-sm">Licensor ID</th>
              <th className="px-4 py-1 text-left text-sm">Licensor name</th>
              <th className="px-4 py-1 text-left text-sm">Email</th>
              <th className="px-4 py-1 text-left text-sm">Country</th>
              <th className="px-4 py-1 text-left text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {licensors.map((licensor, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {licensor.id}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {licensor.name}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {licensor.email}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {licensor.country}
                </td>
                <td className="px-4 py-1  border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setOpen(true)}
                      className="flex gap-2 bg-red-100 hover:bg-red-200 text-black font-medium py-2 px-3 border border-black text-sm items-center rounded-lg"
                    >
                      <Eye />
                      View
                    </button>
                    <button className="flex gap-2 bg-gray-100-100 hover:bg-gray-400 text-black font-medium py-2 px-3 border border-black text-sm items-center rounded-lg">
                      <Edit />
                      Edit
                    </button>
                    <button className="flex gap-2 bg-gray-100-100 hover:bg-gray-400 text-black font-medium py-2 px-3 border border-black text-sm items-center rounded-lg">
                      <Invoice />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pt-4 flex justify-center">
        <nav className="flex items-center gap-96" aria-label="Pagination">
          <div>Showing 1 of 5 of 20 entries</div>
          <ul className="flex list-style-none">
            <li>
              <a
                href="#"
                className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight bg-red-500 text-white border border-gray-300 hover:bg-red-600 hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <LicensorView />
      </Modal>
    </div>
  );
}

export default LicensorTable;
