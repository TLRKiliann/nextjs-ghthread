import React from 'react'
import { ThemeToggle } from '../../ThemeToggle'
import LoginButton from './auth/LoginButton'
import { getAuthSession } from '@/lib/auth';

export const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className='border-b border-b-accent fixed top-0'>
        <div className='container flex items-center py-2 max-w-lg m-auto gap-1'>
            <h2 className='text-2xl font-bold mr-auto'>
                Git-Thread
            </h2>
            {session?.user ? <p>user</p> : <LoginButton />}
            <ThemeToggle />
        </div>
    </header>
  )
}
