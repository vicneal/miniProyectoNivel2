import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/card.jsx";
import logo from "./img/logo.png";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <header className="container my-4 d-flex justify-content-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div className="input-group">
            <button
              className="btn btn-outline-secondary "
              type="button "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Button
            </button>
            <button className="btn btn-outline-secondary" type="button">
              Add guests
            </button>
            <button className="btn btn-outline-secondary" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="container my-5">
          <div className="d-flex flex-row justify-content-between my-4  align-items-center">
            <div>
              <h1 className="titulo">Stays in Finland</h1>
            </div>
            <div>
              <p className="stays">
                {data.length > 12 ? "12+ stays" : data.length + "+ stays"}
              </p>
            </div>
          </div>
          <div className=" my-3 row d-flex flex-row">
            {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
            {data.map((el, i) => {
              return <Card key={i} el={el} />;
            })}
          </div>
        </div>
      </main>
      {/* <!-- Modal --> */}
      <div
        className="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "100%", minHeight: "80vh", margin: "0" }}
        >
          <div className="modal-content">
            <div className="container">
              <div className="modal-header" style={{ border: "none" }}>
                <h1 className="modal-title" id="exampleModalLabel">
                  Edit your search
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex" style={{ border: "none" }}>
                <button
                  className="btn btn-outline-secondary col-5 d-flex justify-content-start flex-column"
                  type="button"
                >
                  <p className="m-0">Location</p>
                  <p className="m-0">lugar</p>
                </button>
                <button
                  className="btn btn-outline-secondary col-5 d-flex justify-content-start flex-column"
                  type="button"
                >
                  <p className="m-0">Guests</p>
                  <p className="m-0">0</p>
                </button>
                <button
                  className="btn btn-outline-secondary col-2"
                  type="button"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <div style={{ minHeight: "50vh", margin: "0" }}>
                <div className="col-5 d-flex justify-content-start flex-column">
                  <ul>
                    {data
                      .map((el) => [el.city + " " + el.country])
                      .filter((dato, index, array) =>
                        console.log(array.indexOf(dato) === index)
                      )}
                  </ul>
                </div>
                <div className="col-5 d-flex justify-content-start flex-column"></div>
                <div className="col-2 d-flex justify-content-start flex-column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
