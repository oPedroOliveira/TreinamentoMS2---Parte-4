import React from 'react';
import api from '../../apis';

class ContatoConsulta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objeto: { nome: ""}, carregando: true };
    }

    componentDidMount() {
        api.get(`/api/contato/${this.props.id}`)
        .then(result => {
            this.setState({ objeto: result.data, carregando: false });
        });
    }
        
    render() {
        if ( this.state.carregando ) {
            return <div>Carregando . . .</div>
        }

        const obj = this.state.objeto;
        
        return(
            <div>
                <button onClick={() => {this.props.voltar()}} className="tiny ui grey button">Voltar</button>
                <div className="ui form">
                    <div>
                        <label>Nome</label>
                        <input className="disabled field" readOnly value={obj.nome} type="text" />
                        </div>
                </div>      
            </div>
        );
    }

}

export default ContatoConsulta;