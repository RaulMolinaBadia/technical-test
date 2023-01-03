import './App.css'
import { CardContainer } from './components/Card/index.jsx'
import {data} from './dataSamples/card'

function App () {
  return data.map((items, i) => {
    const propsCard = {
      card: {
        key: i,
        name: items.name.first,
        surname: items.name.last,
        email: items.email,
        img: {
          src: items.picture.medium,
          alt: items.name.first
        }
      }
    }
    return <CardContainer props={propsCard} />
  })
}

export default App
