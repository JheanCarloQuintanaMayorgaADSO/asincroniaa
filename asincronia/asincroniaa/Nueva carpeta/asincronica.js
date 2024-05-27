/* 1.Basados en las imágenes solucionar los siguientes puntos:
a.Describa el paso a paso del ejercicio(comente cada línea de
código).
  b.Solucione el mismo ejercicio, utilizando solo promesas no
async / await.
  c.Describa el paso a paso del ejercicio(comente cada línea de código) */


// Definición de una función de filtro que recibe un parámetro x y devuelve true si el nombre de x es "introducion-a-javascript"
//  const filtrar = x => x.name === "introducion-a-javascript";  

// // Se define una función asíncrona autoinvocada
// (async () => {
//   // Se hace una solicitud de tipo fetch a un archivo llamado `name.json` y se guarda la respuesta en la variable response
//   let response = await fetch(`name.json`)
//   // Se convierte la respuesta a formato JSON y se guarda en la variable user
//   let user = await response.json();
//   // Se hace una solicitud de tipo fetch a la API de GitHub para obtener los repositorios del usuario cuyo nombre se encuentra en el archivo `name.json`
//   let respuestgithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
//   // Se convierte la respuesta de la solicitud anterior a formato JSON y se guarda en la variable usuariosgithub
//   let usuariosgithub = await respuestgithub.json();

//   // Se itera sobre cada elemento d+el array usuariosgithub
//   usuariosgithub.forEach(element => {
//     // Si el nombre del elemento es "introducion-a-javascript", se imprime el elemento en la consola
//     if (element.name === "introducion-a-javascript") {
//       console.log(element);
//     }
//   });
//   // let data = usuariosgithub.filter(filtrar)
//   // Se imprime en la consola los elementos filtrados
//   // console.log(data)
//   // Se imprime en la consola todos los elementos de usuariosgithub
//   // console.log(usuariosgithub)
// })();

//C
//  function prueba(filtrar) {

//   fetch("name.json")
//     .then(response => {
//       console.log(response)
//       return response.json();
//     })

//     .then(user => {
      
//       return fetch(`https://api.github.com/users/${user.name}/repos`)
//         .then(respuestGithub => {
//           console.log(respuestGithub)
//           return respuestGithub.json();
//         })
//     })

//     .then(usuariogithub => {
//       console.log(usuariogithub)
//       usuariogithub.forEach(element => {
//         if (element.name === "evaluacion") {
//           console.log(element)
//         }
//       });

//       let data = usuariogithub.filter(filtrar)
//       console.log(data)
//       console.log(usuariogithub);
//     })
// }

// const filtrar = x => x.name === "evaluacion";

// prueba(filtrar) 




/* 2. Lea el archivo users.json suministrado por el instructor y tome como base
las capturas para luego mostrar todos los datos de usuario de cada
aprendiz, este ejercicio de desarrolla con promesas.
a.Imprima el resultado en una tabla donde solo nos mostrar el nombre
y el avatar de cada aprendiz */

// // Definimos la función fetchUsuarios
// const fetchUsuarios = () => {
//   // Retornamos una nueva Promesa
//   return new Promise((resolve) => {
//     // Realizamos una solicitud fetch para obtener el archivo JSON de usuarios
//     fetch('../json/user.json')
//       // Procesamos la respuesta para convertirla a JSON
//       .then((response) => response.json())
//       // Una vez tenemos los datos, los manejamos en esta función
//       .then((data) => {
//         // Imprimimos los datos obtenidos en la consola
//         console.log("Usuarios obtenidos:", data);
//         // Recorremos cada usuario en el array users
//         data.users.forEach((user) => {
//           // Desestructuramos el objeto user para obtener las propiedades user y aprendiz
//           const { user: username, aprendiz } = user;
//           // Si el usuario no es aprendiz
//           if (!aprendiz) {
//             // Imprimimos un mensaje indicando que no es aprendiz
//             console.log(`El usuario ${username} no es aprendiz.`);
//           } else {
//             // Si el usuario es aprendiz, realizamos otra solicitud fetch para obtener sus datos de GitHub
//             fetch(`https://api.github.com/users/${username}`)
//               // Procesamos la respuesta de GitHub para convertirla a JSON
//               .then((response) => response.json())
//               // Una vez tenemos los datos de GitHub, los manejamos en esta función
//               .then((githubData) => {
//                 // Imprimimos un mensaje con el nombre del usuario obtenido de GitHub
//                 console.log(`Información de GitHub para ${githubData.name}`);
//                 // Creamos un array con el nombre y la URL del avatar del usuario de GitHub
//                 const userInfo = [githubData.name, githubData.avatar_url];
//                 // Imprimimos la información del usuario en formato de tabla
//                 console.table(userInfo);
//               });
//           }
//         });
//       });
//   });
// };

