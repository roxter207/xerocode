"use client"

import Userinfo from '@/component/Userinfo'
import { useSession } from 'next-auth/react'
import LoginPage from './login/page'

export default function Home() {
  const {data:session} = useSession();

  return(
    
    <Userinfo user={session?.user}/>
  )
}
