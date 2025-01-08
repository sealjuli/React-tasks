const ModalWindow = ({ showModal, setShowModal, data }) => {
  return (
    <div
      className={showModal ? "modal active" : "modal"}
      onClick={() => setShowModal(false)}
    >
      <div className="modal__context" onClick={(e) => e.stopPropagation()}>
        <b>{"Успешно зарегистрировано"}</b>
        <div>{JSON.stringify(data)}</div>
        <br></br>
        <i>{"Для закрытия модального окна нажмите на любое место вне"}</i>
      </div>
    </div>
  );
};

export default ModalWindow;
