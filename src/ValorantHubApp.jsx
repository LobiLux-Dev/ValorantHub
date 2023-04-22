import { Container } from 'react-bootstrap'

import { CardList } from './components/CardList'

export const ValorantHubApp = () => {
  return (
    <Container className='mx-auto row justify-content-center py-1' >
      <CardList />
    </Container>
  )
}
