'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full p-0 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="p-2">
        <a href="/">
          <div className="flex items-center w-40 h-10">
            <IconLogo className={cn('w-3 h-3')} />
            <span className="sr-only">clearchoice</span>
          </div>
        </a>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header
