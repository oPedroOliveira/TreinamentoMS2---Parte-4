import React from 'react';
import api from '../../apis';

class ContatoAltera extends React.Component {
    constructor(props) {
        super(props);

        if(props.incluindo) {
            this.state = { objeto: { nome: "" }, carregando: false };
        }
        else {
            this.state = { objeto: { nome: "" }, carregando: true };
        }
    }

    componentDidMount() {
        if(this.props.incluindo === false) {
            api.get(`/api/contato/${this.props.id}`)
            .then(result => {
                this.setState({ objeto: result.data, carregando: false });
            });
        }    
    }
    
    salvar = (e) => {
        this.props.salvarAlteracao(this.state.objeto);
    }

    alteraProp = (nomeProp, valorProp) => {
        let obj = this.state.objeto;
        obj[nomeProp] = valorProp;
        this.setState({ objeto: obj });
    };

    render() {
        if ( this.state.carregando ) {
            return <div>Carregando . . .</div>
        }

        const obj = this.state.objeto;

        return(
            <div>
                <button onClick={() => {this.props.voltar()}} className="tiny ui grey button">Voltar</button>
                <form className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input onChange={(e) => this.alteraProp("nome", e.target.value)} value={obj.nome} type="text" />
                        </div>
                    </div>
                </form>
                <button onClick={this.salvar} className="tiny ui yellow button">Salvar</button>      
            </div>
        );
    }
}

export default ContatoAltera;