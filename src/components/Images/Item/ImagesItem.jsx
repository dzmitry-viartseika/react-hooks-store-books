import React, { useState } from 'react';
import classes from './imagesItem.module.scss'
import Modal from "../../Modal/Modal";

const ImagesItem = ({image}) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const clickModal = () => {
        setIsVisibleModal(!isVisibleModal);
    }

    return (
        <>
            <div className={classes.appImagesItem}>
                <h2 className={classes['appImagesItem__title']}>
                    { image.title }
                </h2>
                <img
                    onClick={clickModal}
                    src={image.thumbnailUrl}
                    alt={image.title}
                />
            </div>
            {
                isVisibleModal ? <Modal
                    image={image}
                    clickModal={clickModal}
                /> : null
            }
        </>
    )
};

export default ImagesItem
