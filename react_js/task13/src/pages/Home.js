import React, {useCallback, useState} from 'react';
import * as ReactDom from "react-dom";
import Modal from "../components/Modal";

function Home(props) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <div className="home">
            <button onClick={handleOpenModal}>Click to open modal</button>
            {
                showModal ? ReactDom.createPortal(
                    <Modal onClose={handleCloseModal}/>,
                    document.body
                ) : null
            }
        </div>
    );
}

export default Home;