import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Button} from '@mui/material'
import {Link} from "react-router-dom";
import {Blank} from '../components'


const Home = () => {
    return (
        <>
            <div className='columns   is-multiline'>



                <div
                    className='column is-12 bgclrone dvhcontainerwithbg is-flex is-flex-direction-column is-justify-content-center is-align-items-center '>


                    <h1 className='has-text-white my-6  ' style={{fontSize:'6rem'}}>
                        بازرگانی خیر الله نیا

                    </h1>

                    <p className='is-size-2 textclrfive'>
                        پیوند بازارها، ارائه موفقیت
                    </p>




                </div>


                <div className='column is-12 p-4  container'>
                    <h3 className='is-size-1 has-text-centered'>
                        خدمات ما

                    </h3>


                    <article className='has-text-justified is-size-5 my-5'>

                        شرکت تجارت بین‌المللی ما در ارائه خدمات واردات و صادرات بدون مرز تخصص دارد و با کارایی و تخصص، کسب‌وکارها را در سراسر جهان به هم متصل می‌کند. از راه‌حل‌های لجستیک و پیک گرفته تا هدایت چارچوب‌های پیچیده قانونی، ما اطمینان می‌دهیم که کالاهای شما به‌سرعت و با امنیت به مقصد می‌رسند. به ما اعتماد کنید تا شما را به بازار جهانی متصل کنیم و با راه‌حل‌های سفارشی و پشتیبانی حقوقی متخصص،  کسب‌وکارتان را پیش ببریم.
                    </article>


                    <div className='is-flex  is-justify-content-space-evenly    '
                    >

                        <div
                            className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                            <img src="/images/cargo.png" alt="" style={{width: '6rem'}}/>
                            <p className='has-text-weight-bold is-size-5'>

                                کریر و فورواردر
                            </p>

                        </div>

                        <div
                            className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                            <img src="/images/declare.png" alt="" style={{width: '6rem'}}/>
                            <p className='has-text-weight-bold is-size-5'>
                                ترخیص
                            </p>

                        </div>


                        <div
                            className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                            <img src="/images/trade.png" alt="" style={{width: '6rem'}}/>
                            <p className='has-text-weight-bold is-size-5'>
                                صادرات و واردات
                            </p>

                        </div>


                        <div
                            className='bgclrthree borderrad2 is-flex is-flex-direction-column is-align-items-center p-3'>
                            <img src="/images/legal.png" alt="" style={{width: '6rem'}}/>
                            <p className='has-text-weight-bold is-size-5'>
                                مشاوره حقوقی
                            </p>

                        </div>

                    </div>




                    <div className='columns my-6 is-multiline'>

                        <div className='column is-6'>
                            <img
                                src="https://images.ctfassets.net/zlnfaxb2lcqx/4VkiLCBuTbJflQSQg8xUfE/6d6d334468ae72fd70ad9a9e395bea18/header-Connect-Angelica-Kerr-and-Judy-Verses.jpg?fm=webp&w=1080&q=90"
                                className='borderrad1' alt=""/>

                        </div>

                        <div className='column is-6 '>
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


                        <div className='column is-6'>
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


                        <div className='column is-6'>
                            <img
                                src="https://images.ctfassets.net/zlnfaxb2lcqx/2y9FIwBPHOtfH1Sj04Syyt/f12f294b97983e97e3435c90c01d32cf/global-comms-2023_2.jpg?fm=webp&w=1080&q=90"
                                alt="" className='borderrad1'/>

                        </div>

                        <div className='column is-12 has-text-centered'>
                            <Link to='/about'>

                                <Button variant='contained' color='success'>
                                    more about Dr. Sattarzadeh
                                </Button>


                            </Link>

                        </div>

                    </div>

                </div>



                <div className='column is-12-mobile is-12 p-5 '>

                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}

                        speed={1618}
                        loop={true}
                        navigation={true}


                        modules={[Navigation, Autoplay]}

                        className='h100 '


                    >


                        <SwiperSlide>
                            <div
                                className='has-text-white  is-flex is-flex-direction-column is-align-items-center is-justify-content-center h100'>

                                <img
                                    src="https://images.ctfassets.net/o78em1y1w4i4/60lF8p8YtpgKDzBsvnyluu/db6a19c0bdad6312678dd07d9a6eb36c/iStock-646415010__1_.jpg?fm=webp&w=640&q=75"
                                    alt="" className='borderrad1'/>
                                <h3 className='is-size-4 my-3'>
                                    Tackling water quality through grassroots collaboration
                                </h3>
                                <p className='is-size-6 '>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi debitis
                                    distinctio earum explicabo in ipsam ipsum iusto minus nemo nesciunt nihil
                                    numquam pariatur, porro quod similique, suscipit unde vel.

                                </p>


                            </div>


                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='has-text-white is-flex is-flex-direction-column is-align-items-center is-justify-content-center h100'>

                                <img
                                    src="https://images.ctfassets.net/o78em1y1w4i4/2xUtfcbjGS7hc4KVsK4wRg/7dfad18d3414aeaeb99846de5a51505a/research-intelligence-research-strategy.jpg?fm=webp&w=640&q=75"
                                    alt="" className='borderrad1'/>
                                <h3 className='is-size-4 my-3'>
                                    Tackling water quality through grassroots collaboration
                                </h3>
                                <p className='is-size-6 '>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
                                    debitis distinctio earum explicabo in ipsam ipsum iusto minus nemo nesciunt
                                    nihil numquam pariatur, porro quod similique, suscipit unde vel.

                                </p>


                            </div>


                        </SwiperSlide>


                        <SwiperSlide>
                            <div
                                className='has-text-white is-flex is-flex-direction-column is-align-items-center is-justify-content-center h100'>

                                <img
                                    src="https://images.ctfassets.net/o78em1y1w4i4/5MHufPxcQqF7wuLGYMK6nt/51b3458ab99e844a8a90021f7c740867/teaser-computer-engineers-meeting.jpg?fm=webp&w=640&q=75"
                                    alt="" className='borderrad1'/>
                                <h3 className='is-size-4 my-3'>
                                    Tackling water quality through grassroots collaboration
                                </h3>
                                <p className='is-size-6 '>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
                                    debitis distinctio earum explicabo in ipsam ipsum iusto minus nemo nesciunt
                                    nihil numquam pariatur, porro quod similique, suscipit unde vel.

                                </p>


                            </div>


                        </SwiperSlide>


                    </Swiper>

                </div>


            </div>


        </>
    )
}
export default Home;