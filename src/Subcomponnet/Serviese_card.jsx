import React from 'react';

const Serviese_card = (props) => {
    return (
        <div
            style={{ height: props.height, width: props.width }}
            className={props.containerClass}
        >
            <p className={props.countClass}>
                {props.count}
            </p>

            <div className={props.contentClass}>
                <h1 className={props.titleClass}>
                    {props.text}
                </h1>
                <p className={props.descClass}>
                    {props.description}
                </p>
            </div>

            <img className={props.imageClass} src={props.img} alt="" />
            <div className={props.overlayClass}></div>
        </div>
    );
};

export default Serviese_card;
