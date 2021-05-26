import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Create from "./Create";
import Edit from "./Edit";
import Search from "./Search";
import "./style.css";

Modal.setAppElement("#root");

const chooseModal = (data, setData, modal, setModal) => {
    switch (modal.type) {
        case "task":
            return (
                <Edit
                    data={data}
                    setData={setData}
                    modal={modal}
                    setModal={setModal}
                />
            );
        case "search":
            return <Search data={data} setModal={setModal} />;
        case "create":
            return <Create data={data} setData={setData} setModal={setModal} />;
    }
};

const ModalComponent = ({ data, setData, modal, setModal }) => {
    const customStyles = {
        overlay: {
            overflowY: "scroll",
            background: "rgba(9, 30, 66, 0.54)",
        },
        content: {
            inset: "unset",
            border: "0",
            padding: "0",
            position: "relative",
            maxWidth: "750px",
            margin: "60px auto",
        },
    };
    return (
        <Modal
            isOpen={modal.visibility}
            contentLabel="Modal"
            ariaHideApp={false}
            style={customStyles}
            onRequestClose={() => setModal({ visbility: false, issueId: null })}
            shouldCloseOnOverlayClick={true}
        >
            {chooseModal(data, setData, modal, setModal)}
        </Modal>
    );
};

export default ModalComponent;
