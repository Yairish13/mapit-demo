import FirstPart from '@components/FirstPart/FirstPart'
import { store } from '@store';
import React from 'react'

const page = async() => {
  const req = await fetch('http://localhost:3000/api/company/1');
  const data = await req.json();
  return (
    <FirstPart members={data} />
  )
}

export default page