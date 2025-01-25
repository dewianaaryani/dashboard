import { PersonStandingIcon } from 'lucide-react'
import React from 'react'

export default function MenuTitle() {
  return (
    <h5 className='flex items-center'>
        <PersonStandingIcon size={30} className='text-primary mr-2' />Dashboard App
    </h5>
  )
}
