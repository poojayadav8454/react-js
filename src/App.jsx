
import './card.css'
import CardComponent from './card'
import TechCrunchHeadlines from './news-api'
import Routspth from './Route-page'
import Novbar from './navbar'
import Timer from './firstUseEffect'



function App() {

  return (
    <>
      {/* < Novbar /> */}
      < Routspth />
      < TechCrunchHeadlines />
      <h1 className='heading-main'> person Details</h1>
      <div className="maindiv">
        <CardComponent name="Rahul Verma"
          job="Frontend Developer"
          address="B-22, Sector 15, Noida, UP 201301"
          email="rahul.verma@example.com" />
        <CardComponent name="divya"
          job="backend Developer"
          address="B-22, Sector 18, Noida, UP 201301"
          email="divya.verma@example.com" />
        <CardComponent name="pooja yadav"
          job="Shopify Developer"
          address="B-22, Sector 27, Noida, UP 201301"
          email="pooja.yadav@example.com" />
        <CardComponent name="vivek yadav"
          job="intern"
          address="B-22, Sector 16, Noida, UP 201301"
          email="vivek.yadav@example.com" />
      </div>
      <Timer />
    </>
  )
}

export default App

