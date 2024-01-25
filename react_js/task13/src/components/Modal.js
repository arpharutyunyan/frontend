import React, {useCallback, useRef, useState} from 'react';
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

function Modal(props) {
    const images = [
        "./assets/images/img1.jpg",
        "./assets/images/img2.jpg",
        "./assets/images/img3.jpg",
        "./assets/images/img4.jpg",
        "./assets/images/img5.jpeg"
    ];

    const [index, setIndex] = useState(0);
    const modalContentRef = useRef();
    const {onClose} = props;

    const handleClick = useCallback((e) => {
        if (e.target && !modalContentRef.current.contains(e.target)) {
            onClose();
        }
    }, [onClose]);

    const handleImageClick = useCallback((index) => {
        setIndex(index);
    }, []);

    return (
        <div className="modal" onClick={(e) => handleClick(e)}>
            <div className="content" ref={modalContentRef}>
                <button onClick={onClose}>Close</button>
                <Carousel
                    slideIndex={index}
                    renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                        <button onClick={previousSlide}  className="left_arrow" disabled={currentSlide === 0}>
                            <i className="fa fa-arrow-left" />
                        </button>
                    )}
                    renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => (
                        <button onClick={nextSlide} className="right_arrow" disabled={currentSlide === slideCount - 1}>
                            <i className="fa fa-arrow-right"/>
                        </button>
                    )}
                    renderBottomCenterControls={({ currentSlide }) => (
                        <div className="bottom-images">
                            {
                                images.map((elem, index) => (
                                    <img key={index}
                                         src={elem}
                                         alt=''
                                         className={currentSlide === index ? 'active' : ''}
                                         onClick={() => handleImageClick(index)}
                                    />
                                ))
                            }
                        </div>
                    )}
                >
                    {
                        images.map((elem, index) => (
                            <img key={index} src={elem} alt='' className="dots"/>
                        ))
                    }
                </Carousel>
            </div>

        </div>
    );
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
    onClose: () => {
    }
};