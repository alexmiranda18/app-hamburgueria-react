import styled from 'styled-components'


export const Container = styled.div`
 background: #0A0A10;
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 min-height: 100vh;
 width: 100%;
`;

export const Image = styled.img`
background:transparent;
`;

export const ContainerItens = styled.div`
border-radius: 61px 61px 0px 0px;
background: transparent;
 margin-top: 25px;
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 width: 100%;
`;

export const Order = styled.li`
display: flex;
border-radius: 14px;
background: rgba(255,255,255,0.25);
width: 342px;
height: 101px;
outline: none;
border:none;
margin-bottom: 18px;
flex-wrap: wrap;
flex-direction: column;
align-content: stretch;
justify-content: center;

button{
    align-self: flex-end;
    margin-right:15px;
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover{
    opacity:0.8;
}
&:active{
    opacity:0.5;
}
    };
`;

export const Description = styled.p`
 font-style: normal;
 font-weight: ${props => props.isBack ? '400' : '100'};
 font-size: 18px;
 color:#FFFFFF;
 margin-top: ${props => props.isBack ? '21px' : '10px'};
 margin-left:27px;
 max-width: 225px; 
`;
