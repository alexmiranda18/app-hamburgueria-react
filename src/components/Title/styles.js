import styled from "styled-components";

export const H1 = styled.h1`


font-weight: bold;

text-align: center;
color: #FFFFFF;
margin-bottom: ${ props => props.isBack ? '30px' : '98px'};
margin-top: ${ props => props.isBack && '36px'};

font-size: 28px;
font-style: normal;
line-height: normal;

`;
