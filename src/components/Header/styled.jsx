import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
`



export const Header = styled.header`
/* border: solid 1px green; */
width: 15vw;
background-color: #4A5051;
@media (max-width: 750px) {
    width: 20vw;
}
@media (max-width: 500px) {
    width: 100%;
    height: 30vh;
}
`

export const BoxLogo = styled.div`
width: 100%;
height: 38vh;
color: white;
/* border: solid 1px pink; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
img{
    width: 10vw;
    border-radius: 50%;
}
@media (max-width: 500px) {
    height: 15vh;
    padding-left: 1rem;
    flex-direction: row;
}
`

export const Title = styled.h2`

width: 100%;
text-align: center;
`
export const Text = styled.p`

width: 100%;
text-align: center;
`

export const BoxMenu = styled.nav`
/* border: solid 1px gray; */
height: 38vh;
width: 100%;
li:nth-child(1){
    border-top: solid 1px white;
}
@media (max-width: 500px) {
    height: 15vh;
}
`
export const Lista = styled.li`
border-bottom: solid 1px white;
height: 12.6vh;
display: flex;
justify-content: center;
align-items: center;
a{
  color: white ;
}
@media (max-width: 500px) {
    height: 5vh;
    /* border: solid 1px yellow; */
}
`

export const BoxIcon = styled.div`
/* border: solid 1px yellow; */
height: 23.5vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
@media (max-width: 500px) {
   display: none;
}
`