import {Outlet} from 'react-router-dom'
import {Nav,Footer} from './components'

const Mainlayout = () => {
  return(
      <>
          <Nav/>

          <main>


              <Outlet/>


          </main>

          <Footer/>

      </>
  )
}
export default Mainlayout;