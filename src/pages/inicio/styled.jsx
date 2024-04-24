import styled, { css } from "styled-components";


const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
background-color: #839697;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Container = styled.section`
width: 100%;
${center}
/* border: solid 2px red; */

@media (max-width: 500px) {
        height: 70vh;
    }
`

export const BoxInicio = styled.div`
/* border: solid 2px red; */
${center}
@media (max-width: 500px) {
        flex-direction: column-reverse;
        width: 100%;
        height: 50vh;
        justify-content: space-evenly;
    }
h1{
    font-size: 3vw;
    /* border: solid 1px white; */
    width: 40vw;
    color: white;
    @media (max-width: 700px) {
        font-size: 2rem;
    }
    @media (max-width: 500px) {
        font-size: 2rem;
        width: 100%;
        text-align: center;
    }
}
p{
   font-size: 2rem;
   /* border: solid 1px black; */
   width: 45vw;
   color: white;
   @media (max-width: 500px) {
        flex-direction: column-reverse;
        width: 100%;
        text-align: center;
        font-size: 1rem;
    }
    
}
img{
    width: 20vw;
    border-radius: 20px;
}
`