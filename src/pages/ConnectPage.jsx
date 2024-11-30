import { Link } from "react-router-dom";
import { useZK } from '../auth/getzkJWT';

const ConnectPage = () => {
  const { loginWithZK } = useZK()

  return (
    <div className='min-h-screen flex items-center justify-center '>
      {/* <div className='absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[radial-gradient(circle, hsl(201, 70%, 88%) 0%, hsla(0, 0%, 100%, 0) 70%, rgb(233, 246, 254) 100%)]'></div> */}
      {/* <div className='absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsl(201,70%,88%)_0%,hsla(0,0%,100%,0)_70%,rgb(233,246,254)_100%)]'></div> */}

      <div className='absolute top-0 -z-10 h-full w-full overflow-hidden '>
        <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[30%] translate-y-[80%] rounded-full bg-[rgba(33,144,195,0.5)] opacity-50 blur-[80px]'></div>
      </div>
      <div className='absolute top-0 -z-10 h-full w-full overflow-hidden '>
        <div className='absolute top-auto right-auto left-0 bottom-0 h-[500px] w-[500px] -translate-x-[50%] -translate-y-[70%] rounded-full bg-[rgba(33,144,195,0.5)] opacity-50 blur-[80px]'></div>
      </div>

      <div className='w-full max-w-5xl flex justify-between max-lg:justify-center items-center p-6'>
        {/* Left Content */}
        <div className='bg-white w-[400px] h-[500px] rounded-xl max-lg:hidden border border-black/30'></div>

        {/* Right Content */}
        <div className='max-w-md text-center'>
          <h2 className='text-2xl font-bold mb-4'>Create an account</h2>
          <p className='text-gray-500 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div className='flex flex-col items-center gap-4'>
            <button onClick={loginWithZK} className='flex items-center justify-between gap-12 w-full max-w-xs bg-[#A7D5EB] rounded-2xl py-3 px-4 text-gray-700'>
              <svg
                width='25'
                height='26'
                viewBox='0 0 25 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.58438 0.699288C11.373 -0.258048 14.4053 -0.231717 17.1768 0.7739C18.6989 1.3437 20.0935 2.20854 21.2805 3.31877C20.8772 3.75031 20.4517 4.15361 20.0403 4.57305C19.2579 5.35413 18.4762 6.13251 17.6951 6.9082C16.9164 6.16357 15.9745 5.61115 14.9445 5.29497C13.6265 4.89699 12.2243 4.86974 10.8917 5.21621C9.55921 5.56268 8.34786 6.26949 7.39059 7.25908C6.555 8.10912 5.9222 9.13691 5.53941 10.2657L1.35913 7.02919C2.85542 4.06199 5.44614 1.7923 8.58438 0.699288Z'
                  fill='#E33629'
                />
                <path
                  d='M0.250045 10.2355C0.47473 9.12197 0.847753 8.04359 1.35914 7.02922L5.53942 10.2738C4.99256 11.8842 4.99256 13.6301 5.53942 15.2406C4.14666 16.316 2.75324 17.3969 1.35914 18.4831C0.0789429 15.9349 -0.311495 13.0314 0.250045 10.2355Z'
                  fill='#F8BD00'
                />
                <path
                  d='M12.7548 10.3665H24.7572C25.1678 12.6189 25.0567 14.9353 24.4326 17.1381C23.8583 19.1636 22.7429 20.9944 21.2061 22.4335C19.857 21.3809 18.5019 20.3363 17.1529 19.2837C17.8217 18.8325 18.3926 18.251 18.8313 17.5739C19.2699 16.8968 19.5674 16.1382 19.7058 15.3434H12.7548C12.7528 13.6858 12.7548 12.0262 12.7548 10.3665Z'
                  fill='#587DBD'
                />
                <path
                  d='M1.35718 18.4831C2.75128 17.4076 4.1447 16.3267 5.53746 15.2405C6.07629 16.8219 7.10109 18.1925 8.46547 19.1566C9.31646 19.7581 10.2834 20.1756 11.3047 20.3827C12.3111 20.5698 13.3434 20.5698 14.3497 20.3827C15.3531 20.2128 16.31 19.835 17.1588 19.2736C18.5078 20.3262 19.8629 21.3708 21.212 22.4234C19.7357 23.7659 17.936 24.7018 15.9892 25.1397C13.8404 25.6448 11.601 25.6206 9.46365 25.0691C7.77319 24.6177 6.19419 23.8221 4.82562 22.7319C3.37706 21.5819 2.19395 20.1326 1.35718 18.4831Z'
                  fill='#319F43'
                />
              </svg>
              Continue with Google
              <span></span>
            </button>
            <span className='text-gray-400'>OR</span>
            <Link
              to={"/dashboard/home"}
              className='flex items-center justify-between w-full max-w-xs bg-[#A7D5EB] rounded-2xl py-3 px-4 text-gray-700'
            >
              <button className='flex items-center justify-between w-full'>
                <svg
                  width='25'
                  height='33'
                  viewBox='0 0 25 33'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20.0003 13.64C21.3571 15.3829 22.0915 17.5297 22.0865 19.7383C22.0865 22.0747 21.2788 24.2181 19.9414 25.9119L19.827 26.0558L19.7976 25.8628C19.7698 25.7051 19.7382 25.5481 19.7027 25.392C19.0291 22.382 16.8547 19.7956 13.2594 17.6996C10.8348 16.2935 9.44184 14.603 9.07561 12.6803C8.8745 11.4819 8.97336 10.2523 9.36336 9.1014C9.63666 8.20184 10.0631 7.35616 10.6239 6.60157L12.0283 4.85218C12.085 4.78188 12.1567 4.72517 12.2382 4.68621C12.3197 4.64725 12.4089 4.62703 12.4992 4.62703C12.5895 4.62703 12.6787 4.64725 12.7601 4.68621C12.8416 4.72517 12.9133 4.78188 12.97 4.85218L20.0003 13.64ZM22.2107 11.8906L12.8458 0.168071C12.8045 0.115685 12.7518 0.0733445 12.6918 0.044234C12.6318 0.0151235 12.5659 0 12.4992 0C12.4325 0 12.3666 0.0151235 12.3066 0.044234C12.2465 0.0733445 12.1939 0.115685 12.1526 0.168071L2.78762 11.9004L2.75983 11.9282C0.965034 14.2084 -0.00739896 17.0278 4.2392e-05 19.9296C-0.00159255 26.9779 5.59482 32.7002 12.4992 32.7002C19.4035 32.7002 25 26.9779 25 19.9296C25.0074 17.0278 24.035 14.2084 22.2402 11.9282L22.2107 11.8906ZM5.02749 13.6024L5.86458 12.5544L5.89238 12.7457L5.95941 13.2084C6.50875 16.1218 8.44125 18.5448 11.6817 20.4201C14.4987 22.0649 16.1337 23.95 16.6062 26.0165C16.7974 26.883 16.8351 27.7283 16.75 28.4689V28.518L16.7108 28.536C15.4028 29.1899 13.9608 29.5284 12.4992 29.5267C7.21014 29.5267 2.91188 25.1418 2.91188 19.7367C2.91188 17.42 3.69992 15.2848 5.02749 13.6024Z'
                    fill='#4BA2FF'
                  />
                </svg>
                <p> Connect Sui Wallet</p>
                <span></span>
              </button>
            </Link>
          </div>
          <a
            href='#'
            className='text-sm text-gray-500 mt-4 block hover:underline'
          >
            Need a guide? →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
