import styled from "styled-components";


export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const BoxProjetos = styled.section`
/* border: solid 2px red; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url("https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2016/05/netflix.jpg?fit=1060%2C597&ssl=1");
background-repeat: no-repeat;
background-size: cover;
/* opacity: .5; */
position: relative;
z-index: 0;
`

export const BoxImg = styled.div`
/* border: solid 2px green; */
width: 70vw;
position: absolute;
z-index: 3;

img{
    width: 20vw;
}
`