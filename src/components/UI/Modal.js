import ReactDom from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}
const Overlay = (props) => {
    return <div className={classes.modal}>
        {props.children}
    </div>
}

const Modal = (props) => {
    const portalElement = document.getElementById("overlays")
    return <>
        {ReactDom.createPortal(<Backdrop />, portalElement)}
        {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </>
}

export default Modal;