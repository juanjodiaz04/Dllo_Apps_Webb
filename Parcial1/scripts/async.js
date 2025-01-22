function conectarAlServidor() {
    return new Promise((resolve, reject) => {
      console.log("Intentando conectar al servidor...");
  
      setTimeout(() => {
        const exito = Math.random() > 0.5; // Probabilidad de éxito 50%
  
        if (exito) {
          resolve("Conexión exitosa");
        } else {
          reject("Error al conectar al servidor");
        }
      }, 2000); // Simula una espera de 2 segundos
    });
  }
  
  conectarAlServidor()
    .then((resultado) => {
      console.log("Resultado recibido:", resultado);
      // Aquí puedes procesar el resultado
    })
    .catch((error) => {
      console.error("Error detectado:", error);
      // Aquí puedes manejar el error
    })
    .finally(() => {
      console.log("Fin del proceso, independientemente del resultado");
    });
  
  

async function obtenerDatosDelServidor() {
  console.log("Conectando al servidor...");
  try {
    const resultado = await tareaDeConexion(); // Espera hasta que la promesa se resuelva
    console.log("Datos recibidos:", resultado);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  } finally {
    console.log("Fin de la operación");
  }
}

function tareaDeConexion() {
  return new Promise((resolve, reject) => {
    console.log("Intentando conectar...");

    // Simular operación asincrónica con un retraso
    setTimeout(() => {
      const exito = Math.random() > 0.5; // Probabilidad de éxito del 50%
      if (exito) {
        resolve("Datos del servidor");
      } else {
        reject("No se pudo conectar al servidor");
      }
    }, 1000); // Retraso de 1 segundo
  });
}


  
