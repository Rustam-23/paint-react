import React, { useEffect, useRef, useState } from "react";
import '../styles/canvas.scss';
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import toolState from "../store/toolState";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Rect from "../tools/Rect";

const Canvas = observer(() => {
  const canvasRef = useRef()
  const usernameRef = useRef()
  const [modalShow, setModalShow] = useState(true);
  const params = useParams();
  
  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
  }, [])

  useEffect(() => {
    if (canvasState.username) {
      const socket = new WebSocket(`ws://localhost:5000/`)
      canvasState.setSocket(socket)
      canvasState.setSessionid(params.id)
      toolState.setTool(new Brush(canvasRef.current, socket, params.id))

      socket.onopen = () => {
        console.log("Connect")
        socket.send(JSON.stringify({
          id: params.id,
          username: canvasState.username,
          method: "connection"
        }))
      }
      socket.onmessage = (event) => {
        let msg = JSON.parse(event.data)
        switch (msg.method) {
          case "connection": 
            console.log(`User ${msg.username} is connecting`)
            break;
          case "draw": 
            drawHandler(msg)
            break;
        }
      }
    }
  }, [canvasState.username])
  
  const drawHandler = (msg) => {
    const figure = msg.figure
    const ctx = canvasRef.current.getContext("2d")
    switch (figure.type) {
      case "brush":
        Brush.draw(ctx, figure.x, figure.y)
        break;
      case "rect":
        Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height)
        break;
      case "finish":
        ctx.beginPath()
        break;
    }
  }
  
  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  const connectHandler = () => {
    canvasState.setUsername(usernameRef.current.value)
    setModalShow(false)
  } 
  
  return (
    <div className="canvas">

      <Modal show={modalShow} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>What's your name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input ref={usernameRef} type="text"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => connectHandler()}>
            Enter
          </Button>
        </Modal.Footer>
      </Modal>
      <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={600}>
      </canvas>
    </div>
  );
});

export default Canvas;