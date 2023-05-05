import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex-col items-center justify-between min-h-screen pt-24 bg-white">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">20 Mint Typewriter</h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.</p>
                <div className="flex grid justify-center grid-cols-2">
                <div className='flex justify-center rounded-lg shadow search-block'>
                    <input type="text" placeholder='Search' className='w-full px-3 py-2 rounded-md rounded-r-none outline-none bg-gray-50 dark:bg-gray-800 dark:border-gray-700' />
                    <a href="#" className="text-white text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-l-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 block ">Search
                    </a>
                  </div>
                </div>
            </div> 
            <div className="grid gap-4 mb-6 md:grid-cols-5">
            {[0,4,2,3,4,5,6,6,6,6].map(_=>
              <div className="items-center rounded-lg shadow item-nps bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img  className="w-full rounded-lg rounded-b-none round" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
                </a>
                <div className="p-5 block-details">
                    <p className="font-bold tracking-tight text-gray-900 dark:text-white">
                      20 Mint Typewriter #730
                    </p>
                    <p className="mt-3 font-bold tracking-tight text-gray-900 dark:text-white">
                      0,055 ETH
                    </p>
                </div>
                <div className='flex align-center'>
                  <a href="#" className="text-white bouton-buy text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-t-none rounded-r-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-full block left-btn">Buy now
                  </a>
                  <a href="#" className="text-white bouton-buy text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-t-none rounded-l-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <img src="/chopping_cart.svg" alt="" />
                  </a>
                </div>
            </div>  
            )
            }
            </div>  
        </div>
      </section>
    </main>
  )
}
