import Offcanvas from 'react-bootstrap/Offcanvas';

const Canvas = (props) => {
    return(
        <Offcanvas placement="start" backdrop={false} show={props.show} onHide={props.onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.desc}
          <p>fuk u</p>
        </Offcanvas.Body>
      </Offcanvas >
    )
}

export default Canvas;