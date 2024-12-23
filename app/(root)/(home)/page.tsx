'use client'

import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';
import React from 'react'

const Page = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeZone: 'Asia/Kolkata' })).format(now);

  
  const { upcomingCalls } = useGetCalls();
  const call = upcomingCalls.at(-1);
  let timeMeet, dateMeet;
  if(call){
    const startDate = call['state'].startsAt;

    timeMeet = call['state'].startsAt?.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });

    dateMeet = new Intl.DateTimeFormat('en-IN', { 
      dateStyle: 'full' 
    }).format(startDate);
  }

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-11">
          <h2 className="glassmorphism max-w-[273px] rounded-lg py-2 text-center text-base font-normal">
            Upcoming meeting at {timeMeet} on {dateMeet}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Page
