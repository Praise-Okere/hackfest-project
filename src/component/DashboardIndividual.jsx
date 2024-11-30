import { Download, Triangle } from "lucide-react";
import Button from "./Button";

const DashboardIndividual = () => {
  const img = [];

  for (let i = 0; i < 6; i++) {
    img.push(
      <img key={i} src='/Group.png' alt='transfers' className='w-8 h-8' />
    );
  }

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
      description: "Payment for flight ticket",
      amount: "$432.11",
      date: "November 28, 2024",
      status: "Paid",
    },
    {
      description: "Taxi to Airport",
      amount: "$12.32",
      date: "November 28, 2024",
      status: "Paid",
    },
    {
      description: "Grocery Shopping",
      amount: "$532.11",
      date: "November 28, 2024",
      status: "Paid",
    },
    {
      description: "Elora’s Birthday Present",
      amount: "$739.03",
      date: "November 28, 2024",
      status: "Paid",
    },
  ];

  const savings = [
    {
      icon: (
        <svg
          width='31'
          height='25'
          viewBox='0 0 31 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.75 6.66675H12.5833'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M28.3815 8.125H24.5869C21.9838 8.125 19.875 10.0835 19.875 12.5C19.875 14.9165 21.9852 16.875 24.5854 16.875H28.3815C28.504 16.875 28.5637 16.875 28.6148 16.8721C29.4023 16.824 30.0294 16.2421 30.0804 15.5115C30.0833 15.4648 30.0833 15.4079 30.0833 15.2956V9.70438C30.0833 9.59208 30.0833 9.53521 30.0804 9.48854C30.0279 8.75792 29.4023 8.17604 28.6148 8.12792C28.5652 8.125 28.504 8.125 28.3815 8.125Z'
            stroke='black'
            strokeWidth='1.5'
          />
          <path
            d='M28.574 8.12504C28.4603 5.39504 28.0957 3.72087 26.9159 2.54254C25.2082 0.833374 22.4578 0.833374 16.9584 0.833374H12.5834C7.08404 0.833374 4.33362 0.833374 2.62591 2.54254C0.918206 4.25171 0.916748 7.00067 0.916748 12.5C0.916748 17.9994 0.916748 20.7498 2.62591 22.4575C4.33508 24.1652 7.08404 24.1667 12.5834 24.1667H16.9584C22.4578 24.1667 25.2082 24.1667 26.9159 22.4575C28.0957 21.2792 28.4617 19.605 28.574 16.875'
            stroke='black'
            strokeWidth='1.5'
          />
          <path
            d='M24.2371 12.5H24.253'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),

      name: "Personal Savings",
      details: "Savings account created on 12/11/2022 for Agricultural intent",
      amount: "$45,321.91",
      color: "#B9E1B9",
    },
    {
      icon: (
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.75 11.6667H14.5833'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M30.3815 13.125H26.5869C23.9838 13.125 21.875 15.0835 21.875 17.5C21.875 19.9165 23.9852 21.875 26.5854 21.875H30.3815C30.504 21.875 30.5637 21.875 30.6148 21.8721C31.4023 21.824 32.0294 21.2421 32.0804 20.5115C32.0833 20.4648 32.0833 20.4079 32.0833 20.2956V14.7044C32.0833 14.5921 32.0833 14.5352 32.0804 14.4885C32.0279 13.7579 31.4023 13.176 30.6148 13.1279C30.5652 13.125 30.504 13.125 30.3815 13.125Z'
            stroke='black'
            strokeWidth='1.5'
          />
          <path
            d='M30.574 13.125C30.4603 10.395 30.0957 8.72087 28.9159 7.54254C27.2082 5.83337 24.4578 5.83337 18.9584 5.83337H14.5834C9.08404 5.83337 6.33362 5.83337 4.62591 7.54254C2.91821 9.25171 2.91675 12.0007 2.91675 17.5C2.91675 22.9994 2.91675 25.7498 4.62591 27.4575C6.33508 29.1652 9.08404 29.1667 14.5834 29.1667H18.9584C24.4578 29.1667 27.2082 29.1667 28.9159 27.4575C30.0957 26.2792 30.4617 24.605 30.574 21.875'
            stroke='black'
            strokeWidth='1.5'
          />
          <path
            d='M26.2371 17.5H26.253'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12.5 18.875C11.837 18.875 11.2011 18.5787 10.7322 18.0512C10.2634 17.5238 10 16.8084 10 16.0625C10 15.3166 10.2634 14.6012 10.7322 14.0738C11.2011 13.5463 11.837 13.25 12.5 13.25C13.163 13.25 13.7989 13.5463 14.2678 14.0738C14.7366 14.6012 15 15.3166 15 16.0625C15 16.8084 14.7366 17.5238 14.2678 18.0512C13.7989 18.5787 13.163 18.875 12.5 18.875ZM12.5 14.375C11.67 14.375 11 15.1287 11 16.0625C11 16.9962 11.67 17.75 12.5 17.75C13.33 17.75 14 16.9962 14 16.0625C14 15.1287 13.33 14.375 12.5 14.375Z'
            fill='black'
          />
          <path
            d='M18.5 23.375C18.22 23.375 18 23.1275 18 22.8125C18 22.4975 18.22 22.25 18.5 22.25C18.78 22.25 19 22.0025 19 21.6875C19 20.9416 18.7366 20.2262 18.2678 19.6988C17.7989 19.1713 17.163 18.875 16.5 18.875H15.5C15.22 18.875 15 18.6275 15 18.3125C15 17.9975 15.22 17.75 15.5 17.75C16.33 17.75 17 16.9962 17 16.0625C17 15.1287 16.33 14.375 15.5 14.375C15.22 14.375 15 14.1275 15 13.8125C15 13.4975 15.22 13.25 15.5 13.25C16.163 13.25 16.7989 13.5463 17.2678 14.0738C17.7366 14.6012 18 15.3166 18 16.0625C18 16.76 17.78 17.39 17.4 17.885C18.89 18.335 20 19.865 20 21.6875C20 22.6213 19.33 23.375 18.5 23.375ZM6.5 23.375C5.67 23.375 5 22.6213 5 21.6875C5 19.865 6.1 18.335 7.6 17.885C7.23 17.39 7 16.76 7 16.0625C7 15.3166 7.26339 14.6012 7.73223 14.0738C8.20107 13.5463 8.83696 13.25 9.5 13.25C9.78 13.25 10 13.4975 10 13.8125C10 14.1275 9.78 14.375 9.5 14.375C8.67 14.375 8 15.1287 8 16.0625C8 16.9962 8.67 17.75 9.5 17.75C9.78 17.75 10 17.9975 10 18.3125C10 18.6275 9.78 18.875 9.5 18.875H8.5C7.83696 18.875 7.20107 19.1713 6.73223 19.6988C6.26339 20.2262 6 20.9416 6 21.6875C6 22.0025 6.22 22.25 6.5 22.25C6.78 22.25 7 22.4975 7 22.8125C7 23.1275 6.78 23.375 6.5 23.375ZM15.5 26.75H9.5C8.67 26.75 8 25.9963 8 25.0625V23.9375C8 21.7662 9.57 20 11.5 20H13.5C15.43 20 17 21.7662 17 23.9375V25.0625C17 25.9963 16.33 26.75 15.5 26.75ZM11.5 21.125C10.837 21.125 10.2011 21.4213 9.73223 21.9488C9.26339 22.4762 9 23.1916 9 23.9375V25.0625C9 25.3775 9.22 25.625 9.5 25.625H15.5C15.78 25.625 16 25.3775 16 25.0625V23.9375C16 23.1916 15.7366 22.4762 15.2678 21.9488C14.7989 21.4213 14.163 21.125 13.5 21.125H11.5Z'
            fill='black'
          />
        </svg>
      ),

      name: "Group Savings",
      details: "Savings account created on 12/11/2022 for Agricultural intent",
      amount: "$7,212.34",
      color: "#DDC49B",
    },
    {
      icon: (
        <svg
          width='23'
          height='30'
          viewBox='0 0 23 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.85714 30C2.07143 30 1.39905 29.7205 0.84 29.1614C0.280952 28.6024 0.000952381 27.9295 0 27.1429V12.8571C0 12.0714 0.28 11.399 0.84 10.84C1.4 10.281 2.07238 10.001 2.85714 10H4.28571V7.14286C4.28571 5.16667 4.98238 3.48238 6.37571 2.09C7.76905 0.69762 9.45333 0.000953356 11.4286 9.75134e-07C13.4038 -0.000951406 15.0886 0.695715 16.4829 2.09C17.8771 3.48429 18.5733 5.16857 18.5714 7.14286V10H20C20.7857 10 21.4586 10.28 22.0186 10.84C22.5786 11.4 22.8581 12.0724 22.8571 12.8571V27.1429C22.8571 27.9286 22.5776 28.6014 22.0186 29.1614C21.4595 29.7214 20.7867 30.0009 20 30H2.85714ZM2.85714 27.1429H20V12.8571H2.85714V27.1429ZM11.4286 22.8571C12.2143 22.8571 12.8871 22.5776 13.4471 22.0186C14.0071 21.4595 14.2867 20.7867 14.2857 20C14.2848 19.2133 14.0052 18.541 13.4471 17.9829C12.889 17.4248 12.2162 17.1448 11.4286 17.1429C10.641 17.141 9.96857 17.421 9.41143 17.9829C8.85429 18.5448 8.57428 19.2171 8.57143 20C8.56857 20.7829 8.84857 21.4557 9.41143 22.0186C9.97429 22.5814 10.6467 22.861 11.4286 22.8571ZM7.14286 10H15.7143V7.14286C15.7143 5.95238 15.2976 4.94048 14.4643 4.10714C13.631 3.27381 12.619 2.85714 11.4286 2.85714C10.2381 2.85714 9.22619 3.27381 8.39286 4.10714C7.55952 4.94048 7.14286 5.95238 7.14286 7.14286V10Z'
            fill='black'
          />
        </svg>
      ),

      name: "Staked Funds",
      details: "Staked Funds on 09/12/2023 for 12.2% APY",
      amount: "$13,212.74",
      color: "#B8D7E8",
    },
  ];

  const payments = [
    {
      name: "Pay Airtime",
      details: "MTN Airtime VTU Recharge",
    },
    {
      name: "Pay Electricity",
      details: "HZ21532 PHCN Port Harcourt Prepaid",
    },
    {
      name: "Pay Water Bill",
      details: "Lagos State Water Resources",
    },
  ];

  return (
    <div className='flex max-lg:flex-col justify-start max-md:items-center w-full h-screen items-start gap-8'>
      <div className='flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-medium'>Welcome back, Adebayo</h3>
          <p className='font-light'>
            Everyday brings its own challenges, you’ve got this
          </p>
        </div>
        <div className='flex items-center -z-30 text-white justify-between gap-36 max-md:gap-10 p-8 rounded-3xl max-w-[650px] bg-[#2190C3] border border-black/30'>
          <div className='flex flex-col gap-5'>
            <div>
              <h3>Account Balance</h3>
            </div>
            <div>
              <h3 className='text-lg font-medium'>$523,292.81</h3>
              <h3 className='text-sm font-medium'>United States Dollar</h3>
            </div>
          </div>
          <div>
            <Button variant={"dashboard"}>
              <span className='text-[#2190C3]'>Fund Account</span>
            </Button>
          </div>
        </div>
        <div className='flex flex-col max-md:justify-center max-md:items-center gap-6'>
          <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-w-[800px] '>
            {savings.map((saving, i) => (
              <div
                key={i}
                className='bg-white border-[0.24px] border-black/30 rounded-2xl'
              >
                <div className='flex flex-col justify-center items-center gap-2 py-6 h-full'>
                  <div
                    className={`w-12 h-12 flex justify-center items-center rounded-full`}
                    style={{ backgroundColor: saving.color }}
                  >
                    {saving.icon}
                  </div>
                  <div className='flex flex-col justify-between gap-4 items-center'>
                    <div className='flex flex-col justify-center items-center'>
                      <h3 className='font-medium'>{saving.name}</h3>
                      <p className='text-xs text-center'>{saving.details}</p>
                    </div>
                    <div>
                      <span className='text-lg font-medium'>
                        {saving.amount}
                      </span>
                    </div>
                    <Button variant={"primary"} sizes={"small"}>
                      View more
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className='rounded-3xl max-w-[700px] bg-white border border-black/30 overflow-hidden'>
          <table className='border-collapse border-spacing-0 text-left text-gray-700'>
            <thead>
              <tr className='bg-gray-200 text-sm font-medium'>
                <th className='px-10 max-md:px-1 py-4'>Description</th>
                <th className='px-10 max-md:px-1 py-4'>Amount</th>
                <th className='px-10 max-md:px-1 py-4 max-md:hidden'>Date</th>
                <th className='px-10 max-md:px-1 py-4'>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`border-t border-black/30 bg-gray-50`}
                >
                  <td className='px-6 max-md:px-2 py-4 text-sm font-light'>
                    {transaction.description}
                  </td>
                  <td className='px-6 max-md:px-2 py-4 text-sm font-light'>
                    {transaction.amount}
                  </td>
                  <td className='px-6 max-md:px-2 py-4 text-sm font-light max-md:hidden'>
                    {transaction.date}
                  </td>
                  <td className='px-6 py-4 text-sm font-light'>
                    <span className='px-4 py-1 rounded-xl text-sm bg-green-100 text-green-600'>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='w-[1px] h-[1200px] bg-gray-800 max-lg:hidden'></div>

      {/* Right Side */}
      <div className='flex flex-col justify-center items-center mt-28 max-lg:mt-5 gap-10'>
        {/* Balances Tab */}
        <div className='flex flex-col justify-start items-start w-full gap-3'>
          <div className='flex justify-center items-end gap-6'>
            Quick Payments
          </div>

          <div className='flex flex-col justify-center items-center gap-6 w-full'>
            {payments.map((payment, i) => (
              <div
                key={i}
                className='flex justify-between items-center w-full gap-3 bg-white px-4 py-4 pr-5 rounded-3xl border-[0.1px] border-black/30'
              >
                <div>
                  <h3 className='font-medium'>{payment.name}</h3>
                  <p className='font-light text-xxs'>{payment.details}</p>
                </div>
                <div>
                  <button className='bg-gradient-to-r from-secondary to-accent px-8 py-[10px] rounded-2xl text-sm text-white'>
                    Go
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions Tab */}
        <div className='flex flex-col justify-start items-start w-full gap-6'>
          <div className='flex justify-center items-end gap-6'>
            Quick Transfer
          </div>

          <div className='flex justify-center items-center gap-6 w-full'>
            {img}
          </div>

          <div className='flex justify-center items-center bg-white border border-black/30 py-3 px-8 rounded-2xl'>
            <input
              type='text'
              className='border-none outline-none w-[250px] text-center h-8 text-xs font-light'
              placeholder='Enter wallet address'
            />
          </div>
          <div className='flex justify-center items-center w-full  bg-black border border-black/30 py-3 px-8 rounded-2xl'>
            <button className='h-8 text-white'>Make Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndividual;
