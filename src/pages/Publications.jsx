import {Link} from "react-router-dom";
import {Button, LinearProgress} from '@mui/material'
import {Blank, scrolltop} from "../components/index.js";
import {useEffect, useState} from "react";
import {getBlogs,baseurl} from '../servies/services.js'

import {NavigateBefore, NavigateNext} from "@mui/icons-material";



const Publications = () => {

    const [data, setData]=useState(false)
    const [search, setSearch] = useState('')
    const getData = async (page)=>{
        const options = {


            params: {page: page, take: 6, search: search}
        };
        const res = await getBlogs(options)
        if (res){

            setData(res.data)
        }
    }

    useEffect(() => {
        scrolltop()
        getData()
    }, []);


    useEffect(() => {
        getData().then()
    }, [search]);


    
    
    const Publicationscard = ({title, text,img,id}) => {


      return(
          <>
          <div className='column is-4 p-3'>
              <Link to={`/publications/${id}`} className='has-text-black'>




              <div className='borderclrtwo'>
                  <img
                      src={`${baseurl}/${img}`}
                      alt="" className='borderrad1 imageheight'/>

                  <h3 className='has-text-centered has-text-weight-bold'>
                      {title}
                  </h3>

                  <div className='p-3' dangerouslySetInnerHTML={{__html: text.substring(0,400) }}/>



                  <div className='has-text-centered my-3'>
                      <Button variant='contained'>
                     ادامه
                  </Button>

                  </div>






              </div>

              </Link>


          </div>


          </>
      )
    }



    let content
    if (data) {




        if (data.items.length > 0) {

            content = data.items.map((item) => (



                <Publicationscard key={item.id} title={item.title} img={item.img} text={item.txt} id={item.id}/>







            ))
        } else {
            content = <div className='column is-12'>
                <p className=' has-text-centered is-size-4-desktop'>
                    چیزی جهت نمایش وجود ندارد.
                </p>
            </div>
        }











    }else {
        content =
            <div className='column is-12'>

                <LinearProgress />
            </div>

    }



    return (
        <>
            <div className='columns is-multiline container'>

                <Blank/>
                <div className='column is-12'>
                    <h1 className='has-text-centered is-size-1'>
                        مقالات و مطالب مفید
                    </h1>
                </div>


                <div className='column is-12 my-3'>


                    <div className="field has-addons    ">
                        <div className="control w100">
                            <input className="input kook"
                                   onChange={(event) => setTimeout(() => setSearch(event.target.value), 1600)}
                                   type="text" placeholder="جستجو"/>
                        </div>
                        <div className="control">
                            <a className="button borderrad1  has-text-weight-bold  " disabled>
                                یافت شده :


                                {data && data.paginator.total}


                            </a>
                        </div>
                    </div>
                </div>


                <div className='column is-12'>

                    <div className='columns is-multiline m-0'>
                        {content}

                    </div>

                </div>


                <div className='column is-12'>

                    {data &&
                        <div className='has-text-black  mb-6 has-text-centered'>


                            {/*before page with tick*/}
                            {
                                data.paginator.beforePage < data.paginator.currentPage && (

                                    <button onClick={() => {
                                        setData(false);
                                        getData(data.paginator.beforePage);
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }} className='button'>
                                        <NavigateNext/>
                                    </button>
                                )


                            }


                            {/*map beforePages*/}
                            {data.paginator.beforePages.length > 0 &&

                                <>
                                    {data.paginator.beforePages.map((item, index) =>
                                        <button onClick={() => {
                                            setData(false);
                                            getData(item);
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }} key={index}>
                                            {item}
                                        </button>
                                    )}
                                </>

                            }


                            {/*active*/}

                            {
                                data.paginator.total > 0 &&
                                <button className='button has-text-black'>{data.paginator.currentPage}</button>


                            }


                            {/*map nextPages*/}
                            {data.paginator.nextPages.length > 0 &&
                                <>
                                    {data.paginator.nextPages.map((item, index) =>
                                        <button onClick={() => {
                                            setData(false);
                                            getData(item);
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }} key={index}>
                                            {item}
                                        </button>
                                    )}
                                </>

                            }


                            {/*next page with tick*/}
                            {

                                data.paginator.nextPage > data.paginator.currentPage && (

                                    <button onClick={() => getData(data.paginator.nextPage)}
                                            className='button is-transparent'>
                                        <NavigateBefore/>
                                    </button>
                                )


                            }


                        </div>
                    }

                </div>

            </div>


        </>
    )
}
export default Publications;