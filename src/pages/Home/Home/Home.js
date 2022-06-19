import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
// import Seminar from '../Seminar/Seminar';
import Banner from '../Banner/Banner';
import useBreakings from '../../../hooks/useBreakings';
import SingleBreaking from '../Breaking/SingleBreaking/SingleBreaking';
import useSponsorshipContents from '../../../hooks/useSponsorshipContents';
import SingleSponsorshipContent from '../SponsorshipContent/SingleSponsorshipContent/SingleSponsorshipContent';
import useBrandedContents from '../../../hooks/useBrandedContents';
import SingleBrandedContent from '../BrandedContents/SingleBrandedContent/SingleBrandedContent';
import useAiGenerateContents from '../../../hooks/useAiGenerateContents';
import SingleAiGenerateContent from '../AiGenerateContent/SingleAiGenerateContent/SingleAiGenerateContent';
import CurrentNews from '../CurrentNews/CurrentNews';
import MenuItems from '../MenuItems/MenuItems';
import MultiMenu from '../MultiMenu/MultiMenu';
import { Button } from 'react-bootstrap';
import SinglePopularNews from '../PopularNews/SinglePopularNews';
import usePopularNews from '../../../hooks/usePopularNews';


const Home = () => {

    // breaking section //
    const [breakings] = useBreakings()
    const navigate = useNavigate();
    const sliceBreakings = breakings.slice(0, 4);

    // Popular News Section //
    const [PopularNews] = usePopularNews()
    const slicePopularNews = PopularNews.slice(0, 8);

    // Sponsored Content Section //
    const [SponsorshipContents] = useSponsorshipContents()
    const sliceSponsorshipContents = SponsorshipContents.slice(0, 4);

    // Branded Content Section //
    const [BrandedContents] = useBrandedContents()
    const sliceBrandedContents = BrandedContents.slice(0, 4);

    // AI Generate Content Section //
    const [AiGenerateContents] = useAiGenerateContents()
    const sliceAiGenerateContents = AiGenerateContents.slice(0, 4);


    return (
        <main>


            {/* <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Banner />
                    </div>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <Banner />
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <Banner />
                                </div>
                                <div className='col-lg-6'>
                                    <Banner />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            <div className='row'>
                <div className='col-lg-6'>
                    <Banner />
                </div>
                <div className='col-lg-6'>
                    <Banner />
                    {/* <div className="row">
                        <div className="col-lg-6">
                            <Banner className="banner2" />
                        </div>
                        <div className="col-lg-6">
                            <Banner />
                        </div>
                    </div> */}

                </div>
            </div>
            {/* <section className='container'>
                <CurrentNews />
            </section> */}
            <div style={{ 'background-image': 'linear-gradient(#FFFFFF , #ECE9E6)' }} className="service-title mt-5 pt-3 pb-3 text-center ">
                <h2 className='fw-bolder fs-1 ' style={{ color: 'rgb(26, 62, 52)' }}>  <MenuItems /> </h2>
            </div>


            {/* Braking Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className=" text-start">
                        <Button variant='secondary' className='rounded-pill fw-bold' >Breaking</Button>
                        {/* <p className='text-black'>Breaking</p> */}
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2 style={{ color: "#1E0A3C" }}>Breaking</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/breaking')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceBreakings.map(breaking => <SingleBreaking
                                key={breaking.id}
                                breaking={breaking}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Random Popular News Section */}
            <div className="" style={{ 'background-image': 'linear-gradient(#FFEEEE, #DDEFBB)' }}>
                <section className='py-5'>
                    <div className="container">
                        <div className="text-start">
                            <h2 className='fs-2 fw-bold'>Popular News</h2>
                            <hr />
                        </div>
                        <div className='row g-3 pt-4'>
                            {
                                slicePopularNews.map(PopularNews => <SinglePopularNews
                                    key={PopularNews.id}
                                    PopularNews={PopularNews}
                                />)
                            }
                        </div>
                    </div>
                </section>

            </div>


            {/* Sponsored Section */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <Button variant='secondary' className='rounded-pill fw-bold' >Sponsorship Content</Button>
                        {/* <p className='text-black'>Sponsorship Content</p> */}
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2 style={{ color: "#1E0A3C" }}>Sponsorship Content</h2>
                            <div className='mt-2 '>
                                <button onClick={() => navigate('/sponsorship-content')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>
                    <div className='row g-3 pt-4'>
                        {
                            sliceSponsorshipContents.map(SponsorshipContent => <SingleSponsorshipContent
                                key={SponsorshipContent.id}
                                SponsorshipContent={SponsorshipContent}
                            />)
                        }
                    </div>

                </div>
            </section>

            {/* Branded Contents Section */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <Button variant='secondary' className='rounded-pill fw-bold' >Branded Content</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Branded Content</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/branded-content')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>
                    <div className='row g-3 pt-4'>
                        {
                            sliceBrandedContents.map(BrandedContent => <SingleBrandedContent
                                key={BrandedContent.id}
                                BrandedContent={BrandedContent}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* AI Generate Content */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <Button variant='secondary' className='rounded-pill fw-bold' >AI Generate Content</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>AI Generate Content</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/ai-generate-content')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 pt-4">
                        {
                            sliceAiGenerateContents.map(AiGenerateContent => <SingleAiGenerateContent
                                key={AiGenerateContent.id}
                                AiGenerateContent={AiGenerateContent}
                            />)
                        }
                    </div>
                </div>
            </section>




            {/* <Seminar /> */}
        </main>

    );
};

export default Home;