import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
position: relative;
z-index:0;
margin: 10px;
padding: 5px;
display: flex;
flex-direction:column;
justify-items:center;
align-items:center;
width:220px;
height:250px;

border-radius:6px;
box-shadow: 10px 9px 32px -12px rgba(0,0,0,0.2);

background:linear-gradient(to bottom, 	#87CEEB 30%, #F0F8FF 30%) ;

`

export const Image = styled.img`
margin:35px 0;
width:60px;
height:60px;
border-radius:50px;
padding:2px;
`

export const Name = styled.p`
width:220px;
height:30px;
padding: 2px;
overflow:hidden;
margin:0;

font-weight:bold;
`

export const Phone = styled.p`
width:120px;
padding: 2px;
overflow:hidden;
margin-top:10px;

font-style:italic;
font-weight:100px;
`

export const Number = styled.a`
position: absolute;
bottom:5px;
left:50%;
transform:translateX(-50%);
width:120px;
padding: 2px;
overflow:hidden;

`

export const FlexContact = styled.div`

display: flex;
flex-direction:column;
`

export const Button = styled.button`
position:absolute;
top:5px;
right:5px;
width:25px;
height: 25px;
padding: 0;
margin:3px;
border-radius:50px;
outline:none;
border:none;
overflow:hidden;
cursor: pointer;
/* background-color:#b1bbdb */
`