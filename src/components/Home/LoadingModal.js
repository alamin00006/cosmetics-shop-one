import Modal from "react-bootstrap/Modal";
import { PropagateLoader } from "react-spinners";

function LoadingModal({ setShow, show }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        className=""
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <PropagateLoader size={13} speedMultiplier={0.8} color="#36d7b7" />{" "}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoadingModal;
