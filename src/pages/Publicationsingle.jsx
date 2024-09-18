import {Blank, scrolltop} from "../components/index.js";
import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {baseurl, getBlog} from "../servies/services.js";

import {LinearProgress} from "@mui/material";


const Publicationsingle = () => {

    let {PID} = useParams()

    const [data, setData]=useState(false)

    const getdata = async ()=>{
        const options = {


            params: {id: PID}
        };
        const res = await getBlog(options)
        if (res){

            setData(res.data)
        }
    }

    useEffect(() => {

        scrolltop()
        getdata().then()
    }, []);


    let content
    if (data!==false){
        content =
            <div className='columns p-3 is-multiline my-4 w100  shadowtwo padtopmobile'>
                <div className='column is-10'>
                    <h1 className='is-size-4-desktop'>
                        {data.blog.title}
                    </h1>
                </div>

                <div className='column is-2'>
                <span className='has-text-black has-text-white borderrad1   kook is-size-6 ml-5 p-1 my-auto'
                      style={{float: 'left'}}>
                                 {data.blog.date_text}
                              </span>
                </div>


                <div className='column is-12 has-text-centered'>
                    <img src={`${baseurl}/${data.blog.img}`} alt=""/>


                </div>

                <div className='column is-12'>
                    <article className='has-text-justified' dangerouslySetInnerHTML={{__html:data.blog.txt}}></article>
                </div>

            </div>

    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='secondary' sx={{
                '&.MuiLinearProgress-root':{
                    backgroundColor:'#00A651'
                }

            }}/>
        </div>
    }

  return(
      <>

          <div className='columns is-multiline container'>

              <Blank/>


              <div className='column is-12 mb-6'>
                  {content}

              </div>



          </div>


      </>
  )
}
export default Publicationsingle