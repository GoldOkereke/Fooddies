// comments explaining evrything that needs to happen
import React, { useState } from 'react';
import { CircleUserRound, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog,
   DialogTrigger, 
   DialogContent, 
   DialogTitle, 
   DialogDescription, 
   DialogClose } from './ui/dialog';
import { NavLink } from 'react-router-dom';

//typescript
type NavItem = {
  label: string;
  href: string;
};
const navItems: NavItem[]=[
  {label: "Home", href:"/"},
  {label: "Browse Menu", href:"/menu"},
  {label: "Special offers", href:"/offers"},
  {label: "Restaurants", href:"/restaurants"},
  {label: "Track Order", href:"/track-order"},
  {label: "Login/Signup", href:"/login"},
];


//navbar component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  return(
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className='text-2xl font-bold'>
        Fooddies
      </div>

      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={`text-gray-700 font-semibold flex items-center justify-center px-6 py-1 hover:text-blue-500 ${activeItem === item.label ? 'bg-orange-600 text-white rounded-full' : ''}`}
          >
            {item.label === "Login/Signup" ? (
              <div className="flex font-semibold items-center gap-2 bg-black text-white rounded-full px-6 py-3">
                <CircleUserRound className='bg-orange-500 rounded-full'/>
                {item.label}
              </div>
            ) : (
              item.label
            )}
          </a>
        ))}
      </div>

      <div className='md:hidden flex space-x-6'>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant = 'outline' size='icon'>
              <Menu/>
            </Button>
          </DialogTrigger>

          <DialogContent className='sm:max-w-sm'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='block px-4 py-2 text-gray-600 hover:bg-gray-100'
                onClick={()=> setIsOpen(false)}
              >
                {item.label}
              </a>
            ))} 
            </DialogContent>
        </Dialog>
      </div>
    </nav>
  )
}

export default Navbar;