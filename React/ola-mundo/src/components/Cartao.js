import React from 'react';
import faker from 'faker';

const Cartao = (props) => {
    return (
        <div className="ui card">
            <div className="image">
                    <img src={props.foto} />
            </div>
            <div className="content">
                <a className="header">{props.nome}</a>
                <div className="meta">
                <span className="date">Joined in {props.membroDesde}</span>
                </div>
                <div className="description">
                {props.frase}
                </div>
            </div>
            <div className="extra content">
                <a>
                <i className="user icon"></i>
                {props.numeroAmigos} Friends
                </a>
            </div>
        </div>
    );
};

export default Cartao;