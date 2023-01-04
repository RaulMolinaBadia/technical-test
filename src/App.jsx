import './App.css'
import { CardDefault } from './components/CardDefault/index.jsx'
import { data } from './dataSamples/card'

function App () {
  return (
    <div>
      {data.map((items, i) => {
        return (
          <CardDefault
            key={i}
            name={items.name.first}
            surname={items.name.last}
            email={items.email}
            img={items.picture.medium}
          />
        )
      })}
    </div>
  )
}

export default App
