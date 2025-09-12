"use client";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export default function PriceSlider() {
  const [value, setValue] = useState([1000]);

  return (
    <div className="w-80 space-y-4">
      <p className="font-medium">Price</p>

      {/* Slider */}
      <Slider.Root className="relative flex items-center select-none touch-none w-full h-5" value={value} onValueChange={setValue} max={20000} step={100} >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-green-500 rounded-full shadow focus:outline-none" />
      </Slider.Root>

      {/* Input */}
      <div className="flex items-center border rounded-full px-3 py-1 w-fit border-gray-300">
        <span className="text-gray-500 mr-1">$</span>
        <input type="number" value={value[0]} onChange={(e) => setValue([+e.target.value])} className="w-20 outline-none" />
      </div>
    </div>
  );
}
