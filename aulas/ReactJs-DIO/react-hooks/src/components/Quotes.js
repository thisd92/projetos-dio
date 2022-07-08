import styled from 'styled-components';
import { Button } from './Button';
import { string } from 'prop-types';

export const Quotes = (props) => {
    return(
        <Wrapper>
            <Quote>{props.quote}</Quote>
            <Speaker>{props.speaker}</Speaker>
            <Button>Quote no Jutsu</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`