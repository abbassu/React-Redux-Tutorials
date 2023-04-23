import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './component/HooksCakeContainer';
import HooksIceContainer from './component/HooksIceContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
          {/* <CakeContainer/> */}
          <HooksIceContainer/>
      </div>
    </Provider>

  );
}

export default App;
