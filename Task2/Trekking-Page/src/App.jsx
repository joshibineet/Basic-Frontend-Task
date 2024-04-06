import React from 'react'
import Banner from './components/Banner'
import Explore from './components/Explore'
import Recommended from './components/Recommended'
import Blog from './components/Blog'
import Review from './components/Review'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Banner />
      <Explore />
      <Recommended />
      <Blog />
      <Review />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
