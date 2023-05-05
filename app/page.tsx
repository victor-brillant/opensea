"use client"; // this is a client component
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  
  useEffect(() => {
    fetch('https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset='+page+'&limit=50', options)
      .then(response => response.json())
      .then(data => setNfts(data.assets)
      )
      .catch(error => console.error(error));
  }, []);

  function nextPage() {
    setPage(page+1)
    watchSearch('');
  }
  function prevPage() {
    if(page>0){
      setPage(page-1)
      watchSearch('');
    }
  }

  function watchSearch(value){
    fetch('https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset='+page+'&limit=50&collection='+value, options)
      .then(response => response.json())
      .then(data => 
        {
          if (data.assets && data.assets.length>0) {
            console.log('====================================');
            console.log('if');
            console.log('====================================');
            setNfts(data.assets)
          } else {
            console.log('====================================');
            console.log('else');
            console.log('====================================');
            const vide = [];
            setNfts(vide)
          }
        }
      )
      .catch(error => console.error(error));
  };
  return (
    <main className="flex-col items-center justify-between min-h-screen pt-24 bg-white">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">20 Mint Typewriter</h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.</p>
                <div className="flex grid justify-center grid-cols-2">
                <div className='flex justify-center rounded-lg shadow search-block'>
                    <input type="text" placeholder='Search' className='w-full px-3 py-2 rounded-md rounded-r-none outline-none bg-gray-50 dark:bg-gray-800 dark:border-gray-700' onChange={(e) => watchSearch(e.target.value)} />
                    <a href="#" className="text-white text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-l-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 block ">Search
                    </a>
                  </div>
                </div>
            </div> 
            <div className="grid gap-4 mb-6 md:grid-cols-5">
            {nfts.length===0?
              <>
                {[0,1,2,3,5,6,7,8,9,10].map
                (
                  (item) => (
                    <div key={item} className="items-center rounded-lg shadow item-nft item-nps bg-gray-50 dark:bg-gray-800 dark:border-gray-700 movie--isloading">
                      <div className='w-full'>
                        <a className='lien-img loading-image' href="#">
                        </a>
                        <div className="p-5 block-details">
                        <div className="loading-content">
                          <div className="loading-text-container">
                            <div className="loading-main-text"></div>
                            <div className="loading-sub-text"></div>
                          </div>
                        </div>
                        <div className="mt-3 loading-content">
                          <div className="loading-text-container">
                            <div className="loading-main-text"></div>
                            <div className="loading-sub-text"></div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className='flex w-full align-center'>
                        <a href="#" className="text-white bouton-buy text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-t-none rounded-r-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-full block left-btn">...
                        </a>
                        <a href="#" className="text-white bouton-buy text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-t-none rounded-l-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                          <img src="/chopping_cart.svg" alt="" />
                        </a>
                      </div>
                    </div>  
                  )
                )
              }
              </>
              :
              <>
              {nfts.map
                (
                  (item) => (
                    <div key={item} className="items-center rounded-lg shadow item-nft item-nps bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <div className='w-full'>
                        <a className='lien-img' href="#">
                            <img  className="w-full rounded-lg rounded-b-none round" src={item.collection.image_url?item.collection.image_url:"https://i.seadn.io/gae/t-bM7LBgt74MRll4skaW3DBwmLK1Z-okq5kipkeTCa1v5lBErDsORn86nHhfZPdC3eTR6uqYQ1IEah3QfsKSnuzlu5y-8dKLzug_?auto=format&w=512"} alt={item.collection?.name}/>
                        </a>
                        <div className="p-5 block-details">
                            <p className="font-bold tracking-tight text-gray-900 dark:text-white limite1-lign">
                            {item.collection?.name}
                            </p>
                            <p className="mt-3 font-bold tracking-tight text-gray-900 dark:text-white limite2-lign">
                            {item.collection?.description}
                            </p>
                        </div>
                      </div>
                      <div className='flex w-full align-center'>
                        <a href="#" className="text-white bouton-buy text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-t-none rounded-r-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-full block left-btn">Buy now
                        </a>
                        <a href="#" className="text-white bouton-buy text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg rounded-t-none rounded-l-none text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                          <img src="/chopping_cart.svg" alt="" />
                        </a>
                      </div>
                    </div>  
                  )
                )
              }
              {/* <button onClick={prevPage()}>Preview</button>
              <button onClick={nextPage()}>Next</button> */}
              </>
            }
            </div>  
        </div>
      </section>
    </main>
  )
}
