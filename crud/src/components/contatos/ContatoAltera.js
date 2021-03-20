import React from 'react';

class ContatoAltera extends React.Component {
    constructor(props) {
        super(props);
        this.state={ objeto: props.objeto }
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
        const obj = this.props.objeto;

        
        
        return(
            <div>
                <button onClick={() => {this.props.voltar()}} className="tiny ui grey button">Voltar</button>
                <form className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input onChange={(e) => this.alteraProp("Nome", e.target.value)} value={obj.Nome} type="text" />
                        </div>
                        <div>
                            <label>Número</label>
                            <input onChange={(e) => this.alteraProp("Numero", e.target.value)} value={obj.Numero} type="text" />
                        </div>
                    </div>
                </form>
                <button onClick={this.salvar} className="tiny ui yellow button">Salvar</button>      
            </div>
        );
    }
}

export default ContatoAltera;