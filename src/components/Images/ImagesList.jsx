import React from 'react';
import ImagesItem from './Item/ImagesItem';
import classes from './imagesList.module.scss'

const ImagesList = (props) => {
    const { imagesList } = props;
    return (
        <div className={classes.appImagesList}>
            {
                imagesList.map(image => (
                    <ImagesItem
                        key={image.id}
                        image={image}
                    />
                ))
            }
        </div>
    )
}

export default ImagesList;
