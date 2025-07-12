import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Image
} from "react-bootstrap";
import "./InuyashaView.css";
import FotoEspecial from "./assets/perfil.jpg";

import img1 from "./assets/Inuyasha1.jpg";
import img2 from "./assets/Inuyasha2.jpg";
import img3 from "./assets/Inuyasha3.jpg";
import img4 from "./assets/Inuyasha4.jpg";
import img5 from "./assets/Inuyasha5.jpg";
import img6 from "./assets/Inuyasha6.jpg";
import img7 from "./assets/Inuyasha7.jpg";
import img8 from "./assets/Inuyasha8.jpg";
import img9 from "./assets/Inuyasha9.jpg";
import img10 from "./assets/Inuyasha10.jpg";

const frases = [
  "Aunque estemos en mundos diferentes... nuestros corazones estarán conectados. — Kagome",
  "No me importa si tengo que convertirme en demonio por ti. — Inuyasha",
  "Te protegeré, sin importar lo que pase.",
  "En este momento... tú eres mi único deseo.",
  "Kagome... eres mi luz en la oscuridad.",
  "Aun cuando peleemos, no dejaré de protegerte.",
  "Tu voz siempre me alcanza, sin importar la distancia.",
  "Luchamos para mantener la excelencia, pero al darnos cuenta llegamos a nuestros límites y dejamos entrar la maldad en nuestro corazón.",
  "Todos los humanos tenemos sentimientos, es normal que sienta rencor por Inuyasha y también muestre muchos celos hacia Kikyo.",
  "Kagome nació para conocerme y yo... ¡Yo nací para estar con ella!",
];

const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function InuyashaView() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [fraseSeleccionada, setFraseSeleccionada] = useState("");

  const abrirModal = (img, frase) => {
    setImagenSeleccionada(img);
    setFraseSeleccionada(frase);
    setMostrarModal(true);
  };

  const cerrarModal = () => setMostrarModal(false);

  return (
    <div className="inuyasha-bg py-5">
      <Container className="text-center">
        {/* Imagen circular */}
        <Image
          src={FotoEspecial}
          alt="Foto especial"
          roundedCircle
          className="mb-3 shadow border border-danger"
          style={{
            width: "30vw",
            maxWidth: "160px",
            aspectRatio: "1 / 1",
            objectFit: "cover"
          }}
        />

        <h2 className="text-danger fw-bold mb-4">🌸 Galería de Recuerdos 🌸</h2>

        {/* Grid responsiva */}
        <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-3">
          {imagenes.map((img, index) => (
            <Col key={index}>
              <div
                className="galeria-img-wrapper shadow-sm"
                onClick={() => abrirModal(img, frases[index % frases.length])}
              >
                <img
                  src={img}
                  alt={`img-${index}`}
                  className="img-fluid rounded galeria-img"
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal responsivo */}
        <Modal show={mostrarModal} onHide={cerrarModal} centered size="md">
          <Modal.Body className="text-center">
            <img
              src={imagenSeleccionada}
              alt="detalle"
              className="img-fluid rounded mb-3"
            />
            <p className="fst-italic text-muted px-2">"{fraseSeleccionada}"</p>
            <Button variant="danger" onClick={cerrarModal}>
              Cerrar
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
