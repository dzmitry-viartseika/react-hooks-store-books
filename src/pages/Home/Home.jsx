import React, { useState, useEffect } from 'react';
import ImagesList from '../../components/Images/ImagesList'
import { Link } from 'react-router-dom';
import classes from './home.module.scss';
import ButtonTemplate from "../../components/Elements/Button/ButtonTemplate";
import imagesApi  from '../../api/imagesApi/api';

const Home = () => {
    const [imagesListValue, setImagesList] = useState([]);

    const getImagesList = async () => {
        try {
            const { data } = await imagesApi.getImagesList()
            setImagesList(data)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getImagesList()
    }, []);

    return (
        <>
            <div className={classes.appHome}>
                <h2 className={'app__title'}>
                    Nile Book Store
                </h2>
                <p>
                    Please click on a book to view details in a modal.
                    You can copy/past the link of the modal.
                    The link will open book on a separate page
                </p>
                <ImagesList imagesList={imagesListValue}/>
                <Link to={'/cart'}>
                    <ButtonTemplate buttonText={'Cart'}/>
                </Link>
            </div>
        </>
    )
}

export default Home;
