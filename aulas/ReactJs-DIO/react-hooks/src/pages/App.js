import styled from 'styled-components';
import narutoImg from '../images/naruto.png';
import { Quotes } from '../components/Quotes';

export function App(){
    return (
        <Content>
            <Quotes quote={'Teste'} speaker={'Speaker'} />
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