import Banner from "./Component/Banner"
import Footer from "./Component/Footer"
import GetStared from "./Component/GetStared"
import Models from "./Component/Models"
import Navber from "./Component/Navber"
import Premium from "./Component/Premium"
import Transform from "./Component/Transform"
import Transparent from "./Component/Transparent"
import Simple from "./Component/Transparent"

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()



function App() {

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Premium></Premium>
      <Models modelPromise = {modelPromise} ></Models>
      <GetStared></GetStared>
      <Transparent></Transparent>
      <Transform></Transform>
      <Footer></Footer>
    </>
  )
}

export default App
