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


const Home = () => {

    // breaking section //
    const [breakings] = useBreakings()
    const navigate = useNavigate();
    const sliceBreakings = breakings.slice(0, 4);

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
            <Banner />
            <div style={{ 'background-color': "#CAD8DF" }} className="service-title mt-4 pt-4 pb-4 text-center">
                <h2 className='fw-bolder fs-1 ' style={{ color: 'rgb(26, 62, 52)' }}> Featured Stories </h2>
            </div>

            {/* Braking Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className=" text-start">
                        <p className='text-black'>Breaking</p>
                        <hr />
                        <h2 style={{ color: "#1E0A3C" }}>Breaking</h2>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceBreakings.map(breaking => <SingleBreaking
                                key={breaking.id}
                                breaking={breaking}
                            />)
                        }
                    </div>
                    <div className='mt-5 text-center'>
                        <button onClick={() => navigate('/breaking')} className='btn btn-dark w-50'>See More</button >
                    </div>
                </div>
            </section>


            {/* Sponsored Section */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <p className='text-black'>Sponsorship Content</p>
                        <hr />
                        <h2 style={{ color: "#1E0A3C" }}>Sponsorship Content</h2>
                    </div>
                    <div className='row g-3 pt-4'>
                        {
                            sliceSponsorshipContents.map(SponsorshipContent => <SingleSponsorshipContent
                                key={SponsorshipContent.id}
                                SponsorshipContent={SponsorshipContent}
                            />)
                        }
                    </div>
                    <div className='mt-5 text-center'>
                        <button onClick={() => navigate('/sponsorship-content')} className='btn btn-dark w-50'>See More</button >
                    </div>
                </div>
            </section>

            {/* Branded Contents Section */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <p>Branded Content</p>
                        <hr />
                        <h2>Branded Content</h2>
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
            <div className='mt-3 text-center'>
                <button onClick={() => navigate('/branded-content')} className='btn btn-dark w-50'>See More</button >
            </div>

            {/* AI Generate Content */}
            <section>
                <div className="container">
                    <div className="text-start">
                        <p>AI Generate Content</p>
                        <hr />
                        <h2>AI Generate Content</h2>
                    </div>
                    <div className="row g-3 pt-4">
                        {
                            sliceAiGenerateContents.map(AiGenerateContent => <SingleAiGenerateContent
                                key={AiGenerateContent.id}
                                AiGenerateContent={AiGenerateContent}
                            />)
                        }
                    </div>
                    <div className='mt-5 text-center'>
                        <button onClick={() => navigate('/ai-generate-content')} className='btn btn-dark w-50'>See More</button >
                    </div>
                </div>
            </section>




            {/* <Seminar /> */}
        </main>

    );
};

export default Home;