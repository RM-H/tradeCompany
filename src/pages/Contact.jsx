import {ErrorMessage, Field, Form, Formik} from 'formik'
import {Blank, scrolltop} from "../components/index.js";
import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";
import {useEffect} from "react";


const Contact = () => {

    useEffect(() => {
        scrolltop()
    }, []);

    const initialValues = {
        name: '',
        email: '',
        password: ''
    };

    // Handle form submission
    const onSubmit = (values) => {
        console.log('Form data', values);
    };
  return(
      <>

      <div className='columns container is-multiline mb-6 px-3 '>


          <Blank/>

          <div className='column is-12 has-text-centered'>

              <img src="/images/logo-removebg-preview.png"style={{maxWidth:'9rem'}} alt=""/>
              <h1 className='is-size-1 has-text-centered'>
                تماس با بازرگانی خیراله نیا
              </h1>

          </div>





          <div className='column is-12 bgclrtwo has-text-white p-6 borderrad1'>


              <div className='columns'>

                  <div className='column is-4'>
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


                      <p className=' has-text-weight-bold is-size-5 mt-6'>
                          شبکه های اجتماعی
                      </p>

                      <div
                          className='is-flex  is-justify-content-start '>
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


                  <div className='column is-8'>
                      <Formik
                          initialValues={initialValues}
                          // validationSchema={validationSchema}
                          onSubmit={onSubmit}
                      >
                          <Form>
                              <div className='columns is-multiline '>
                                  <div className='column is-6'>
                                      <p>نام و نام خانوادگی</p>
                                      <Field className='input' type="text" id="name" name="name"/>
                                      <ErrorMessage name="name" component="div" style={{color: 'red'}}/>
                                  </div>

                                  <div className='column is-6'>
                                      <p>شماره تلفن </p>
                                      <Field className='input' type="email" id="email" name="email"/>
                                      <ErrorMessage name="email" component="div" style={{color: 'red'}}/>
                                  </div>

                                  <div className='column is-12'>
                                      <p>پیام شما </p>
                                      <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                                      <ErrorMessage name="password" component="div" style={{color: 'red'}}/>
                                  </div>

                              </div>


                              <button className='button bgclrtwo has-text-black  mt-6 is-fullwidth font13' type="submit">ارسال</button>
                          </Form>
                      </Formik>

                  </div>

              </div>











          </div>









      </div>

      </>
  )
}
export default Contact;