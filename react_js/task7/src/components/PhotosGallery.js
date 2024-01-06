import React from 'react';
import PropTypes from "prop-types";

function PhotosGallery(props) {
    return (
        <div className="photosGallery">
            {
                props.photos.map((element) => (
                    <div className="photo" key={element.id} data-id={element.id}>
                        <img src={element.urls.regular} alt=''/>
                        <div className="layer">
                            <div className="photo__info">
                                <p className='photo__title'>{element.user.name}</p>
                                <p>{element.likes} likes</p>
                            </div>
                            <div className="photo__icon">
                                <img src={element.user.profile_image.small} alt=''/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default PhotosGallery;

PhotosGallery.propTypes = {
    photos: PropTypes.array.isRequired,
};

PhotosGallery.defaultProps = {
    photos: [],
};