import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../images/naruto.png';
import { Quotes } from '../components/Quotes';
import { getQuote } from '../services/quoteService/quotesService';
import jutsuSound from '../sounds/jutsu.mp3';

const audioJutsu = new Audio(jutsuSound);

export function App(){
    const isMounted = useRef(true);

    const [quote, setQuote] = useState({
        quote: 'loading quote...',
        speaker: 'loading speaker...'
    });
    
    const onUpdate = async () => {
        const quote = await getQuote();

        if(isMounted.current){
            audioJutsu.play();
            setQuote(quote);
        };
    }

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Content>
            <Quotes {...quote} onUpdate={onUpdate} />
            <NarutoImg src={narutoImg} alt="Naruto"/>
        </Content>
    )
}

const Content = styled.div`
    height: 100vh;
    padding: 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NarutoImg = styled.img`
    max-width: 50vw;
    max-height: 70vh;
    align-self: flex-end;
    margin-right: 80px
`;