import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Include",
  description: "A zoom clone by KnowMe!!",
  icons:{
    icon: '/icons/logoInc.png'
  }
};

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
