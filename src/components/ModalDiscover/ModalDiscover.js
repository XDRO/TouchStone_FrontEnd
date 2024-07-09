import { Modal } from "../Modal/Modal";
import "./ModalDiscover.css";

export const ModalDiscover = ({ handleCloseModal }) => {
  return (
    <Modal onClose={handleCloseModal} name={`discover`}>
      <div>
        <h3 className={`modal__title modal__title_${"discover"}`}>
          Discover your new assistant
        </h3>
        <p className={`modal__text modal__text_${"discover"}`}>
          The Model Assistant is a versatile AI-powered helper designed to
          enhance user experience by providing intelligent, context-aware
          assistance. Leveraging the capabilities of OpenAI's language model,
          this assistant can answer questions, generate text, provide
          recommendations, and assist with various tasks based on user input.
          It's a powerful tool for improving productivity, offering insights,
          and supporting a wide range of applications, from customer service to
          creative writing. With its advanced natural language understanding,
          the Model Assistant can engage in meaningful conversations, making it
          a valuable addition to any project or platform.
        </p>
      </div>
    </Modal>
  );
};
