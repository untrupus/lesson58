import React, {useState} from 'react';
import './App.css';
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import Alert from "../components/Alert/Alert";

function App() {

    const [show, setShow] = useState(false);
    const [close, setClose] = useState(true);

    const showModal = () => {
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }

    const continueBtn = () => {
        window.alert('You jmyaknul on "Continue" button.');
    }

    const alertClose = () => {
        setClose(false);
    }

    const btnProperties = [
        {type: 'primary', label: 'Continue', clicked: continueBtn},
        {type: 'danger', label: 'Close', clicked: closeModal}
    ];

    let buttons = btnProperties.map((property) => {
        return (
            <Button
                color={property.type}
                click={property.clicked}
            >
                {property.label}
            </Button>
        );
    })

    return (
        <div className="App">
            <Button
                color={btnProperties[0].type}
                click={showModal}

            >
                Open modal
            </Button>
            <Modal
                title="Some kinda modal title"
                show={show}
                closed={closeModal}
            >
                <p>This is modal content</p>
                {buttons}
            </Modal>

            <Alert
                type='primary'
                dismiss={alertClose}
                show={close}
            >
                This is a primary type alert
            </Alert>
            <Alert
                type='success'
                show={close}
            >
                This is a success type alert
            </Alert>
            <Alert
                type='danger'
                dismiss={alertClose}
                show={close}
            >
                This is a danger type alert
            </Alert>
            <Alert
                type='warning'
                show={close}
            >
                This is a warning type alert
            </Alert>

        </div>
    );
}

export default App;
