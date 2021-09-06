import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        ratione aperiam, alias quas ab eaque illum! Nulla voluptates doloremque
        quis ea sapiente culpa. Dolorum quasi adipisci maxime impedit temporibus
        tenetur?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
