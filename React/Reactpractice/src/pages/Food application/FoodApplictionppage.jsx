import React from 'react'
import '../../Components/practice_05-10-2026/Foodapplication/style.css'
import Header from '../../Components/practice_05-10-2026/Foodapplication/header'
import FoodItem from '../../Components/practice_05-10-2026/Foodapplication/FoodItem'
import FoodList from '../../Components/practice_05-10-2026/Foodapplication/FoodList'
import Message from '../../Components/practice_05-10-2026/Foodapplication/Message'
import Footer from '../../Components/practice_05-10-2026/Foodapplication/Footer'

const FoodApplictionppage = () => {
  return (
    <div>
        <Header/>
        <FoodList/>
        <Message/>
        <Footer/>
    </div>
  )
}

export default FoodApplictionppage