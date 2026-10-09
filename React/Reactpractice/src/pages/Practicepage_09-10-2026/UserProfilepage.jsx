import React from 'react'
import UserProvider from '../../Components/Practice_09-10-2026/UserProfile/UserProvider'
import UserProfile from '../../Components/Practice_09-10-2026/UserProfile/UserProfile'
import UserRole from '../../Components/Practice_09-10-2026/UserProfile/UserRole'

const UserProfilepage = () => {
  return (
    <div>
        <UserProvider>
            <h2>My profile</h2>
            <UserProfile/>
            <UserRole/>
        </UserProvider>
    </div>
  )
}

export default UserProfilepage