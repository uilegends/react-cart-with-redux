import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import CookieContainer from './components/CookieContainer';
import store from './redux/cakes/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <CookieContainer />
      </Provider>
    </div>
  );
}

export default App;
