import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Button} from '@mui/material'
import {Link} from "react-router-dom";

import {scrolltop} from '../components/index.js'
import {useEffect} from "react";


const Home = () => {


    useEffect(() => {
        scrolltop()
    }, []);


    return (
        <>
            <div className='columns m-0  is-multiline'>


                <div
                    className='column is-12 bgclrone dvhcontainerwithbg is-flex is-flex-direction-column is-justify-content-center is-align-items-center '>


                    <h1 className='has-text-white my-6 has-text-centered  ' style={{fontSize: '6rem'}}>
                        بازرگانی خیراله نیا

                    </h1>

                    <p className='is-size-2 textclrfive has-text-centered'>
                        پیوند بازارها، ارائه موفقیت
                    </p>


                </div>


                <div className='column is-12 p-4  container'>
                    <h3 className='is-size-1 has-text-centered'>
                        خدمات ما

                    </h3>


                    <article className='has-text-justified is-size-5 my-5'>

                        شرکت تجارت بین‌المللی ما در ارائه خدمات واردات و صادرات بدون مرز تخصص دارد و با کارایی و تخصص،
                        کسب‌وکارها را در سراسر جهان به هم متصل می‌کند. از راه‌حل‌های لجستیک و پیک گرفته تا هدایت
                        چارچوب‌های پیچیده قانونی، ما اطمینان می‌دهیم که کالاهای شما به‌سرعت و با امنیت به مقصد می‌رسند.
                        به ما اعتماد کنید تا شما را به بازار جهانی متصل کنیم و با راه‌حل‌های سفارشی و پشتیبانی حقوقی
                        متخصص، کسب‌وکارتان را پیش ببریم.
                    </article>


                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}

                        speed={4000}
                        loop={true}



                        modules={[Navigation, Autoplay]}




                    >


                        <SwiperSlide>
                            <div
                                className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                                <img src="/images/cargo.webp" alt="" style={{width: '6rem'}}/>
                                <p className='has-text-weight-bold is-size-5'>

                                    کریر و فورواردر
                                </p>

                            </div>


                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                                <img src="/images/declare.png" alt="" style={{width: '6rem'}}/>
                                <p className='has-text-weight-bold is-size-5'>
                                    ترخیص
                                </p>

                            </div>


                        </SwiperSlide>


                        <SwiperSlide>
                            <div
                                className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                                <img src="/images/trade.webp" alt="" style={{width: '6rem'}}/>
                                <p className='has-text-weight-bold is-size-5'>
                                    صادرات و واردات
                                </p>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                                <img src="/images/legal.webp" alt="" style={{width: '6rem'}}/>
                                <p className='has-text-weight-bold is-size-5'>
                                    مشاوره حقوقی
                                </p>

                            </div>

                        </SwiperSlide>


                        <SwiperSlide>
                            <div
                                className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                                <img src="/images/legal.webp" alt="" style={{width: '6rem'}}/>
                                <p className='has-text-weight-bold is-size-5'>
                                  مشاوره بانکی و اعتبارات اسنادی
                                </p>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                                <img src="/images/legal.webp" alt="" style={{width: '6rem'}}/>
                                <p className='has-text-weight-bold is-size-5'>
                                   شرکت در پرونده های  قاچاق
                                </p>

                            </div>

                        </SwiperSlide>


                    </Swiper>


                    <div className='columns my-6 is-multiline'>

                        <div className='column is-6 is-flex is-align-items-center '>
                            <article className='is-size-5 has-text-justified px-3'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea ipsa natus nisi
                                officia quaerat ullam. Alias assumenda cumque distinctio iste labore nemo odit quisquam,
                                quod? Aperiam eius fugit itaque iusto maiores nam nostrum omnis, perspiciatis velit
                                veritatis? Aliquid architecto, at commodi consequuntur expedita laborum nam neque quasi
                                quisquam recusandae sint tenetur? Accusantium alias aliquam asperiores at beatae
                                consequuntur dignissimos dolorem dolores error esse facere harum in inventore iste iure
                                laboriosam nemo, nisi nobis odio officia omnis placeat quas quibusdam quidem repellendus
                                repudiandae temporibus totam ut veritatis vitae. Alias architecto, aspernatur assumenda
                                harum labore magnam nam nulla quae quia repellat?
                            </article>

                        </div>

                        <div className='column is-6 has-text-centered'>
                            <img
                                src="/images/import.webp"
                                className='borderrad1 imageheight' alt=""/>

                        </div>

                        <div className='column is-6 is-flex is-align-items-center'>
                            <article className='is-size-5 has-text-justified px-3'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea ipsa natus nisi
                                officia quaerat ullam. Alias assumenda cumque distinctio iste labore nemo odit quisquam,
                                quod? Aperiam eius fugit itaque iusto maiores nam nostrum omnis, perspiciatis velit
                                veritatis? Aliquid architecto, at commodi consequuntur expedita laborum nam neque quasi
                                quisquam recusandae sint tenetur? Accusantium alias aliquam asperiores at beatae
                                consequuntur dignissimos dolorem dolores error esse facere harum in inventore iste iure
                                laboriosam nemo, nisi nobis odio officia omnis placeat quas quibusdam quidem repellendus
                                repudiandae temporibus totam ut veritatis vitae. Alias architecto, aspernatur assumenda
                                harum labore magnam nam nulla quae quia repellat?
                            </article>

                        </div>


                        <div className='column is-6 has-text-centered'>
                            <img
                                src="/images/declare.jpg"
                                alt="" className='borderrad1 imageheight'/>

                        </div>

                        <div className='column is-6 is-flex is-align-items-center '>
                            <article className='is-size-5 has-text-justified px-3'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea ipsa natus nisi
                                officia quaerat ullam. Alias assumenda cumque distinctio iste labore nemo odit quisquam,
                                quod? Aperiam eius fugit itaque iusto maiores nam nostrum omnis, perspiciatis velit
                                veritatis? Aliquid architecto, at commodi consequuntur expedita laborum nam neque quasi
                                quisquam recusandae sint tenetur? Accusantium alias aliquam asperiores at beatae
                                consequuntur dignissimos dolorem dolores error esse facere harum in inventore iste iure
                                laboriosam nemo, nisi nobis odio officia omnis placeat quas quibusdam quidem repellendus
                                repudiandae temporibus totam ut veritatis vitae. Alias architecto, aspernatur assumenda
                                harum labore magnam nam nulla quae quia repellat?
                            </article>

                        </div>


                        <div className='column is-6 has-text-centered'>
                            <img
                                src="/images/legal%20(2).webp"
                                className='borderrad1 imageheight' alt=""/>

                        </div>

                        <div className='column is-6 is-flex is-align-items-center'>
                            <article className='is-size-5 has-text-justified px-3'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea ipsa natus nisi
                                officia quaerat ullam. Alias assumenda cumque distinctio iste labore nemo odit quisquam,
                                quod? Aperiam eius fugit itaque iusto maiores nam nostrum omnis, perspiciatis velit
                                veritatis? Aliquid architecto, at commodi consequuntur expedita laborum nam neque quasi
                                quisquam recusandae sint tenetur? Accusantium alias aliquam asperiores at beatae
                                consequuntur dignissimos dolorem dolores error esse facere harum in inventore iste iure
                                laboriosam nemo, nisi nobis odio officia omnis placeat quas quibusdam quidem repellendus
                                repudiandae temporibus totam ut veritatis vitae. Alias architecto, aspernatur assumenda
                                harum labore magnam nam nulla quae quia repellat?
                            </article>

                        </div>

                        <div className='column is-6 has-text-centered'>
                            <img
                                src="/images/export.jpg"
                                alt="" className='borderrad1 imageheight'/>

                        </div>


                        <div className='column is-12 has-text-centered'>
                            <Link to='/about'>

                                <Button variant='contained' color='primary'>
                                    درباره بازرگانی خیراله نیا بیشتر بدانید
                                </Button>


                            </Link>

                        </div>

                    </div>

                </div>


            </div>


        </>
    )
}
export default Home;