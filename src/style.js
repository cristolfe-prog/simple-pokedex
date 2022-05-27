import styled from 'styled-components'

export const Body = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
background: #0E0E0E;
width:100vw;
height:100vh;

form{
    display:flex;
    flex-direction:row;
}


`

export const ContainerItems = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:10px;
background:#2F2F2F;
width:100vw;
height:100vh;
justify-content:start;

@media screen and (max-width: 770px) {
    h1{
        color:red;
    }
}

h1 {
    font-size: 20px;
    color:#FFFFFF;
    margin-bottom:10px;
   
}
p {
    color:#FFFFFF;
    font-size:14px;
    margin-bottom:10px;
}

input {
    width:240px;
    height:50px;
    display:flex;
    border:none;
    padding-left:10px;
    border-bottom-left-radius:10px;
    border-top-left-radius:10px;
    

}

input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 



button {
    width:155px;
    height:50px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:30px;
    border:none;
    color:#FFFFFF;
    font-size:20px;
    background:#E3350C;
    cursor:pointer;
    margin-bottom:30px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;


}

button:hover {
    opacity:0.9;
}

button:active {
    opacity:0.6;
}

span {
    font-size:18px;
}
`


export const Info = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:10px;
margin-bottom:30px;

img {
    width:85px;
    height:85px;
}
`

export const Loading = styled.div`
height:25px;
width:25px;
border-top:4px solid #FFF;
border-right: 4px solid transparent;
border-radius:50%;
animation: 0.5s spin linear infinite;

@keyframes spin {
    from {
        transform:rotate(0deg);
    }

    to {
        transform:rotate(360deg)
    }
}

`

export const Result = styled.div `
width: 440px;
height: 340px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display:flex;
flex-direction:column;
align-items:center;
color:#EEE;
padding-top:25px;
font-size:18px;



h2 {
    font-size:30px;
    font-weight:500;
}

img {   
    margin-top: 35px;
    margin-bottom: 20px;
    width: 175px;
    height: 175px;
}



`

export const InfoImage = styled.div `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`