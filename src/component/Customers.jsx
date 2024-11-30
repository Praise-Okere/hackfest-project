import { useSidebar } from "../hooks/useSidebar";
import DashboardHeader from "./DashboardHeader";
import customer from "/Group.png";

const Customers = () => {
  const { isSidebarOpen } = useSidebar();

  const transactions = [
    {
      icon: customer,
      name: "Julius Berger Intl.",
      amount: "$18k+",
      details: "Engineering/Construction Company",
      transfers: "17 Transactions Completed",
    },
    {
      icon: customer,
      name: "Luis and Kate Realtors",
      amount: "$16k+",
      details: "Real Estate and Housing",
      transfers: "32 Transactions Completed",
    },
    {
      icon: customer,
      name: "Rick Bennet",
      amount: "$11k+",
      details: "Electricity Distribution Company",
      transfers: "14 Transactions Completed",
    },
  ];

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>

      <main className='m-5 mt-10'>
        <div className='my-7'>
          <div className='text-xl flex items-center gap-3'>
            <h3>Top Transactions</h3>

            <svg
              width='15'
              height='13'
              viewBox='0 0 15 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.2357 10.7272L8.58377 0.93791C7.86318 -0.312636 6.68172 -0.312636 5.96025 0.93791L0.308302 10.728C-0.414042 11.9786 0.177126 13 1.62006 13L12.924 13C14.3669 13 14.9581 11.976 14.2357 10.7272Z'
                fill='#319F43'
              />
            </svg>
          </div>
          <div>
            {transactions.map((transaction, i) => (
              <div
                key={i}
                className='flex justify-between items-center bg-white border-[0.24px] border-black/30 rounded-2xl px-5 py-6'
              >
                <div className='flex justify-center items-center gap-3'>
                  <img src={transaction.icon} alt='pic' />
                  <div className='flex flex-col justify-start items-start gap-1'>
                    <h3 className='text-xl'>{transaction.name}</h3>
                    <p className='text-sm'>{transaction.details}</p>
                  </div>
                </div>
                <div className='flex flex-col justify-start items-end gap-1'>
                  <h3 className='text-xl'>
                    {transaction.amount} in Transactions{" "}
                  </h3>
                  <p className='text-sm'>{transaction.transfers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;
