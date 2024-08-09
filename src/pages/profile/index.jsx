import { useAppStore } from '@/store'
import React from 'react'


function Profile() {
  const {userInfo}=useAppStore()
  return (
    <div>
      <h1>Email: {userInfo?.email}</h1>
    </div>
  )
}

export default Profile