import React from 'react'
import Header from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/Theme/Header'
import Users from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/hookApicalls/Users'
import Posts from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/hookApicalls/Posts'
import RegistrationForm from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/FormHandling/RegistrationForm'
import ProfileForm from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/FormHandling/ProfileForm'
import WindowInfo from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/Resize/WindowInfo'
import ScreenDetails from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/Resize/ScreenDetails'
import Footer from '../../../components_09-07-2026/Task_28-07-2026/hooks/Customhook/Theme/Footer'

const CoustomHookPage = () => {
  return (
    <div>
        <Header/>
        <Users/>
        <Posts/>
        <RegistrationForm/>
        <ProfileForm/>
        <WindowInfo/>
        <ScreenDetails/>
        <Footer/>
    </div>
  )
}

export default CoustomHookPage