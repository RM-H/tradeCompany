import {useEffect} from "react";
import {Blank, scrolltop} from "../components/index.js";


const About = () => {

    useEffect(() => {
        scrolltop()
    }, []);

  return(
      <>

          <div className='columns is-multiline container'>

              <Blank/>

              <div className='column is-12  has-text-centered mb-6'>


                  <img src="/images/logo-removebg-preview.png" style={{borderRadius: '3rem'}} alt=""/>


                  <h1 className='has-text-centered is-size-1'>
                      درباره بازرگانی خیراله نیا
                  </h1>

                  <img
                      src="https://images.ctfassets.net/zlnfaxb2lcqx/2y9FIwBPHOtfH1Sj04Syyt/f12f294b97983e97e3435c90c01d32cf/global-comms-2023_2.jpg?fm=webp&w=1080&q=90"
                      alt="" className='borderrad1'/>

                  <article className='is-size-4 px-3 my-3 has-text-justified'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem beatae
                      blanditiis commodi cupiditate delectus deleniti dicta dignissimos, dolorem doloremque ea enim eos
                      error explicabo laudantium molestiae nam nisi officia officiis omnis praesentium quaerat qui
                      quidem quod sapiente similique sint sunt tempora veniam veritatis vitae voluptas! Accusantium
                      animi at blanditiis consequatur corporis cupiditate delectus, deleniti deserunt doloremque dolores
                      eaque earum enim eveniet facilis hic impedit incidunt ipsum itaque iusto libero maxime nostrum
                      obcaecati odio odit officiis omnis optio pariatur provident quasi quos recusandae reiciendis
                      reprehenderit sequi voluptas voluptate voluptatem voluptatibus! A ab adipisci alias amet aperiam
                      at autem commodi delectus deleniti doloribus dolorum eaque ex facere harum incidunt iusto labore
                      laudantium mollitia non placeat quasi, quia quidem quod reiciendis rerum similique temporibus ut?
                      Aliquam atque, autem debitis dignissimos distinctio dolores eius et ex excepturi expedita fugiat
                      hic in inventore, ipsa, ipsam ipsum iste libero nam nesciunt nobis numquam perferendis
                      perspiciatis placeat quam quis quisquam rem sequi soluta sunt temporibus ullam veritatis voluptate
                      voluptatum! Accusantium architecto autem debitis dolorem esse excepturi, itaque laboriosam omnis
                      quod rem repellat sint suscipit tenetur unde voluptatibus. Aliquid asperiores aspernatur
                      distinctio labore nostrum quasi qui tempora ullam! Autem distinctio ipsam perferendis, possimus
                      veniam voluptatibus. Aperiam commodi consectetur cum, dicta et eum illum maxime nemo nostrum optio
                      quod ullam. Accusantium architecto at consectetur delectus facere illo iusto labore non nulla qui
                      quisquam repellat, sit unde ut voluptates. Animi, aut doloribus eligendi et, in, laboriosam
                      laudantium magnam modi nemo nobis non nostrum quasi sit tempora unde?
                  </article>


              </div>


          </div>


      </>
  )
}
export default About;