import { render, screen } from "@testing-library/react";
import {Quotes} from './Quotes';

export const quote = 'Carregando quote...';
export const speaker = 'test Speaker';


test('verify quote, author and button', () => {
    render(<Quotes quote={quote} speaker={speaker} />);

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(`- ${speaker}`);
    

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    


});

