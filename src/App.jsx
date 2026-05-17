import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <>
      {/* Link font awesome  */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      </link>


      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-fixed bg-no-repeat'
      style={{backgroundImage:`url('https://imgs.search.brave.com/RWE20qq27kO5Wv-eJxD8tCA8kDhjVS64Uyz0Dav8GFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE4/NTA4NjMwL3Bob3Rv/L2FtZXJpY2FuLWRv/bGxhci1zeW1ib2wt/c3RhbmRpbmctb24t/d29vZC1zdXJmYWNl/LWluLWZyb250LW9m/LWEtZ3JhcGguanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdD/WXhGUVNseTVPdElk/T1hZSWNnZVE4MnZV/T1lUNGtDRWQtUlhV/eHV0Q0U9')` 
      }}>
        
        <div className='flex flex-col items-center'>
           <div className='w-full max-w-md text-center bg-orange-400 py-3 rounded-lg font-bold text-2xl my-25 mt-3'>
              Real Time Currency Convertor
            </div>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-orange-300'>
            <form
            onSubmit={(e)=>{e.preventDefault(); convert(); 
            }}>
              <div className='w-full mb-1'>
                <InputBox label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount)=>setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-blue-600 text-black px-2 py-0.5'
                onClick={swap}>
                   <i className="fa fa-exchange rotate-90 bg-blue-600 hover:rotate-270 transition-transform duration-500 hover:cursor-pointer"></i>
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                  />
              </div>
              <button type='submit' 
              className='w-full bg-green-500 text-black font-bold px-4 py-3 rounded-lg hover:cursor-pointer'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
              <p className="font-bold bg-blue-300 text-center mt-3">
                1 {from.toUpperCase()} = {currencyInfo[to]} {to.toUpperCase()}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


