import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Sobre from './components/Sobre';
import Erro404 from './components/Erro404'; 
import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Sobre" exact={true} component={Sobre} />
            <Route path="*" component={Erro404} />
        </Switch>
    </BrowserRouter>
), document.querySelector("#root"));
