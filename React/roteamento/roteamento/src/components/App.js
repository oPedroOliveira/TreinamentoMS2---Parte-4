import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
        <div>
            <button><Link to='/Sobre'>SOBRE</Link></button>
        </div>
        );
    }
}

export default App;