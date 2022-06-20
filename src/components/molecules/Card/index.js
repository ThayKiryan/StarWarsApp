import React from 'react'
import { CardContainer, CardImage } from './styles'

const sizes = {
  small: {
    h: 124,
    w: 88,
  },
  large: {
    h: 150,
    w: 102,
  },
}

export const Card = ({ item, size }) => {

  return (
    <CardContainer
      onPress={() => onSelectItem()}
      size={size ? sizes[size] : sizes.small}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}