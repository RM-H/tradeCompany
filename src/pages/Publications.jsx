import {Link} from "react-router-dom";
import {Button} from '@mui/material'


const Publications = () => {
    
    
    const Publicationscard = ({title}) => {
      return(
          <>
          <div className='column is-4 p-3'>
              <Link to='/publications/1' className='has-text-black'>




              <div className='borderclrtwo'>
                  <img
                      src="https://images.ctfassets.net/zlnfaxb2lcqx/2y9FIwBPHOtfH1Sj04Syyt/f12f294b97983e97e3435c90c01d32cf/global-comms-2023_2.jpg?fm=webp&w=1080&q=90"
                      alt="" className='borderrad1'/>

                  <h3 className='has-text-centered has-text-weight-bold'>
                      {title}
                  </h3>

                  <p className='p-3'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid earum esse explicabo fuga quibusdam quos? Dolores doloribus illo iste iure quidem tenetur voluptates? Atque ducimus possimus quia tempora vero!
                  </p>

                  <div className='has-text-centered my-3'>
                      <Button variant='contained'>
                      read more
                  </Button>

                  </div>






              </div>

              </Link>


          </div>


          </>
      )
    }


    return (
        <>
            <div className='columns is-multiline container'>
                <div className='column is-12'>
                  <h1 className='has-text-centered is-size-1'>
                       Dr. Sattarzadeh Publications
                  </h1>
              </div>



                <div className='column is-12'>

                    <div className='columns is-multiline m-0'>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>
                        <Publicationscard title='number one'/>

                    </div>

                </div>

          </div>


      </>
  )
}
export default Publications;