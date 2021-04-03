import React from 'react';
import ButtonTemplate from "../Elements/Button/ButtonTemplate";
import { useDispatch } from "react-redux";
import { addNewItem } from '../../redux/actions/actions';

const Modal = (props) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addNewItem(props.image))
        props.clickModal();
    }
    return (
        <div className={'app-modal'}>
            <div className="app-modal__header">
                <ButtonTemplate
                    buttonText={'go home'}
                    clickEvent={props.clickModal}
                />
            </div>
            <div className="app-modal__content">
                <h2 className='app__title'>
                    { props.image.title }
                </h2>
                <img
                    src={props.image.thumbnailUrl}
                    alt={props.image.title}
                />
            </div>
            <div className='app-modal__footer'>
                <ButtonTemplate clickEvent={addToCart} buttonText={'Buy'}/>
            </div>
        </div>
    )
}

export default Modal
