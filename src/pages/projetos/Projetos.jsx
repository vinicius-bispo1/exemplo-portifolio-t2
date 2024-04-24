import * as S from "./styled"
import Header from '../../components/Header/Header'
import Carrosel from "react-elastic-carousel"

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <S.BoxProjetos>
        <S.BoxImg>
          <Carrosel itemsToShow={2}>
          <img src="https://g1.globo.com/Noticias/Tecnologia/foto/0,,22509440-FMM,00.jpg" alt="" />
          <img src="https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2016/05/netflix.jpg?fit=1060%2C597&ssl=1" alt="" />
          <img src="https://store-images.s-microsoft.com/image/apps.33401.13510798887167234.ac7a8ac8-9ca9-4f4d-b67f-eaa709be3ed2.1b34c3b2-d028-4d15-b2c6-a5ae5f4c0d7a?h=576" alt="" />
          <img src="https://abcdoabc.com.br/wp-content/uploads/app-coco-bambu_f962df7b.jpg" alt="" />
        </Carrosel>
        </S.BoxImg>
      </S.BoxProjetos>
    </S.Main>
  )
}
