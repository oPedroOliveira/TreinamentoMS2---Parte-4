import React from 'react';
import faker from 'faker';

const Cartao = () => {
    return (
        <div className="ui card">
            <div className="image">
                    <img src={faker.image.fashion()} />
            </div>
            <div className="content">
                <a className="header">{faker.name.findName()}</a>
                <div className="meta">
                <span className="date">Joined in {faker.date.past().getFullYear()}</span>
                </div>
                <div className="description">
                {faker.lorem.sentence()}
                </div>
            </div>
            <div className="extra content">
                <a>
                <i className="user icon"></i>
                {faker.random.number(3000)} Friends
                </a>
            </div>
        </div>
    );
};

export default Cartao;