// // Llamamos a la función fetchUsuarios para ejecutar el proceso
// fetchUsuarios();


/**
 * 3.Basado en la solución del punto 2, transforme esta solución utilizando
async/await
a. muestre los repositorios públicos de cada aprendiz en consola.
b. Una todos los resultados en un solo arreglo
c. Filtre la consulta con solo los aprendices que tengan el rol de
aprendiz, esta solución se deba dar antes de realizar la solicitud al
api
 
//     // declaramos la funcion asyncro
// const realizarPeticiones = async () => {
//   try {
//     // Realiza una solicitud fetch para obtener el archivo user.json
//     const response = await fetch(`../json/user.json`);
//     // Convierte la respuesta a formato JSON
//     const userData = await response.json();
//     // Inicializa un array vacío para almacenar los repositorios
//     const repositories = [];

//     // Itera sobre cada usuario en el array users del objeto userData
//     userData.users.forEach(async (user) => {
//       // Verifica si el usuario es un aprendiz
//       if (user.aprendiz === true) {
//         try {
//           // Realiza una solicitud fetch para obtener los repositorios del usuario en GitHub
//           const reposResponse = await fetch(`https://api.github.com/users/${user.user}/repos`);
//           // Convierte la respuesta a formato JSON
//           const reposData = await reposResponse.json();
//           // Mapea sobre los datos de los repositorios y los agrega al array repositories
//           const userRepos = reposData.map(repo => {
//             repositories.push(repo);
//             return repo;
//           });
//           // Imprime en consola los repositorios del usuario actual
//           console.log(`Repositorios de ${user.user}:`, userRepos);
//         } catch (error) {
//           // Maneja cualquier error que ocurra al obtener los repositorios del usuario
//           console.error(`Error al obtener repositorios de ${user.user}:`, error);
//         }
//       } else {
//         // Imprime en consola si el usuario no es un aprendiz
//         console.log(`El usuario ${user.user} no es un aprendiz.`);
//       }
//     });

//     // Utiliza setTimeout para asegurar que todas las promesas en el forEach se hayan completado
//     setTimeout(() => {
//       // Imprime en consola todos los repositorios después de un retraso
//       console.log("Todos los repositorios:", repositories);
//     }, 5000); // Ajusta el tiempo de retraso según sea necesario
//   } catch (error) {
//     // Maneja cualquier error que ocurra al obtener los datos de los usuarios
//     console.error("Error al obtener datos de usuarios:", error);
//   }
// };

// // Llama a la función realizarPeticiones
// realizarPeticiones();

/* 4. Basados en la solución del punto 3 daremos solución a los siguientes
puntos:
a.Muestre solo los resultados que tengan menos de 5 repositorios
públicos en una tabla por consola.
  b.Muestre solo los resultados de los repositorios que contengan la
palabra JavaScript en su name
c.Ordene de menor a mayor según el nombre del repositorio
d.Muestre solo los repositorios que tengan mas de cinco letras en su
nombre */

// // Función asíncrona para obtener repositorios de usuarios
// async function fetchUserRepos() {
//   try {
//       // Se hace una solicitud para obtener datos locales del archivo user.json
//       const localResponse = await fetch(`../json/user.json`);
//       // Se convierte la respuesta en formato JSON
//       const data = await localResponse.json();
//       // Se extraen los usuarios del objeto data
//       const users = data.users;

//       // Se itera sobre cada usuario
//       users.forEach(async (user) => {
//           // Se hace una solicitud para obtener los repositorios del usuario desde la API de GitHub
//           const apiResponse = await fetch(`https://api.github.com/users/${user.user}/repos`);
//           // Se convierte la respuesta en formato JSON
//           const repos = await apiResponse.json();

//           // Arreglos para almacenar distintos tipos de repositorios
//           const fewRepos = [];
//           const jsRepos = [];
//           const repoNames = [];
//           const longNameRepos = [];

//           // Verificar si el usuario tiene 5 o menos repositorios
//           if (repos.length <= 5) {
//               // Almacenar los repositorios en el arreglo fewRepos
//               fewRepos.push(repos);
//               // Imprimir un mensaje indicando que el usuario tiene 5 o menos repositorios y mostrarlos en tabla
//               console.log(`El usuario ${user.user} tiene 5 o menos repositorios`);
//               console.table(fewRepos);
//           }

