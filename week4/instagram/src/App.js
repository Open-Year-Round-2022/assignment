import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './Login.js';
import Mainpage from './Mainpage.js';

function App() {

  let history = useHistory();

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <div>
            <button onClick={()=>{ history.push('/login')}}>로그인페이지</button>
            <button onClick={()=>{ history.push('/mainpage') }}>메인페이지</button>
          </div>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/mainpage">
          <Mainpage></Mainpage>
        </Route>
        
      </Switch>

    </div>

  );
}

export default App;
