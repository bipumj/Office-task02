import React from 'react';
import useAiGenerateContents from '../../../../hooks/useAiGenerateContents';
import SingleAiGenerateContent from '../SingleAiGenerateContent/SingleAiGenerateContent';

const AiGenerateContents = () => {
    const [AiGenerateContents] = useAiGenerateContents()
    return (
        <section>
            <div className="container">
                <div className="text-start">
                    <p>AI Generate Content</p>
                    <hr />
                    <h2>AI Generate Content</h2>
                </div>
                <div className="row g-3 pt-4">
                    {
                        AiGenerateContents.map(AiGenerateContent => <SingleAiGenerateContent
                            key={AiGenerateContent.id}
                            AiGenerateContent={AiGenerateContent}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AiGenerateContents;