//           // Filtrar repositorios que contienen la palabra "JavaScript" en su nombre
//           repos.forEach((repo) => {
//               if (repo.name.toLowerCase().includes("javascript")) {
//                   jsRepos.push(repo.name);
//               }
//           });
//           // Imprimir los repositorios JavaScript del usuario en tabla
//           console.log(`Repositorios con la palabra "JavaScript" del usuario ${user.user}`);
//           console.table(jsRepos);

//           // Obtener los nombres de todos los repositorios del usuario
//           repos.forEach((repo) => {
//               repoNames.push(repo.name);
//           });
//           // Imprimir los nombres de los repositorios del usuario ordenados alfabéticamente de forma descendente
//           console.log(`Repositorios de ${user.user} ordenados por nombre (descendente)`);
//           const sortedRepoNames = repoNames.sort().reverse();
//           console.table(sortedRepoNames);

//           // Filtrar repositorios con nombres de más de 5 caracteres
//           repos.forEach((repo) => {
//               if (repo.name.length > 5) {
//                   longNameRepos.push(repo.name);
//               }
//           });
//           // Imprimir los repositorios con nombres de más de 5 caracteres del usuario en tabla
//           console.log(`Repositorios con nombres de más de 5 caracteres del usuario ${user.user}`);
//           console.table(longNameRepos);
//       });
//   } catch (error) {
//       // Manejo de errores en caso de fallo en las solicitudes
//       console.error('Error fetching data:', error);
//   }
// }

// // Llamar a la función fetchUserRepos para comenzar el proceso
// fetchUserRepos();

// 5.Lea el archivo user.json y transforme todos los nombres a mayúsculas
// (recorra usuario por usuario) validando que solo se permita ingresar letras
// mayúsculas (se valida con un proxy)
// a. Modifique solo los usuarios que tengan el rol aprendiz en true
// b. Modifique solo los usuarios que más de dos nombres ejemplo (John
// Becerra)
// c. Modifique solo los usuarios que contenga la palabra ADSO en su
// user

// Función asíncrona para obtener los datos del archivo JSON
async function fetchData() {
  try {
      // Realiza una solicitud para obtener el archivo JSON
      const response = await fetch('../json/user.json');
      // Parsea la respuesta como JSON
      const userData = await response.json();
      // Retorna los datos de los usuarios del archivo JSON
      return userData.users;
  } catch (error) {
      // En caso de error, muestra un mensaje y retorna un arreglo vacío
      console.error('Error fetching data:', error);
      return [];
  }
}

// // Función para manipular los datos de los usuarios
// function manipulateUserData(users) {
//   // Define un manejador para el Proxy
//   const handler = {
//       // Define la función set para interceptar la asignación de propiedades en el Proxy
//       set: (target, property, value) => {
//           // Verifica si el usuario es un aprendiz
//           if (value.aprendiz === true) {
//               // Divide el nombre en partes
//               const nameParts = value.name.split(' ');
//               // Verifica si el nombre tiene más de dos partes
//               if (nameParts.length > 2) {
//                   // Verifica si el usuario contiene "ADSO" en su nombre de usuario
//                   if (value.user.toUpperCase().includes('ADSO')) {
//                       // Imprime el nombre en mayúsculas si contiene "ADSO"
//                       console.log(value.name.toUpperCase());
//                   } else {
//                       // Asigna el valor al objetivo si no contiene "ADSO" en el nombre de usuario
//                       target[property] = value;
//                   }
//               } else {
//                   // Asigna el valor al objetivo si el nombre tiene dos o menos partes
//                   target[property] = value;
//               }
//           } else {
//               // Asigna el valor al objetivo si el usuario no es un aprendiz
//               target[property] = value;
//           }
//           // Retorna true para indicar que la propiedad se ha establecido correctamente
//           return true;
//       }
//   };

//   // Crea un objeto Proxy con el manejador definido
//   const proxy = new Proxy({}, handler);

//   // Itera sobre los usuarios y los manipula utilizando el Proxy
//   return users.map(user => {
//       // Asigna el usuario al Proxy
//       proxy.usuario = user;
//       // Retorna el usuario modificado
//       return proxy.usuario;
//   });
// }

// // Función principal
// async function main() {
//   try {
//       // Obtiene los datos de los usuarios
//       const users = await fetchData();
//       // Manipula los datos de los usuarios
//       const manipulatedUsers = manipulateUserData(users);
//       // Imprime los usuarios manipulados
//       console.log(manipulatedUsers);
//   } catch (error) {
//       // Muestra un mensaje de error en caso de que falle la obtención o manipulación de los datos
//       console.error('Error:', error);
//   }
// }

// // Llama a la función principal para iniciar el proceso
// main();
