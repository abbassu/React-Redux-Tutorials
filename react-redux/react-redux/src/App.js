import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './component/HooksCakeContainer';
import HooksIceContainer from './component/HooksIceContainer';
import NewCakeContainer from './component/NewCakeContainer';
import ItemContainer from './component/itemContainer';
import Ff from './component/ff';
import Usercontainer from './component/Usercontainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <HooksCakeContainer/>
          {/* <CakeContainer/> */}
          <HooksIceContainer/>
          {/* <NewCakeContainer/> */}
          <ItemContainer cake/>
          <ItemContainer/>
          <Usercontainer/>
          {/* <Usercontainer/> */}

      </div>
    </Provider>

  );
}

export default App;
