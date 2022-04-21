import classes from './Modal.module.css'
import { Fragment } from 'react'
import reactDom from 'react-dom'

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>
}

const portalElement = document.getElementById("overlays")

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

function Modal(props) {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )

}

export default Modal