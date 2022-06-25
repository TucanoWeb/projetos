import { render, screen, fireEvent } from "@testing-library/react";
import SpeakerButton from './SpeakerButton';

test('verify button with text', () => {
    render(<SpeakerButton /> );

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeInTheDocument();

});

test('verify active function', () => {
    const callback = jest.fn();
    
    render (<SpeakerButton outUpdate={callback}/>);

    const buttonEL = screen.getByRole('button');

    fireEvent.click(buttonEL);

    expect(callback).toHaveBeenCalledTimes(1);

});