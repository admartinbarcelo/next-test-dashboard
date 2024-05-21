'use client'


import { SimpleWidget } from "./SimpleWidget"
import { HiOutlineHeart } from "react-icons/hi2"
import { useAppSelector } from "@/store";


export const WidgetsGrid = () => {

    const inCart = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title={`${inCart}`}
            subTitle="Total Products"
            label="counter"
            icon={<HiOutlineHeart size={ 70 } className="text-blue-600" />}
            href="/dashboard/counter"
        />
      </div>

  )
}
