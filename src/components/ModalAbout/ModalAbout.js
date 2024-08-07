import { Modal } from "../Modal/Modal";
import "./ModalAbout.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const ModalAbout = ({ handleCloseModal }) => {
  return (
    <Modal onClose={handleCloseModal} name={`about`}>
      <h3 className={`modal__title modal__title_${"about"}`}>About</h3>
      <p className={`modal__text modal__text_${"about"}`}>
        Welcome to my project showcase! This endeavor represents the culmination
        of my journey at TripleTen and is my final project before graduation. If
        you're curious about TripleTen, passionate about learning to code, or
        eager to enter the tech industry, feel free to explore more at:
        <a
          className={`modal__link_${"about"}`}
          href="https://tripleten.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://tripleten.com/
        </a>
      </p>
      <p className={`modal__text modal__text_${"about"}`}>
        Technologies utilized: React, Node.js, Express, MongoDB, and the OpenAI
        API. If you're interested in harnessing the power of the OpenAI API for
        your projects, you can find comprehensive documentation here:
        <a
          className={`modal__link_${"about"}`}
          href="https://platform.openai.com/docs/api-reference/introduction"
          target="_blank"
          rel="noreferrer"
        >
          https://platform.openai.com/docs/api-reference/introduction
        </a>
      </p>

      <p className={`modal__text modal__text_${"about"}`}>
        To dive deeper into this project, please visit my GitHub repositories:
        <br></br>
      </p>

      <p className={`modal__text modal__text_${"about"}`}>
        <a
          className={`modal__link_${"about"}`}
          href="https://github.com/XDRO/TouchStone_FrontEnd"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/XDRO/TouchStone_FrontEnd
        </a>
      </p>
      <p className={`modal__text modal__text_${"about"}`}>
        <a
          className={`modal__link_${"about"}`}
          href="https://github.com/XDRO/TouchStone_BackEnd"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/XDRO/TouchStone_BackEnd
        </a>
      </p>
    </Modal>
  );
};
