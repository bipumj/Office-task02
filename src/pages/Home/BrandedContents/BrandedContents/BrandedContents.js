import React from 'react';
import useBrandedContents from '../../../../hooks/useBrandedContents';
import SingleBrandedContent from '../SingleBrandedContent/SingleBrandedContent';

const BrandedContents = () => {
    const [BrandedContents] = useBrandedContents()
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-start">
                    <p>Branded Content</p>
                    <hr />
                    <h2>Branded Content</h2>
                </div>
                <div className='row g-3 pt-4'>
                    {
                        BrandedContents.map(BrandedContent => <SingleBrandedContent
                            key={BrandedContent.id}
                            BrandedContent={BrandedContent}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BrandedContents;