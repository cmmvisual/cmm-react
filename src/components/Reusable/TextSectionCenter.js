import './TextSectionCenter.css';
import SplitHeadline from './SplitHeadline';

function TextSectionCenter({ title, paragraphs }) {
  return (
    <section className='text-section-center'>
        <div className='text-content-inner'>
            {title && <SplitHeadline tag="h2" className="section-title">{title}</SplitHeadline>}
            
            {paragraphs.map((text, index) => (
                <p key={index} className="section-paragraph">
                    {text}
                </p>
            ))}
        </div>
    </section>
  );
}

export default TextSectionCenter;