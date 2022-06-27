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
import SingleAsia from '../Asia/SingleAsia';
import useAsia from '../../../hooks/useAsia';
import SingleWorldNews from '../WorldNews/SingleWorldNews';
import useWorldNews from '../../../hooks/useWorldNews';
import usePolitics from '../../../hooks/usePolitics';
import SinglePolitics from '../Politics/SinglePolitics';
import SingleEconomics from '../Economics/SingleEconomics';
import useEconomics from '../../../hooks/useEconomics';
import useAgriculture from '../../../hooks/useAgriculture';
import SingleAgriculture from '../Agriculture/SingleAgriculture';
import SingleAnalysis from '../Analysis/SingleAnalysis';
import useAnalysis from '../../../hooks/useAnalysis';
import SingleExclusive from '../Exclusive/SingleExclusive';
import useExclusive from '../../../hooks/useExclusive';
import useClimateChange from '../../../hooks/useClimateChange';
import SingleClimateChange from '../ClimateChange/SingleClimatechange';
import SingleTechnology from '../Technology/SingleTechnology';
import useTechnology from '../../../hooks/useTechnology';
import useInvestigative from '../../../hooks/useInvestigative';
import SingleInvestigative from '../Investigative/SingleInvestigative';


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

    // Asia News section //
    const [asia] = useAsia()
    const sliceAsia = asia.slice(0, 4);

    // World News section //
    const [WorldNews] = useWorldNews()
    const sliceWorldNews = WorldNews.slice(0, 4);

    // Politics section //
    const [Politics] = usePolitics()
    const slicePolitics = Politics.slice(0, 4);

    // Economics Section //
    const [economics] = useEconomics()
    const sliceEconomics = economics.slice(0, 4);

    // Agriculture Section //
    const [agriculture] = useAgriculture()
    const sliceAgriculture = agriculture.slice(0, 4);

    // Analysis Section //
    const [analysis] = useAnalysis()
    const sliceAnalysis = analysis.slice(0, 4);

    // Exclusive Section //
    const [exclusive] = useExclusive()
    const sliceExclusive = exclusive.slice(0, 4);

    // ClimateChange Section //
    const [ClimateChange] = useClimateChange()
    const sliceClimateChange = ClimateChange.slice(0, 4);

    // Technology Section //
    const [technology] = useTechnology()
    const sliceTechnology = technology.slice(0, 4);

    // Investigative Section //
    const [Investigative] = useInvestigative()
    const sliceInvestigative = Investigative.slice(0, 4);








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
            <div style={{ 'background-image': 'linear-gradient(#FFFFFF , #ECE9E6)' }} className=" mt-5 pt-3 pb-3 text-center ">
                <h2 className='fw-bolder fs-1 service-title' style={{ color: 'rgb(26, 62, 52)' }}>  <MenuItems /> </h2>
            </div>


            {/* Braking Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className=" text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Breaking</Button>
                        {/* <p className='text-black'>Breaking</p> */}
                        <hr />
                        <div className="d-flex justify-content-between align-item-center">
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
                            <h2 className='fs-2 fw-bold'>Update Article</h2>
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


            {/* AI Generate Content */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >AI Generate Content</Button>
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


            {/* Sponsored Section */}
            <section className='py-5'>
                <div className="container">
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Sponsorship Content</Button>
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
                        <Button variant='warning' className='rounded-pill fw-bold' >Branded Content</Button>
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

            {/* Asia News Section */}

            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Asia</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Asia</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/asia-news')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceAsia.map(asia => <SingleAsia
                                key={asia.id}
                                asia={asia}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* World News Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >World News</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>World News</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/world-news')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceWorldNews.map(WorldNews => <SingleWorldNews
                                key={WorldNews.id}
                                WorldNews={WorldNews}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Politics Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Politics</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Politics</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/politics')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            slicePolitics.map(Politics => <SinglePolitics
                                key={Politics.id}
                                Politics={Politics}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Economics Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Economics</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Economics</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/economics')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceEconomics.map(economics => <SingleEconomics
                                key={economics.id}
                                economics={economics}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Agriculture Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Agriculture</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Agriculture</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/branded-content')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceAgriculture.map(agriculture => <SingleAgriculture
                                key={agriculture.id}
                                agriculture={agriculture}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Analysis Section  */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Analysis</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Analysis</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/branded-content')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceAnalysis.map(analysis => <SingleAnalysis
                                key={analysis.id}
                                analysis={analysis}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Exclusive Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Exclusive</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Exclusive</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/exclusive')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceExclusive.map(exclusive => <SingleExclusive
                                key={exclusive.id}
                                exclusive={exclusive}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Climate change Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >ClimateChange</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>ClimateChange</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/climate-change')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceClimateChange.map(ClimateChange => <SingleClimateChange
                                key={ClimateChange.id}
                                ClimateChange={ClimateChange}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Technology</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Technology</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/technology')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceTechnology.map(technology => <SingleTechnology
                                key={technology.id}
                                technology={technology}
                            />)
                        }
                    </div>
                </div>
            </section>

            {/* Investigative Section */}
            <section className='py-5'>
                <div className='container'>
                    <div className="text-start">
                        <Button variant='warning' className='rounded-pill fw-bold' >Investigative</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2>Investigative</h2>
                            <div className='mt-2'>
                                <button onClick={() => navigate('/investigative')} className='btn btn-dark w-20'>See More</button >
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 pt-4">
                        {
                            sliceInvestigative.map(Investigative => <SingleInvestigative
                                key={Investigative.id}
                                Investigative={Investigative}
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