import "./image.css";

const Image = ({ src, id, caption }) => {
  const viewModal = () => {
    const modal = document.getElementById(`myModal${id}`);
    const modalImg = document.getElementById(id);
    const captionText = document.getElementById(`text${id}`);
    const captionContainer = document.querySelector(`#caption${id}`);

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;

    if (captionText.innerText !== "") {
      captionContainer.style.display = "block";
    }
  };

  const closeModal = () => {
    const modal = document.getElementById(`myModal${id}`);
    modal.style.display = "none";
  };

  return (
    <>
      <img
        src={src}
        id="myImg"
        className={id}
        alt=""
        loading="lazy"
        onClick={viewModal}
      />

      <div id={`myModal${id}`} className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img className="modal-content" id={id} />
        <div className="caption" id={`caption${id}`}>
          <span id={`text${id}`}></span>
        </div>
      </div>
    </>
  );
};

export default Image;
