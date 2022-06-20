import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { ListContainer } from './styles'
import { theme } from '~/styles/theme'

const FAKE_DATA = [
  {
    id: 0,
    image_url: 'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
  },
  {
    id: 1,
    image_url: 'https://static.wikia.nocookie.net/ptstarwars/images/6/6c/2511.jpg/revision/latest/top-crop/width/360/height/450?cb=20121107230903',
  },
]

export const HomeList = ({ data, title, type }) => {
  return (
    <ListContainer>
      <Text ml={24} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={{ item }} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  )
}