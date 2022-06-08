import React from 'react';
import useSponsorshipContents from '../../../../hooks/useSponsorshipContents';
import SingleSponsorshipContent from '../SingleSponsorshipContent/SingleSponsorshipContent';

const SponsorshipContents = () => {
    const [SponsorshipContents] = useSponsorshipContents()
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-start">
                    <p className='text-black'>Sponsorship Content</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Sponsorship Content</h2>
                </div>
                <div className='row g-3 pt-4'>
                    {
                        SponsorshipContents.map(SponsorshipContent => <SingleSponsorshipContent
                            key={SponsorshipContent.id}
                            SponsorshipContent={SponsorshipContent}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default SponsorshipContents;