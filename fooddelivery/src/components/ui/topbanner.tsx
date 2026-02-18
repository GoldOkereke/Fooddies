import { MapPin, Truck, Phone, User, PartyPopper, ShoppingCart, ArrowDownToLine, SquareArrowDown, CircleArrowDown, ShoppingBasket } from "lucide-react";

  const TopBanner: React.FC = () => {
    return (
    <div className='bg-muted border-b rounded-t-none bg-gray-300 gap-1 top-0 mx-5 mb-5 items-center justify-between rounded-xl flex flex-row'>
        <div className='flex flex-row items-center py-5 pl-5'>
          <PartyPopper />
          <h1 className=' font-semibold'>
            Get 20% off on your first order!, 
            <a className="text-orange-600 underline" href="#">PROMO:5284</a>
            </h1>
        </div>
        <div className='flex flex-row items-center py-5'>
            <MapPin />
          <h1 className='font-semibold'>
            Ahmadu Bello Way, Victoria Island, Lagos
            <a className="text-orange-600 underline" href="#">Change Location</a>
          </h1>
        </div>
        <div className="bg-green-700 ml-5 divide-x-2 rounded-t-none rounded-xl flex flex-row h-full bg-cover">
          <div className="px-5 py-5 text-white font-semibold font-xl">
            <ShoppingBasket />
          </div>
          <div className="px-5 py-5 text-white">
            23 items
          </div>
          <div className="px-5 py-5 text-white">
            $150.00
          </div>
          <div className="px-5 py-5 text-white">
            <CircleArrowDown />
          </div>
        </div>
      </div>
    )
  }
  
    export default TopBanner