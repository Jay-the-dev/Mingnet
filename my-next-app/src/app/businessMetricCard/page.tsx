import React from 'react'

type CardProps = {
  title: string;
  value: number;
  useComma?: boolean;
  prefix?:string;
};

const businessMetricCard = ({title , value , useComma = true , prefix = ""}: CardProps) => {
  return (
    <div>
        <h3 className="text-center text-gray-400 font-bold text-[14px] mb-0 uppercase">{title}</h3>
        <div className="card rounded-md shadow-md p-6">
            <span className="figure text-gray-700 mb-10 text-[14px]">
                N3,460
            </span>
            <h1 className='text-2xl font-bold text-gray-900 mt-6'>{prefix} {useComma ? value.toLocaleString() : value}</h1>
            <span className='icon'>
                {/* add dollar or money icon later */}
            </span>
        </div>
    </div>
  )
}

export default businessMetricCard