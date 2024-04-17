import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/link.png"
import git from "../../assets/git.png"
import face from "../../assets/face.png"

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="" />
        <S.Title>Marquinho</S.Title>
        <S.Text>Front-end Developer</S.Text>
      </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <S.Lista><Link to="/">Inicio</Link></S.Lista>
                <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                <S.Lista><Link to="/projeto">Projetos</Link></S.Lista>
            </ul>
        </S.BoxMenu>

        <S.BoxIcon>
          <a href=""><img src={linkedin} alt="" /></a>
          <a href=""><img src={git} alt="" /></a>
          <a href=""><img src={face} alt="" /></a>
        </S.BoxIcon>

    </S.Header>
  )
}
