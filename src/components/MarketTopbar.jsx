import React from 'react'

const MarketTopbar = () => {
  return (
    <div className="flex flex-row my-4 justify-evenly items-center">
    <div className="w-1/6 flex flex-row justify-between items-center">
      <h1 className="text-left">Name</h1>
      <img src='' alt="" className="h-8" />
    </div>
    <h1 className="w-1/4 text-right">Price</h1>
    <h1 className="w-1/4 text-right">Daily % change</h1>
  </div>
  )
}

export default MarketTopbar