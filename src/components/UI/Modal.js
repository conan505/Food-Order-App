import ReactDom from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const Overlay = (props) => {
    return <div className={classes.modal}>
        {props.children}
    </div>
}

const Modal = (props) => {
    const portalElement = document.getElementById("overlays")
    return <>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </>
}

export default Modal;