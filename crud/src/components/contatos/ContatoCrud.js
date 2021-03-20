import React from 'react';
import ContatoLista from './ContatoLista';
import ContatoConsulta from './ContatoConsulta';
import ContatoAltera from './ContatoAltera';

class ContatoCrud extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            objetos: contatos, 
            objSelecionado: null, 
            status: ETipoAcao.listando
        };
    }

    voltar = () => {
        this.setState( { status: ETipoAcao.listando } );
    };

    consultar = (objeto) => {
        this.setState({ objSelecionado: objeto, status: ETipoAcao.consultando });
    };

    alterar = (objeto) => {
        this.setState({ objSelecionado: objeto, status: ETipoAcao.alterando });
    };

    salvarAlteracao = (objeto) => {
        let objetoNoVetor = null;
        const objetos = this.state.objetos;

        for(let i=0; i < objetos.length; i++){
            if(objetos[i].ContatoId === objeto.ContatoId){
                objetoNoVetor = objetos[i];
            }
        }

        if(objetoNoVetor !== null){
            objetoNoVetor.Nome = objeto.Nome;
            objetoNoVetor.Numero = objeto.Numero;
        }

        this.setState({ objetos: objetos, status: ETipoAcao.listando});
    };

    renderComponent() {
        if(this.state.status === ETipoAcao.listando) {
            return(
                <div>
                    <button className="tiny ui green button">Incluir</button>
                    <ContatoLista objetos={this.state.objetos} consultar={this.consultar} alterar={this.alterar}/>
                </div>
            );
        }
        else if(this.state.status === ETipoAcao.consultando) {
            return <ContatoConsulta voltar={this.voltar} objeto={this.state.objSelecionado} />;
        }
        else if(this.state.status === ETipoAcao.alterando) {
            return <ContatoAltera voltar={this.voltar} objeto={this.state.objSelecionado} salvarAlteracao={this.salvarAlteracao} />;
        }
        else {
            return <div></div>
        }
    };

    render(){
        return(
            <div className="ui container">
                <h1>Contatos</h1>
                {this.renderComponent()}
            </div>
        );
    }
}

const contatos = [
    { ContatoId: 'c1', Nome: 'Jacinda', Numero: '888-8888' },
    { ContatoId: 'c2', Nome: 'Bejamin', Numero: '777-7777' },
    { ContatoId: 'c3', Nome: 'Boris', Numero: '333-3333' }
]

const ETipoAcao = Object.freeze({
    "carregando":1,
    "listando":2,
    "consultando":3,
    "incluindo":4,
    "alterando":5
});

export default ContatoCrud; 