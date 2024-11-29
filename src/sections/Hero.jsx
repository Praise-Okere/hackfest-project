import Button from "../component/Button";

const Hero = () => {
  const features = ["Fast Transactions", "Easy Sign Up", "Ease of Usage"];
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <div className='flex flex-col justify-center items-center text-center mt-28 mx-28'>
        <h1 className='text-5xl font-medium'>
          Building Bridges to Financial Inclusion for African Markets
        </h1>
        <p className='font-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <Button variant={"primary"} to={"/connect-wallet"}>
          Create Account
        </Button>
        <Button variant={"light"}>Watch Tutorial</Button>
      </div>
      <div className='flex justify-center items-center gap-28'>
        {features.map((feature, i) => (
          <div
            key={i}
            className='flex justify-center items-center gap-1 text-nowrap'
          >
            <svg
              width='18'
              height='14'
              viewBox='0 0 18 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.5 1.41L5.5 13.41L0 7.91L1.41 6.5L5.5 10.58L16.09 0L17.5 1.41Z'
                fill='black'
              />
            </svg>

            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center gap-28'>
        <div className='flex flex-col justify-center items-center gap-6 bg-secondary px-10 py-5 rounded-3xl'>
          <div className='flex flex-col justify-center items-center gap-1'>
            <div className='bg-accent p-[10px] rounded-full'>
              <span>
                <svg
                  width='10'
                  height='9'
                  viewBox='0 0 10 9'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.95175 0.285706L3.76247 5.80892L1.28568 3.33392L0.142822 4.47678L3.95175 8.28571L9.28568 1.42856L7.95175 0.285706Z'
                    fill='white'
                  />
                </svg>
              </span>
            </div>
            <h3 className='text-sm font-medium'>Transaction Completed!</h3>
            <span className='text-xxxs text-black/30'>in 0.486s</span>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <h3 className='text-xxs'>NGN321,129.21</h3>
            <svg
              width='11'
              height='11'
              viewBox='0 0 11 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 4.66102H9.51624L5.43785 0.582627L5.95056 0L11 5.04944L5.95056 10.0989L5.43785 9.51624L9.51624 5.43785H0V4.66102Z'
                fill='black'
              />
            </svg>
            <h3 className='text-xxs'>SLNWorker2824</h3>
          </div>
        </div>

        {/* Converter */}
        <div className='flex flex-col justify-center items-center gap-3 bg-secondary px-10 py-5 rounded-3xl'>
          {/* First Input Row */}
          <div className='flex items-center bg-white rounded-full gap-4 pr-4 w-full'>
            <div className='bg-primary text-white rounded-full py-4 px-8 text-sm font-semibold'>
              SUI
            </div>
            <input
              type='text'
              value='32,128.21'
              className='flex-grow text-right rounded-full font-medium text-lg outline-none'
            />
          </div>

          {/* Swap Icon */}
          <div className='flex justify-center items-center'>
            <div className='bg-gray-700 text-white rounded-full w-8 h-8 flex justify-center items-center'>
              ⇅
            </div>
          </div>

          {/* Second Input Row */}
          <div className='flex items-center bg-white rounded-full gap-4 pr-4 w-full'>
            <div className='bg-primary text-white rounded-full py-4 px-8 text-sm font-semibold'>
              NGN
            </div>
            <input
              type='text'
              value='₦12,431,542.21'
              className='flex-grow text-right rounded-full font-medium text-lg outline-none'
            />
          </div>

          {/* Convert Button */}
          <Button variant={"dark"}>Convert</Button>
        </div>

        {/* Info 2 */}
        <div className='flex flex-col justify-center items-center gap-6 bg-secondary px-20 py-6 rounded-3xl'>
          <div className='flex flex-col justify-center items-center gap-1'>
            <div className='bg-accent p-[10px] rounded-full'>
              <span>
                <svg
                  width='10'
                  height='9'
                  viewBox='0 0 10 9'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.95175 0.285706L3.76247 5.80892L1.28568 3.33392L0.142822 4.47678L3.95175 8.28571L9.28568 1.42856L7.95175 0.285706Z'
                    fill='white'
                  />
                </svg>
              </span>
            </div>
            <h3 className='text-sm font-medium'>Stash Sent!</h3>
            <span className='text-xxxs text-black/30'>$100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
