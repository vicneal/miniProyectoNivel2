import { useEffect, useState } from "react";
import "./App.css";

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
      <main>
        <div className="container ">
          <div className=" my-3 row d-flex flex-row">
            {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
            {data.map((el, i) => {
              return (
                <div className="col-4" key={i}>
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
                          {el.superHost ? (
                            <p className="superHost">SUPER HOST</p>
                          ) : (
                            ""
                          )}
                          <p className="par2">
                            {el.type + ". " + el.beds + " beds"}
                          </p>
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
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
