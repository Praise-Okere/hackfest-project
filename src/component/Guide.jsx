import { useSidebar } from "../hooks/useSidebar";
import DashboardHeader from "./DashboardHeader";

import { Play } from "lucide-react";

const Guide = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>

      <main>
        <div className=' px-4 py-8'>
          {/* Header Section */}
          <div className='space-y-4 mb-12'>
            <h1 className='text-4xl font-medium'>Guides and Demos</h1>
            <p className='text-sm text-gray-600'>
              In the guides and demos section, FAQs are usually responded to
              here and common errors are addressed in this section. Feel free to
              drop yours!
            </p>
            <div className='flex flex-wrap gap-4'>
              <a
                href='/complaint'
                className='inline-flex items-center px-4 py-2 gap-4 border border-black/30 rounded-full hover:bg-blue-200 transition-colors'
              >
                File a complaint
                <svg
                  width='15'
                  height='13'
                  viewBox='0 0 15 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 6H12.25L7 0.75L7.66 0L14.16 6.5L7.66 13L7 12.25L12.25 7H0V6Z'
                    fill='black'
                  />
                </svg>
              </a>
              <a
                href='/error'
                className='inline-flex items-center px-4 py-2 gap-4 bg-white border border-black/30 text-gray-700 rounded-full hover:bg-gray-100 transition-colors'
              >
                Submit an error
                <svg
                  width='15'
                  height='13'
                  viewBox='0 0 15 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 6H12.25L7 0.75L7.66 0L14.16 6.5L7.66 13L7 12.25L12.25 7H0V6Z'
                    fill='black'
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* FAQs Section */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-medium'>FAQs and Basic Guides</h2>

            <div className='space-y-6'>
              {/* Transfer FAQ */}
              <div>
                <h3 className='text-2xl mb-3'>
                  How do I make transfers on Suifi?
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  I'm trying to make a transfer on Suifi and I do not know
                  exactly which buttons to press and I do not want to make a
                  mistake. What do I do?
                </p>
                <button className='inline-flex items-center px-4 py-2 gap-4 bg-white border border-black/30 text-gray-700 rounded-full hover:bg-gray-100 transition-colors'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9 18C10.1819 18 11.3522 17.7672 12.4442 17.3149C13.5361 16.8626 14.5282 16.1997 15.364 15.364C16.1997 14.5282 16.8626 13.5361 17.3149 12.4442C17.7672 11.3522 18 10.1819 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 -1.76116e-08 9 0C6.61305 3.55683e-08 4.32387 0.948211 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM7.783 4.99L13.427 8.126C13.5828 8.21263 13.7126 8.33934 13.803 8.49301C13.8934 8.64668 13.9411 8.82172 13.9411 9C13.9411 9.17828 13.8934 9.35332 13.803 9.50699C13.7126 9.66066 13.5828 9.78737 13.427 9.874L7.783 13.01C7.60025 13.1116 7.39413 13.1636 7.18506 13.161C6.97599 13.1584 6.77123 13.1013 6.59107 12.9952C6.4109 12.8891 6.26159 12.7377 6.15791 12.5562C6.05424 12.3746 5.9998 12.1691 6 11.96V6.04C5.9998 5.83092 6.05424 5.62541 6.15791 5.44384C6.26159 5.26227 6.4109 5.11094 6.59107 5.00484C6.77123 4.89874 6.97599 4.84156 7.18506 4.83895C7.39413 4.83635 7.60025 4.88842 7.783 4.99Z'
                      fill='black'
                    />
                  </svg>
                  Play Video Guide
                </button>
              </div>

              {/* Swap FAQ */}
              <div>
                <h3 className='text-2xl mb-3'>How do I make swaps on Suifi?</h3>
                <p className='text-gray-600 text-sm mb-4'>
                  I want to swap my assets on Suifi, but I'm having some
                  complications. What do I do?
                </p>
                <button className='inline-flex items-center px-4 py-2 gap-4 bg-white border border-black/30 text-gray-700 rounded-full hover:bg-gray-100 transition-colors'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9 18C10.1819 18 11.3522 17.7672 12.4442 17.3149C13.5361 16.8626 14.5282 16.1997 15.364 15.364C16.1997 14.5282 16.8626 13.5361 17.3149 12.4442C17.7672 11.3522 18 10.1819 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 -1.76116e-08 9 0C6.61305 3.55683e-08 4.32387 0.948211 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM7.783 4.99L13.427 8.126C13.5828 8.21263 13.7126 8.33934 13.803 8.49301C13.8934 8.64668 13.9411 8.82172 13.9411 9C13.9411 9.17828 13.8934 9.35332 13.803 9.50699C13.7126 9.66066 13.5828 9.78737 13.427 9.874L7.783 13.01C7.60025 13.1116 7.39413 13.1636 7.18506 13.161C6.97599 13.1584 6.77123 13.1013 6.59107 12.9952C6.4109 12.8891 6.26159 12.7377 6.15791 12.5562C6.05424 12.3746 5.9998 12.1691 6 11.96V6.04C5.9998 5.83092 6.05424 5.62541 6.15791 5.44384C6.26159 5.26227 6.4109 5.11094 6.59107 5.00484C6.77123 4.89874 6.97599 4.84156 7.18506 4.83895C7.39413 4.83635 7.60025 4.88842 7.783 4.99Z'
                      fill='black'
                    />
                  </svg>
                  Play Video Guide
                </button>
              </div>

              {/* Scam FAQ */}
              <div>
                <h3 className='text-2xl mb-3'>Is Suifi a scam?</h3>
                <p className='text-gray-600 text-sm mb-4'>
                  I do not want to lose my money because I have heard people
                  lose money on online payment platforms. What is the guarantee
                  that I won't lose my money?
                </p>
                <div className='flex flex-wrap gap-4'>
                  <button className='inline-flex items-center px-4 py-2 gap-4 bg-white border border-black/30 text-gray-700 rounded-full hover:bg-gray-100 transition-colors'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9 18C10.1819 18 11.3522 17.7672 12.4442 17.3149C13.5361 16.8626 14.5282 16.1997 15.364 15.364C16.1997 14.5282 16.8626 13.5361 17.3149 12.4442C17.7672 11.3522 18 10.1819 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 -1.76116e-08 9 0C6.61305 3.55683e-08 4.32387 0.948211 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM7.783 4.99L13.427 8.126C13.5828 8.21263 13.7126 8.33934 13.803 8.49301C13.8934 8.64668 13.9411 8.82172 13.9411 9C13.9411 9.17828 13.8934 9.35332 13.803 9.50699C13.7126 9.66066 13.5828 9.78737 13.427 9.874L7.783 13.01C7.60025 13.1116 7.39413 13.1636 7.18506 13.161C6.97599 13.1584 6.77123 13.1013 6.59107 12.9952C6.4109 12.8891 6.26159 12.7377 6.15791 12.5562C6.05424 12.3746 5.9998 12.1691 6 11.96V6.04C5.9998 5.83092 6.05424 5.62541 6.15791 5.44384C6.26159 5.26227 6.4109 5.11094 6.59107 5.00484C6.77123 4.89874 6.97599 4.84156 7.18506 4.83895C7.39413 4.83635 7.60025 4.88842 7.783 4.99Z'
                        fill='black'
                      />
                    </svg>
                    Play Video Guide
                  </button>
                  <a
                    href='#'
                    className='inline-flex items-center px-4 py-2 gap-4 border border-black/30 rounded-full hover:bg-blue-200 transition-colors'
                  >
                    View responses (5)
                    <svg
                      width='15'
                      height='13'
                      viewBox='0 0 15 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 6H12.25L7 0.75L7.66 0L14.16 6.5L7.66 13L7 12.25L12.25 7H0V6Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guide;
