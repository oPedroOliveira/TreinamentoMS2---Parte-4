import React from 'react';
import ContatoLista from './ContatoLista';
import ContatoConsulta from './ContatoConsulta';
import ContatoAltera from './ContatoAltera';
import api from "../../apis";

class ContatoCrud extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            objetos: [], 
            objSelecionado: null, 
            status: ETipoAcao.carregando
        };
    }

    componentDidMount() {
        this.listarDados();
    }

    listarDados = () => {
        api.get("/api/contato")
        .then(result => {
            //console.log(result.data);
            this.setState({ objetos: result.data, status: ETipoAcao.listando })
        });
    };

    voltar = () => {
        this.setState( { status: ETipoAcao.listando } );
    };

    incluir = () => {
        this.setState({ status: ETipoAcao.incluindo });
    };

    salvarInclusao = (objeto) => {
        api.post("/api/contato", objeto)
        .then(result => {
            //console.log(result.status);
            if(result.status === 201) {
                this.setState({ status: ETipoAcao.carregando })
                this.listarDados();
            }
        });
    };

    consultar = (objeto) => {
        this.setState({ objSelecionado: objeto, status: ETipoAcao.consultando });
    };

    alterar = (objeto) => {
        this.setState({ objSelecionado: objeto, status: ETipoAcao.alterando });
    };

    salvarAlteracao = (objeto) => {
        // let objetoNoVetor = null;
        // const objetos = this.state.objetos;

        // for(let i=0; i < objetos.length; i++){
        //     if(objetos[i].ContatoId === objeto.ContatoId){
        //         objetoNoVetor = objetos[i];
        //     }
        // }

        // if(objetoNoVetor !== null){
        //     objetoNoVetor.Nome = objeto.Nome;
        //     objetoNoVetor.Numero = objeto.Numero;
        // }

        api.put(`/api/contato/${objeto.contatoId}`, objeto)
        .then(result => {
            //console.log(result);
            if(result.status === 204) {
                this.setState({ status: ETipoAcao.carregando })
                this.listarDados();
            }
        });
    };

    deletar = (id) => {
        // const objetos = this.state.objetos;
        // let indice = -1;

        // for(let i=0; i < objetos.length; i++){
        //     if( objetos[i].ContatoId === id ) {
        //         indice = i;
        //     }
        // }

        // if( indice >= 0 ) {
        //     objetos.splice(indice, 1);
        // }

        // this.setState({ objetos: objetos });

        api.delete(`/api/contato/${id}`)
        .then(result => {
            //console.log(result);
            if(result.status === 204) {
                this.setState({ status: ETipoAcao.carregando })
                this.listarDados();
            }
        });
    };

    renderComponent() {
        if(this.state.status === ETipoAcao.listando) {
            return(
                <div>
                    <button onClick={this.incluir} className="tiny ui green button">Incluir</button>
                    <ContatoLista objetos={this.state.objetos} consultar={this.consultar} alterar={this.alterar} deletar={this.deletar} />
                </div>
            );
        }
        else if(this.state.status === ETipoAcao.incluindo) {
            return <ContatoAltera incluindo={true} salvarAlteracao={this.salvarInclusao} voltar={this.voltar} />;
        }
        else if(this.state.status === ETipoAcao.consultando) {
            return <ContatoConsulta voltar={this.voltar} id={this.state.objSelecionado.contatoId} />;
        }
        else if(this.state.status === ETipoAcao.alterando) {
            return <ContatoAltera incluindo={false} voltar={this.voltar} id={this.state.objSelecionado.contatoId} salvarAlteracao={this.salvarAlteracao} />;
        }
        else {
            return <div>Carregando. . . </div>
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

// const contatos = [
//     { ContatoId: 'c1', Nome: 'Jacinda', Numero: '888-8888' },
//     { ContatoId: 'c2', Nome: 'Bejamin', Numero: '777-7777' },
//     { ContatoId: 'c3', Nome: 'Boris', Numero: '333-3333' }
// ]

const ETipoAcao = Object.freeze({
    "carregando":1,
    "listando":2,
    "consultando":3,
    "incluindo":4,
    "alterando":5
});

export default ContatoCrud; 