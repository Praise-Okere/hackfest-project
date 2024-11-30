import { Download } from "lucide-react";
import { useSidebar } from "../hooks/useSidebar";
import DashboardHeader from "./DashboardHeader";
import Button from "./Button";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";
import { useAccountType } from "../hooks/useAccountType";

const Analytics = () => {
  const { isSidebarOpen } = useSidebar();

  const services = [
    {
      icon: (
        <svg
          width='25'
          height='29'
          viewBox='0 0 25 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5 19.8748C6.05421 19.8748 0.833374 22.4853 0.833374 25.7082V28.6248H24.1667V25.7082C24.1667 22.4853 18.9459 19.8748 12.5 19.8748ZM6.66671 11.1248C6.66671 12.6719 7.28129 14.1557 8.37525 15.2496C9.46921 16.3436 10.9529 16.9582 12.5 16.9582C14.0471 16.9582 15.5309 16.3436 16.6248 15.2496C17.7188 14.1557 18.3334 12.6719 18.3334 11.1248M11.7709 0.916504C11.3334 0.916504 11.0417 1.22275 11.0417 1.64567V6.02067H9.58337V2.37484C9.58337 2.37484 6.30212 3.629 6.30212 7.84359C6.30212 7.84359 5.20837 8.04775 5.20837 9.6665H19.7917C19.7188 8.04775 18.698 7.84359 18.698 7.84359C18.698 3.629 15.4167 2.37484 15.4167 2.37484V6.02067H13.9584V1.64567C13.9584 1.22275 13.6813 0.916504 13.2292 0.916504H11.7709Z'
            fill='white'
          />
        </svg>
      ),
      name: "Construction",
      amount: "$261,732.11",
      details: "Iluobe Construction Services",
      dates: "29th November, 2024 - 7th December, 2024",
    },
    {
      icon: (
        <svg
          width='35'
          height='30'
          viewBox='0 0 35 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.1835 27.0709C7.03325 23.1247 0 16.6059 0 10.4424C0 0.145421 9.625 -3.69933 17.5 4.25267C25.375 -3.69933 35 0.145421 35 10.4424C35 16.6059 27.965 23.1247 22.8165 27.0709C20.4855 28.8559 19.32 29.7502 17.5 29.7502C15.68 29.7502 14.5145 28.8577 12.1835 27.0709ZM25.375 5.68767C25.7231 5.68767 26.0569 5.82595 26.3031 6.07209C26.5492 6.31823 26.6875 6.65207 26.6875 7.00017V9.18767H28.875C29.2231 9.18767 29.5569 9.32595 29.8031 9.57209C30.0492 9.81824 30.1875 10.1521 30.1875 10.5002C30.1875 10.8483 30.0492 11.1821 29.8031 11.4282C29.5569 11.6744 29.2231 11.8127 28.875 11.8127H26.6875V14.0002C26.6875 14.3483 26.5492 14.6821 26.3031 14.9282C26.0569 15.1744 25.7231 15.3127 25.375 15.3127C25.0269 15.3127 24.6931 15.1744 24.4469 14.9282C24.2008 14.6821 24.0625 14.3483 24.0625 14.0002V11.8127H21.875C21.5269 11.8127 21.1931 11.6744 20.9469 11.4282C20.7008 11.1821 20.5625 10.8483 20.5625 10.5002C20.5625 10.1521 20.7008 9.81824 20.9469 9.57209C21.1931 9.32595 21.5269 9.18767 21.875 9.18767H24.0625V7.00017C24.0625 6.65207 24.2008 6.31823 24.4469 6.07209C24.6931 5.82595 25.0269 5.68767 25.375 5.68767Z'
            fill='white'
          />
        </svg>
      ),
      name: "Healthcare",
      amount: "$182,732.11",
      details: "JK Pharmaceuticals ",
      dates: "22nd November, 2024 - 8th December, 2024",
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
            d='M30.9851 34.0553L20.641 23.7112L24.6086 19.7436L34.9527 30.0877L30.9851 34.0553ZM4.91228 34.0553L0.944669 30.0877L13.9811 17.0513L10.7692 13.8394L9.44669 15.1619L7.03778 12.753V16.6262L5.71525 17.9487L0 12.2335L1.32254 10.9109H5.19568L2.83401 8.54925L9.54115 1.84211C10.1709 1.21233 10.8479 0.755737 11.5722 0.472336C12.2964 0.188936 13.0364 0.0472355 13.7922 0.0472355C14.5479 0.0472355 15.2879 0.188936 16.0121 0.472336C16.7364 0.755737 17.4134 1.21233 18.0432 1.84211L13.6977 6.18758L16.0594 8.54925L14.7368 9.87179L17.9487 13.0837L22.1997 8.83265C22.0738 8.48627 21.9717 8.12415 21.8936 7.74628C21.8155 7.36842 21.7759 6.99055 21.7746 6.61268C21.7746 4.75483 22.4126 3.18794 23.6885 1.91201C24.9644 0.636079 26.5307 -0.00125769 28.3873 1.86325e-06C28.8596 1.86325e-06 29.3087 0.0472354 29.7344 0.141702C30.1601 0.236169 30.5928 0.37787 31.0324 0.566803L26.3563 5.24291L29.7571 8.64372L34.4332 3.96761C34.6536 4.40845 34.8035 4.84111 34.8828 5.26558C34.9622 5.69006 35.0012 6.13909 35 6.61268C35 8.47053 34.3626 10.0374 33.088 11.3134C31.8133 12.5893 30.2464 13.2266 28.3873 13.2254C28.0094 13.2254 27.6316 13.1939 27.2537 13.1309C26.8758 13.0679 26.5137 12.9577 26.1673 12.8003L4.91228 34.0553Z'
            fill='white'
          />
        </svg>
      ),
      name: "Repairs",
      amount: "$162,292.11",
      details: "Jeftoni Autos",
      dates: "26th November, 2024 - 12th December, 2024",
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

  const { accountType } = useAccountType();

  const img = [];

  for (let i = 0; i < 6; i++) {
    <img key={i} src='/Group.png' alt='' />;
    img.push();
  }

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>

      <main className='m-5 mt-10'>
        <div className='flex max-lg:flex-col justify-start max-md:items-center w-full items-start gap-8'>
          <div className='flex flex-1 flex-col justify-center items-start gap-10'>
            <div className='my-7'>
              <div className='text-xl flex items-center gap-3'>
                <svg
                  width='27'
                  height='27'
                  viewBox='0 0 27 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.25 2.25H24.75V24.75H2.25V2.25ZM4.5 4.5V22.5H22.5V4.5H4.5ZM20.25 9V12.375H18V9H20.25ZM14.625 11.25V14.625H12.375V11.25H14.625ZM9 13.5V20.25H6.75V13.5H9ZM20.25 14.625V20.25H18V14.625H20.25ZM14.625 16.875V20.25H12.375V16.875H14.625Z'
                    fill='black'
                  />
                </svg>

                <h3>Account Analytics</h3>
              </div>
            </div>
            <div className='flex items-start gap-1 -z-30 max-md:flex-col max-md:items-center justify-center px-2 py-4 rounded-3xl w-full max-w-[650px] bg-white border border-black/30'>
              <div className='flex flex-col justify-center items-center w-[50%]'>
                <PieChartComponent />
                <div className='flex justify-center items-center gap-6 '>
                  <p className='flex justify-center items-center gap-2 '>
                    <div className='w-5 h-5 bg-[#A8A8A8] ' />
                    Received
                  </p>
                  <p className='flex justify-center items-center gap-2 '>
                    <div className='w-5 h-5 bg-[#595959]' />
                    Sent
                  </p>
                </div>
              </div>
              <div className='w-full'>
                <h3 className='text-sm font-medium text-black/30'>
                  Sales Activity
                </h3>
                <h3 className='text-lg font-medium'>$523,292.81</h3>
                <BarChartComponent />
              </div>
            </div>

            <div className='flex justify-center items-center gap-20 w-full font-medium'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <h3 className='text-[#FF0000]'>Net Outgoing</h3>
                <p>$1,837,201.22</p>
              </div>
              <div className='flex flex-col justify-center items-center gap-3'>
                <h3 className='text-[#2DBB53]'>Net Inflow</h3>
                <p>$2,837,201.22</p>
              </div>
            </div>

            <div className='flex flex-col items-start gap-5'>
              <span className='text-sm'>Most Used Services (Last 30 days)</span>
              <div className='flex flex-col items-start gap-5'>
                {services.map((service, i) => (
                  <div
                    key={i}
                    className='flex justify-start items-start max-md:flex-col max-md:items-center bg-gradient-to-r from-lightGray to-darkGray rounded-3xl gap-6 p-4 max-w-3xl'
                  >
                    {/* Left section with icon */}
                    <div className='bg-[#2190C3]/40 rounded-3xl p-6 pt-12 flex flex-col gap-5 items-center justify-center min-w-[125px]'>
                      {service.icon}

                      <span className='text-white text-xs'>{service.name}</span>
                    </div>

                    {/* Right section with details */}
                    <div className='mr-20 flex flex-col pt-3 gap-5'>
                      <div className='text-sm'>
                        Amount Spent:{" "}
                        <span className='text-black'>{service.amount}</span>{" "}
                        <span className='text-gray-500 text-sm'>
                          (Last 30 days)
                        </span>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='text-sm'>
                          {service.name}: <span>{service.details}</span>
                        </div>

                        <div className='text-gray-600 text-xxs'>
                          {service.dates}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {accountType === "business" ? (
            <div className='flex flex-col justify-center items-start gap-10'>
              <div className='flex justify-center mt-8 items-end gap-6'>
                <Button variant={"dashboard"}>View Transactions</Button>
                <Button
                  variant={"dashboardGray"}
                  icon={<Download className='w-4' />}
                >
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
          ) : (
            <div>
              <div>
                <div className='flex flex-col justify-center items-center mt-28 gap-10'>
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
                            <p className='font-light text-xxs'>
                              {payment.details}
                            </p>
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
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Analytics;
