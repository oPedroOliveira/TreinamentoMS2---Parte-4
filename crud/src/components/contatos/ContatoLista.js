import React from 'react';

class ContatoLista extends React.Component {
    renderItens(){
        return(
            this.props.objetos.map(c => {
                return(
                    <tr key={c.contatoId}>
                        <td>{c.nome}</td>
                        <td>
                            <button onClick={() => this.props.consultar(c)} className="tiny ui orange button">Consultar</button>
                            <button onClick={() => this.props.alterar(c)} className="tiny ui blue button">Alterar</button>
                            <button onClick={() => this.props.deletar(c.contatoId)} className="tiny ui red button">Excluir</button>
                        </td>
                    </tr>
                );
            })
        );
    }

    render(){
        return(
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItens()}
                </tbody>
            </table>
        );
    }
}

export default ContatoLista;