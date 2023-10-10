import "./Card.css";

export const Card = ({ el }) => {
  return (
    <div className="col-4">
      <div className="card my-3">
        <img
          src={el.photo}
          className="card-img-top "
          alt=""
          style={{ borderRadius: "10px" }}
        />
        <div className="card-body col-12">
          <div className="d-flex justify-content-between heigh ">
            <div className="d-flex gap-1 align-items-center">
              {el.superHost ? <p className="superHost">SUPER HOST</p> : ""}
              <p className="par2">{el.type + ". " + el.beds + " beds"}</p>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <p className="raiting">{el.rating}</p>
              </div>
            </div>
          </div>

          <div className="my-1">
            <p className="title">{el.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
