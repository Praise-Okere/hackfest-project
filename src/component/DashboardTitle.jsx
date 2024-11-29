import { Download, Triangle } from "lucide-react";
import Button from "./Button";
import BarChartComponent from "./BarChartComponent";

const DashboardTitle = () => {
  const statistics = [
    {
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M12 6V18M15 9.5C15 8.12 13.657 7 12 7C10.343 7 9 8.12 9 9.5C9 10.88 10.343 12 12 12C13.657 12 15 13.12 15 14.5C15 15.88 13.657 17 12 17C10.343 17 9 15.88 9 14.5'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M7 3.33801C8.51945 2.45874 10.2445 1.99712 12 2.00001C17.523 2.00001 22 6.47701 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.179 2.487 8.47001 3.338 7.00001'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </g>
        </svg>
      ),
      name: "Total Sales",
      value: "13.21%",
      total: "$247,821.53",
      incremented: true,
    },
    {
      icon: (
        <svg
          width='19'
          height='22'
          viewBox='0 0 19 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M18 6L9.5 1L1 6V16L9.5 21L18 16V6Z'
              stroke='black'
              strokeWidth='2'
              strokeLinejoin='round'
            />
            <path
              d='M9.5 10V14M13.5 8V14M5.5 12V14'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </svg>
      ),
      name: "Total Returns",
      value: "13.21%",
      total: "$32,831.21",
      incremented: true,
    },
    {
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M5 20V19C5 17.1435 5.7375 15.363 7.05025 14.0503C8.36301 12.7375 10.1435 12 12 12M12 12C13.8565 12 15.637 12.7375 16.9497 14.0503C18.2625 15.363 19 17.1435 19 19V20M12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12Z'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </svg>
      ),
      name: "Total Transfers ",
      value: "13.21%",
      total: "45,172",
      incremented: false,
    },
  ];

  const transactions = [
    {
      description: "Transfer to NIC Nigeria Limited",
      amount: "$23,526.11",
      date: "November 28, 2024",
      status: "Paid",
      transactionNumber: "#75739",
    },
    {
      description: "Transfer to NIC Nigeria Limited",
      amount: "$23,526.11",
      date: "November 28, 2024",
      status: "Paid",
      transactionNumber: "#75739",
    },
    {
      description: "Transfer to NIC Nigeria Limited",
      amount: "$23,526.11",
      date: "November 28, 2024",
      status: "Paid",
      transactionNumber: "#75739",
    },
  ];

  return (
    <div className='flex max-lg:flex-col justify-start max-md:items-center w-full items-start gap-8'>
      <div className='flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-medium'>Welcome back, NxtGen</h3>
          <p className='font-light'>
            You’ve made a profit of <span className='text-[#319F43]'>12%</span>{" "}
            in the last month.
          </p>
        </div>
        <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-4 -z-10'>
          {statistics.map((statistic, i) => (
            <div
              key={i}
              className='flex flex-col justify-start items-start gap-3 bg-white px-4 py-4 pr-5 rounded-3xl border-[0.1px] border-black/30'
            >
              {statistic.icon}
              <div className='flex justify-start items-center  text-sm gap-3 text-black/30'>
                <div className=''>{statistic.name}</div>
                <div
                  className={`flex justify-center items-center gap-1 py-[2px] px-1 rounded ${
                    statistic.incremented ? "bg-[#c1e2c7]" : "bg-[#ffb3b3]"
                  }`}
                >
                  <div>
                    {
                      <Triangle
                        className={`w-[7px] ${
                          statistic.incremented ? "rotate-0" : "rotate-180"
                        }`}
                        fill={`${
                          statistic.incremented ? "#319F43" : "#FF0000"
                        }`}
                      />
                    }
                  </div>{" "}
                  {statistic.value}
                </div>
              </div>
              <h3 className='text-lg font-medium'>{statistic.total}</h3>
            </div>
          ))}
        </div>
        <div className='flex flex-col items-start gap-3 -z-30 justify-center px-4 py-4 pr-10 rounded-3xl w-full max-w-[650px] bg-white border border-black/30'>
          <h3 className='text-sm font-medium text-black/30'>Sales Activity</h3>
          <h3 className='text-lg font-medium'>$523,292.81</h3>
          <BarChartComponent />
        </div>

        {/* Table */}
        <div className='rounded-3xl max-w-[650px] bg-white border border-black/30 overflow-hidden'>
          <table className='border-collapse border-spacing-0 text-left text-gray-700'>
            <thead>
              <tr className='bg-gray-200 text-sm font-medium'>
                <th className='px-6 py-4'>Recent Transactions</th>
                <th className='px-6 py-4'>Amount</th>
                <th className='px-6 py-4 max-md:hidden'>Date</th>
                <th className='px-6 py-4'>Status</th>
                <th className='px-6 py-4 max-md:hidden'>Transaction #</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`border-t border-black/30 bg-gray-50`}
                >
                  <td className='px-6 py-4 text-sm font-light'>
                    {transaction.description}
                  </td>
                  <td className='px-6 py-4 text-sm font-light'>
                    {transaction.amount}
                  </td>
                  <td className='px-6 py-4 text-sm font-light max-md:hidden'>
                    {transaction.date}
                  </td>
                  <td className='px-6 py-4 text-sm font-light'>
                    <span className='px-4 py-1 rounded-xl text-sm bg-green-100 text-green-600'>
                      {transaction.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm max-md:hidden font-light'>
                    {transaction.transactionNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex flex-col justify-center items-start gap-10'>
        <div className='flex justify-center mt-8 items-end gap-6'>
          <Button variant={"dashboard"}>View Transactions</Button>
          <Button variant={"dashboardGray"} icon={<Download className='w-4' />}>
            Export Statement
          </Button>
        </div>

        {/* Balances Tab */}
        <div className='flex flex-col justify-start items-start w-full gap-3 bg-white px-4 py-4 pr-5 rounded-3xl border-[0.1px] border-black/30'>
          <span>Balances</span>
          {/* Total Balance */}
          <div className='flex justify-between items-center w-full bg-[#B6BFC3] rounded-md border-[0.3px] border-[#B6BFC3] py-2 px-3 text-sm font-light'>
            <p>Total Balance</p>
            <p className='font-medium'>$247,821.53</p>
          </div>
          {/* Other Balances */}
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Feeding in Africa</p>
            <p className='font-medium'>$17,521.93</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Feeding in Africa</p>
            <p className='font-medium'>$17,521.93</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Feeding in Africa</p>
            <p className='font-medium'>$17,521.93</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Feeding in Africa</p>
            <p className='font-medium'>$17,521.93</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Feeding in Africa</p>
            <p className='font-medium'>$17,521.93</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Feeding in Africa</p>
            <p className='font-medium'>$17,521.93</p>
          </div>
        </div>

        {/* Transactions Tab */}
        <div className='flex flex-col justify-start items-start w-full gap-3 bg-white px-4 py-4 pr-5 rounded-3xl border-[0.1px] border-black/30'>
          <div>
            <span className='font-medium'>Top Transactions</span>
            <p className='text-xs font-light'>last 30 days</p>
          </div>
          {/* Transactions */}
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Transfer to NIC Nigeria Limited</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Transfer to NIC Nigeria Limited</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Transfer to NIC Nigeria Limited</p>
          </div>
          <div className='flex justify-between items-center w-full rounded-md py-2 px-3 text-sm font-light'>
            <p>Transfer to NIC Nigeria Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTitle;
