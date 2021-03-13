import React from 'react';
import Cartao from './Cartao';
import api from '../apis/api';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objetos: [], status: 'carregando'}
    }

    componentDidMount() {
        api.get("cartoes")
            .then(resp => {
                this.setState({ objetos: resp.data, status: 'pronto'})
            });
    }

    render() {
        if(this.state.status === 'carregando')
        {
            return <div>carregando . . .</div>;
        }

        return (
            <div>
                {
                    this.state.objetos.map(obj => {
                        return <Cartao
                            key={obj.id}
                            foto={obj.foto}
                            nome={obj.nome}
                            membroDesde={obj.membroDesde}
                            frase={obj.frase}
                            numeroAmigos={obj.numeroAmigos}
                        />
                    })
                }
            </div>
        );
    }
};

export default App;