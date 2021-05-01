import data from './data';
import People from './components/people.js'

const { people } = data;

var App = () => {
  return (
    <div className="App">
    {
      People(people)
    }
    </div>
  );
}

export default App;