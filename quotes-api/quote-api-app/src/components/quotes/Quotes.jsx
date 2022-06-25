import { string } from 'prop-types';


export const Quotes = ({quote, speaker}) => (

    
        <div className='textQuote'> {quote}
            <div className="speaker"> - {speaker}</div>
        </div>

)

Quotes.propTyper = {
    quote: string,
    speaker: string
};

export default Quotes