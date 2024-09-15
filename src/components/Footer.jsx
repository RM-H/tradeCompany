import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";

const Footer = () => {
  return(
      <>
          <footer>
              <div className='columns m-0 has-text-white  is-multiline bgclrtwo'>
                  <div className='column is-4  px-6'>
                      <img src="/images/logo-removebg-preview.png" alt="logo" style={{maxWidth:'10rem'}}/>
                      <p className='has-text-justified  has-text-white'>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni quod veritatis voluptatem. Animi consectetur excepturi nemo non placeat tenetur voluptate. Ab deleniti eaque enim ex illum porro quae quaerat reiciendis sapiente suscipit. Animi assumenda consequatur doloribus eos harum hic illo impedit, iusto laudantium maiores maxime nihil non nostrum odio, porro quaerat quisquam recusandae repellendus
                      </p>
                  </div>

                  <div className='column is-3  px-6'>
                      <p className=' has-text-weight-bold is-size-5 '>
                         دسترسی سریع
                      </p>

                      <a href="" className='navbar-item'>
                          صفحه اصلی
                      </a>

                      <a href="" className='navbar-item'>
                          درباره ما
                      </a>

                      <a href="" className='navbar-item'>
                          مالات
                      </a>

                      <a href="" className='navbar-item'>
                         تماس با ما
                      </a>


                  </div>


                  <div className='column is-3 px-6'>
                      <p className=' has-text-weight-bold is-size-5'>
                          آدرس
                      </p>

                      <p>
                          Lorem ipsum dolor sit amet.
                      </p>

                      <p className=' has-text-weight-bold is-size-5 mt-6'>
                          شماره تلفن
                      </p>
                      <p className='has-text-right' style={{direction: 'ltr'}}>
                          +98 918 883 8083
                          <br/>
                          +98 912 044 8083
                          <br/>
                          +98 873 460 0777
                      </p>

                  </div>


                  <div className='column is-2'>
                      <p className=' has-text-weight-bold is-size-5'>
                        شبکه های اجتماعی
                      </p>

                      <div className='is-flex is-flex-direction-column is-align-items-start is-justify-content-space-between  '>
                          <span
                              className=' p-2 has-text-white is-flex is-justify-content-center is-align-items-center'>
                          <WhatsApp/>

                            </span>


                          <span
                              className=' p-2 has-text-white is-flex is-justify-content-center is-align-items-center'>
                          <Instagram/>

                            </span>

                          <span
                              className=' p-2 has-text-white is-flex is-justify-content-center is-align-items-center'>
                          <Telegram/>

                            </span>

                      </div>
                  </div>


              </div>

              <div className='bgclrone py-2 '>
                  <p className='has-text-white has-text-centered '>
                  طراحی شده توسط :
                      <a className='has-text-white' href="https://rhasani.com/" target='_blank' rel='nofollow'> رامین حسنی</a>
                  </p>
                  
              </div>


          </footer>


      </>
  )
}
export default Footer;