import './App.css'
import NavBar from './nav'
import React from 'react'
import Topfooter from './top-footer'
import Headerbody from './header-body'
import Trusted from './trusted'
import Hero from './hero'
import Footer from './footer'
import './media.css'
import AvailablePuppies from './availablePuppies'
import Contact from './Contact'
import Promise from './promise'
import About from './about'
import CustomerReview from './CustomerReviews'
import PuppyGiveBack from './Puppygives'
import HealthCheck from './healthCheck'
import BreederStandards from './breederStandards'
import PuppyTravel from './puppytravel'
import ResourceCenter from './ResourceCenter'
import ResourceTravel from './travel'
import NotFound from './notfound'
import DogTraining from './dogtraining'
import travelCard from './travel-cards'
import trainingCard from './training-cards'
import groomingCard from './groomingCard'
import TrainingAggression1 from './training-article-aggression1'
import Grooming from './grooming'
import educationCard from './educationCard'
import Education from './education'
import nutritionCard from './nutritionCard'
import Nutrition from './nutrition'
import Exercise from './exercise'
import Search from './search'
import exerciseCard from './exerciseCard'
import PuppySale from './puppy-sale'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TrainingAggression2 from './training-article-aggression2'
import MenuBar from './menu'
import Puppyslider from './puppyslider'
import puppyCards from './puppy-cards'

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/available-puppies' element={<AvailablePuppies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/promise' element={<Promise />} />
        <Route path='/customer-reviews' element={<CustomerReview />} />
        <Route path='/puppy-gives' element={<PuppyGiveBack />} />
        <Route path='/health-check' element={<HealthCheck />} />
        <Route path='/puppy-travel' element={<PuppyTravel />} />
        <Route path='/breeder-standards' element={<BreederStandards />} />
        <Route path='/resource-center' element={<ResourceCenter />} />
        <Route path='/resource-center/travel' element={<ResourceTravel />} />
        {travelCard.map((item) =>(
          <Route key = {item.id} path = {`/resource-center/travel/${item.url}`} element = {<item.Component />}/>
        ))}
        {trainingCard.map((item) =>(
          <Route key = {item.id} path = {`/resource-center/training/${item.url}`} element = {<item.Component />}/>
        ))}
        <Route path='/resource-center/training' element={<DogTraining />} />
        <Route path = "/resource-center/training/aggression-in-dog-part-2" element = {<TrainingAggression1 />} />
        <Route path = "/resource-center/training/aggression-in-dog-part-3" element = {<TrainingAggression2 />} />
        {groomingCard.map((item) =>(
          <Route key = {item.id} path = {`/resource-center/grooming/${item.url}`} element = {<item.Component />} />
        ))}
        <Route path = "/resource-center/nutrition" element = {<Nutrition />} />
        {nutritionCard.map((item) => (
          <Route key = {item.id} path = {`/resource-center/nutrition/${item.url}`} element = {<item.Component />} />
        ))}
        <Route path = "/resource-center/education" element = {<Education />} />
        {educationCard.map((item) => (
          <Route key = {item.id} path = {`/resource-center/education/${item.url}`} element = {<item.Component />} />
        ))}
        <Route path = "/resource-center/grooming" element = {<Grooming />} />
        <Route path = "/resource-center/exercise" element = {<Exercise />} />
        {exerciseCard.map((item) => (
          <Route key = {item.id} path = {`/resource-center/exercise/${item.url}`} element = {<item.Component />} />
        ))}
        <Route path="/puppies-for-sale/:id" element = {<PuppySale puppies={puppyCards}/>} />
        <Route path="/puppies-for-sale/:id" element = {<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

function LandingPage(){
  const [menuOpen, setMenuOpen] = React.useState(null)
  function handleMenuOpen() {
    setMenuOpen(true);
  }
  function handleMenuClose() {
    setMenuOpen(false)
  }
  return(
    <div className = "toggle">
      {menuOpen ? (<MenuBar handleMenuClose={handleMenuClose} />):
      (
      <div>
        <Topfooter />
        <NavBar handleMenuOpen = {handleMenuOpen} />
        <header>
          <Headerbody />
        </header>
        <main>
          <Trusted />
          <Hero />
        </main>
        <Footer />
      </div>
      )}
    </div>
  )
}