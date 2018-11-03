import styled from 'styled-components'
import {
  colors,
  elevation,
  transition
} from '../Utilities'

const Card = styled.div`
  color: ${colors.teal}
  background: white;
  border-radius: 5px;
  padding: 15px;
  ${elevation[4]};
  ${transition({
    property: 'box-shadow',
    ease: 'ease-in'
  })}
  
  &:hover {
      ${elevation[5]};
  }
`

export default Card;