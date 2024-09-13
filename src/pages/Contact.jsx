import {ErrorMessage, Field, Form, Formik} from 'formik'


const Contact = () => {

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

      <div className='columns container is-multiline mb-6 '>

          <div className='column is-12'>
              <h1 className='is-size-1 has-text-centered'>
                  Contatc Dr. Sattarzadeh
              </h1>

          </div>


          <div className='column is-12 bgclrtwo has-text-white p-6 borderrad1'>

              <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema}
                  onSubmit={onSubmit}
              >
                  <Form>
                      <div className='columns is-multiline '>
                          <div className='column is-6'>
                              <p >Name</p>
                              <Field className='input' type="text" id="name" name="name"/>
                              <ErrorMessage name="name" component="div" style={{color: 'red'}}/>
                          </div>

                          <div className='column is-6'>
                              <p >Number </p>
                              <Field className='input' type="email" id="email" name="email"/>
                              <ErrorMessage name="email" component="div" style={{color: 'red'}}/>
                          </div>

                          <div className='column is-12'>
                              <p>Your message </p>
                              <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                              <ErrorMessage name="password" component="div" style={{color: 'red'}}/>
                          </div>

                      </div>


                      <button className='button bgclrtwo has-text-black  mt-6 is-fullwidth font13' type="submit">Send</button>
                  </Form>
              </Formik>





          </div>









      </div>

      </>
  )
}
export default Contact;