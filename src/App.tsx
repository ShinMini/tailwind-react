import * as D from './data'

function App() {

  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} alt="random avatar" height="50" />
      <img src={D.randomImage()} alt="random image" height="300" />
    </div>
  )
}

export default App
