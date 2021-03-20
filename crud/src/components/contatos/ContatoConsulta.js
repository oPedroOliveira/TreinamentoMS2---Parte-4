import React from 'react';

class ContatoConsulta extends React.Component {
    
    render() {
        const obj = this.props.objeto;
        
        return(
            <div>
                <button onClick={() => {this.props.voltar()}} className="tiny ui grey button">Voltar</button>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className="disabled field" readOnly value={obj.Nome} type="text" />
                        </div>
                        <div>
                            <label>Número</label>
                            <input className="disabled field" readOnly value={obj.Numero} type="text" />
                        </div>
                    </div>
                </div>      
            </div>
        );
    }

}

export default ContatoConsulta;