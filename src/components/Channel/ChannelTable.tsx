import { Edit, Eye, Filter } from "../icons/icon";

type Props = {
  channels: any[]; // Add channels property to the Props type
};

function ChannelTable({ channels }: Props) {
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
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-1 text-left text-sm">Logo</th>
              <th className="px-4 py-1 text-left text-sm">Channel name</th>
              <th className="px-4 py-1 text-left text-sm">Licensor name</th>
              <th className="px-4 py-1 text-left text-sm">Email</th>
              <th className="px-4 py-1 text-left text-sm">Commission</th>
              <th className="px-4 py-1 text-left text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((channel, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {channel.logo}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {channel.channelName}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {channel.channelId}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {channel.email}
                </td>
                <td className="px-4 py-1  border-gray-200 text-sm">
                  {channel.commission}
                </td>
                <td className="px-4 py-1  border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button className="flex gap-2 bg-red-100 hover:bg-pink-600 text-black font-medium py-1 px-2 w-[90px] border text-sm items-center border-red-500 rounded-lg">
                      <Eye />
                      View
                    </button>
                    <button className="flex bg-gray-300 gap-2 hover:bg-gray-600 text-black font-medium py-1 px-2 w-[90px] border text-sm items-center border-black rounded-lg">
                      <Edit />
                      Edit
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
    </div>
  );
}

export default ChannelTable;
