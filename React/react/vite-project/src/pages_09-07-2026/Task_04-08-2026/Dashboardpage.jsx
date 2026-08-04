import React from 'react'
import {  Route } from 'react-router-dom'
import Settings from '../../components_09-07-2026/Task_04-08-2026/Nested_Routing/Settings'
import Profile from '../../components_09-07-2026/Task_04-08-2026/Nested_Routing/Profile'
import DashBoard from '../../components_09-07-2026/Task_04-08-2026/Nested_Routing/DashBoard'

const Dashboardpage = () => {
  return (
    <div>
       
      <Route path="/board" element={<DashBoard />}>

  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
    </div>

  )
}

export default Dashboardpage