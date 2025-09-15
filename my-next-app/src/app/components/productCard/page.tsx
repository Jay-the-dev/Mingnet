import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
  image: string;
}
const ProductCard = ({ image }: ProductCardProps) => {
  return (
    <div>
      <div className="rounded-lg shadow bg-white">
        <h4 className='pl-2.5 pt-2.5'><span className='text-green-950 text-sm font-bold'>-25%</span></h4>
        <Image src={image} alt="Product Image" className='object-cover' width={200} height={100} />
        <div className="productDetails bg-gray-100 p-2 text-center">
          <h5 className='font-semibold text-sm mb-1'>Lexus RX 350 AWD 2024</h5>
          <p><span className='text-gray-400 line-through mb-2'>$490,000</span></p>
          <p className="text-green-950 font-bold">$200,000</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard