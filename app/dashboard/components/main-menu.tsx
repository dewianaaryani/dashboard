import React from 'react'
import MenuTitle from './menu-title'
import MenuItem from './menu-item'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { LightDarkToggle } from '@/components/ui/light-dark-toggle'
import { LayoutDashboardIcon } from 'lucide-react'

export default function MainMenu() {
  return (
    <nav className='bg-muted overflow-auto p-4 flex flex-col'>
        <header className='border-b dark:border-b-black border-b-zinc-300 pb-4'>
            <MenuTitle />
        </header>
        <ul className='py-4 grow'>
            <div className='mb-2'>
            <span className='text-muted-foreground text-sm mb-10'>Menu</span>
            </div>
            <MenuItem href='/dashboard'><LayoutDashboardIcon /> My Dashboard</MenuItem>
            <MenuItem href='/dashboard/teams'>Teams</MenuItem>
            <MenuItem href='/dashboard/employees'>Employees</MenuItem>
            <MenuItem href='/dashboard/account'>Account</MenuItem>
            <MenuItem href='/dashboard/settings'>Settings</MenuItem>  
        </ul>
        <footer className='flex gap-2 items-center'>
            <Avatar>
                <AvatarFallback className='bg-pink-300 dark:bg-pink-500'>U</AvatarFallback>
            </Avatar>
            <Link href="/" className='hover:underline'>Logout</Link>
            <LightDarkToggle className='ml-auto' />
        </footer>
    </nav>
  )
}
