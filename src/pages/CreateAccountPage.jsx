import Button from "../component/Button";
import { useAccountType } from "../hooks/useAccountType";

const CreateAccountPage = () => {
  const { setIndividual, setBusiness } = useAccountType();
  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='absolute top-0 -z-10 h-full w-full overflow-hidden '>
        <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[30%] translate-y-[80%] rounded-full bg-[rgba(33,144,195,0.5)] opacity-50 blur-[80px]'></div>
      </div>
      <div className='absolute top-0 -z-10 h-full w-full overflow-hidden '>
        <div className='absolute top-auto right-auto left-0 bottom-0 h-[500px] w-[500px] -translate-x-[50%] -translate-y-[70%] rounded-full bg-[rgba(33,144,195,0.5)] opacity-50 blur-[80px]'></div>
      </div>

      <div className='w-full max-w-5xl flex justify-center max-lg:justify-center items-center p-6'>
        {/* Right Content */}
        <div className='max-w-md text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            What are you creating an account for?
          </h2>

          <div className='flex justify-center items-center gap-8'>
            <div onClick={() => setIndividual()}>
              <Button
                to={"/connect-wallet"}
                variant={"light"}
                icon={
                  <p>
                    <svg
                      width='18'
                      height='19'
                      viewBox='0 0 18 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.99996 9.75C12.942 9.75 16.987 12.313 17.249 17.462C17.259 17.6605 17.1899 17.8548 17.0568 18.0024C16.9237 18.15 16.7374 18.2387 16.539 18.249C14.459 18.355 4.82596 18.42 1.46196 18.249C1.26332 18.2389 1.07682 18.1503 0.943481 18.0027C0.810144 17.8552 0.740894 17.6606 0.750962 17.462C1.01296 12.314 5.05796 9.75 8.99996 9.75ZM8.99996 0.75C8.0054 0.75 7.05157 1.14509 6.34831 1.84835C5.64505 2.55161 5.24996 3.50544 5.24996 4.5C5.24996 5.49456 5.64505 6.44839 6.34831 7.15165C7.05157 7.85491 8.0054 8.25 8.99996 8.25C9.99452 8.25 10.9484 7.85491 11.6516 7.15165C12.3549 6.44839 12.75 5.49456 12.75 4.5C12.75 3.50544 12.3549 2.55161 11.6516 1.84835C10.9484 1.14509 9.99452 0.75 8.99996 0.75Z'
                        fill='black'
                      />
                    </svg>
                  </p>
                }
              >
                Individual
              </Button>
            </div>

            <div onClick={() => setBusiness()}>
              <Button
                to={"/connect-wallet"}
                variant={"primary"}
                icon={
                  <svg
                    width='20'
                    height='14'
                    viewBox='0 0 20 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3 6C4.10313 6 5 5.10313 5 4C5 2.89687 4.10313 2 3 2C1.89688 2 1 2.89687 1 4C1 5.10313 1.89688 6 3 6ZM17 6C18.1031 6 19 5.10313 19 4C19 2.89687 18.1031 2 17 2C15.8969 2 15 2.89687 15 4C15 5.10313 15.8969 6 17 6ZM18 7H16C15.45 7 14.9531 7.22188 14.5906 7.58125C15.85 8.27188 16.7437 9.51875 16.9375 11H19C19.5531 11 20 10.5531 20 10V9C20 7.89687 19.1031 7 18 7ZM10 7C11.9344 7 13.5 5.43437 13.5 3.5C13.5 1.56562 11.9344 0 10 0C8.06563 0 6.5 1.56562 6.5 3.5C6.5 5.43437 8.06563 7 10 7ZM12.4 8H12.1406C11.4906 8.3125 10.7688 8.5 10 8.5C9.23125 8.5 8.5125 8.3125 7.85938 8H7.6C5.6125 8 4 9.6125 4 11.6V12.5C4 13.3281 4.67188 14 5.5 14H14.5C15.3281 14 16 13.3281 16 12.5V11.6C16 9.6125 14.3875 8 12.4 8ZM5.40938 7.58125C5.04688 7.22188 4.55 7 4 7H2C0.896875 7 0 7.89687 0 9V10C0 10.5531 0.446875 11 1 11H3.05938C3.25625 9.51875 4.15 8.27188 5.40938 7.58125Z'
                      fill='black'
                    />
                  </svg>
                }
              >
                {" "}
                Business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
