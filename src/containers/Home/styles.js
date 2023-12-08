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
margin-top: 11px;
`;
export const ContainerItens = styled.div`
border-radius: 61px 61px 0px 0px;
background: transparent;
 margin-top: 25px;
 display: flex;
 flex-direction: column;
 height: 100vh;
 
 `;

export const InputLabel = styled.p`
color: #EEEEEE;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: left;
 margin-left:30px;
  
  
`;

export const Input = styled.input`

background: rgba(255,255,255,0.25);
width: 342px;
height: 58px;
padding: 19px 139px 18px 15px;
margin-left: 15px;
outline: none;
border:none;
border-radius:14px;
padding-left:15px;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
color: #FFF;

`;
export const StyledInput = styled(Input)`
  margin-bottom: 64px;
  
background: rgba(255,255,255,0.25);
width: 342px;
height: 58px;
padding: 19px 139px 18px 15px;
margin-left: 15px;
margin-bottom:64px;
outline: none;
border:none;
border-radius:14px;
padding-left:15px;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
color: #FFF;

`;