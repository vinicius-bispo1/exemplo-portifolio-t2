import Header from '../../components/Header/Header'
import * as S from "./styled"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.BoxInicio>
          <div>
        <h1>Olá meu nome e Marquinho sou dev front-end</h1>
        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
        </div>
        <img src="https://img.odcdn.com.br/wp-content/uploads/2024/03/mark-zuckerberg.jpg" alt="" />
       </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
