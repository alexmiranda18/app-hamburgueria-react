import styled from 'styled-components'

export const Button = styled.button`
background:${ props => props.isBack ? 'rgba(255, 255, 255, 0.14);' : '#D93856'} ;
width: 342px;
height: 68px;
margin-top: 76px;
border:none;
font-style:normal;
font-weight:900;
font-size:17px;
line-height: 2.5px;
text-align:center;
color:#FFFFFF;
margin-bottom:50px;
cursor: pointer;
margin-left:${ props => props.isBack ? 'none;' : 'auto'};
gap: 20px;
&:hover{
    opacity:0.8;
}
&:active{
    opacity:0.5;
}
`;