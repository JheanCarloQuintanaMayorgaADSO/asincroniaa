/* Basados en las imágenes solucionar los siguientes puntos:
a.Describa el paso a paso del ejercicio(comente cada línea de
código).
  b.Solucione el mismo ejercicio, utilizando solo promesas no
async / await.
  c.Describa el paso a paso del ejercicio(comente cada línea de código) */

// Definición de una función de filtro que recibe un parámetro x y devuelve true si el nombre de x es "introducion-a-javascript"
/* const filtrar = x => x.name === "introducion-a-javascript";  */

// Se define una función asíncrona autoinvocada
/* (async () => {
  // Se hace una solicitud de tipo fetch a un archivo llamado `name.json` y se guarda la respuesta en la variable response
  let response = await fetch(`name.json`)
  // Se convierte la respuesta a formato JSON y se guarda en la variable user
  let user = await response.json();
  // Se hace una solicitud de tipo fetch a la API de GitHub para obtener los repositorios del usuario cuyo nombre se encuentra en el archivo `name.json`
  let respuestgithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  // Se convierte la respuesta de la solicitud anterior a formato JSON y se guarda en la variable usuariosgithub
  let usuariosgithub = await respuestgithub.json();

  // Se itera sobre cada elemento d+el array usuariosgithub
  usuariosgithub.forEach(element => {
    // Si el nombre del elemento es "introducion-a-javascript", se imprime el elemento en la consola
    if (element.name === "introducion-a-javascript") {
      console.log(element);
    }
  });
  // let data = usuariosgithub.filter(filtrar)
  // Se imprime en la consola los elementos filtrados
  // console.log(data)
  // Se imprime en la consola todos los elementos de usuariosgithub
  // console.log(usuariosgithub)
})(); */

/* function prueba(filtrar) {

  fetch("name.json")
    .then(response => {
      console.log(response)
      return response.json();
    })

    .then(user => {
      
      return fetch(`https://api.github.com/users/${user.name}/repos`)
        .then(respuestGithub => {
          console.log(respuestGithub)
          return respuestGithub.json();
        })
    })

    .then(usuariogithub => {
      console.log(usuariogithub)
      usuariogithub.forEach(element => {
        if (element.name === "evaluacion") {
          console.log(element)
        }
      });

      let data = usuariogithub.filter(filtrar)
      console.log(data)
      console.log(usuariogithub);
    })
}

const filtrar = x => x.name === "evaluacion";

prueba(filtrar) */




/* 2. Lea el archivo users.json suministrado por el instructor y tome como base
las capturas para luego mostrar todos los datos de usuario de cada
aprendiz, este ejercicio de desarrolla con promesas.
a.Imprima el resultado en una tabla donde solo nos mostrar el nombre
y el avatar de cada aprendiz */

/* const fetchUsuarios = () => {
  return new Promise((resolve) => {
    fetch('../json/user.json')
      .then((response) => response.json())
      .then((userData) => {
        console.log("Datos de usuarios:", userData);
        userData.users.forEach((user) => {
          const { user: username, aprendiz } = user;
          if (!aprendiz) {
            console.log(`El usuario ${username} no es un aprendiz.`);
          } else {
            fetch(`https://api.github.com/users/${username}`)
              .then((githubResponse) => githubResponse.json())
              .then((githubData) => {
                console.log(`Datos de GitHub para ${githubData.name}`);
                const userData = [githubData.name, githubData.avatar_url];
                console.table(userData);
              });
          }
        });
      });
  });
};

fetchUsuarios(); */


/**
 * 3.Basado en la solución del punto 2, transforme esta solución utilizando
async/await
a. muestre los repositorios públicos de cada aprendiz en consola.
b. Una todos los resultados en un solo arreglo
c. Filtre la consulta con solo los aprendices que tengan el rol de
aprendiz, esta solución se deba dar antes de realizar la solicitud al
api
 */

/* const realizarPeticiones = async () => {
  try {
    const response = await fetch(`../json/user.json`);
    const userData = await response.json();
    const repositories = [];

    userData.users.forEach(async (user) => {
      if (user.aprendiz === true) {
        try {
          const reposResponse = await fetch(`https://api.github.com/users/${user.user}/repos`);
          const reposData = await reposResponse.json();
          const userRepos = reposData.map(repo => {
            repositories.push(repo);
            return repo;
          });
          console.log(`Repositorios de ${user.user}:`, userRepos);
        } catch (error) {
          console.error(`Error al obtener repositorios de ${user.user}:`, error);
        }
      } else {
        console.log(`El usuario ${user.user} no es un aprendiz.`);
      }
    });

    console.log("Todos los repositorios:", repositories);
  } catch (error) {
    console.error("Error al obtener datos de usuarios:", error);
  }
};

realizarPeticiones(); */

/* 4. Basados en la solución del punto 3 daremos solución a los siguientes
puntos:
a.Muestre solo los resultados que tengan menos de 5 repositorios
públicos en una tabla por consola.
  b.Muestre solo los resultados de los repositorios que contengan la
palabra JavaScript en su name
c.Ordene de menor a mayor según el nombre del repositorio
d.Muestre solo los repositorios que tengan mas de cinco letras en su
nombre */

/* const realizarPeticiones = async () => {
  try {
    let reposMenoresCinco = [];
    let reposPalabraAsincrona = [];

    const peticionLocal = await fetch(`../json/user.json`);
    const dataLocal = await peticionLocal.json();
    console.log("Datos locales:", dataLocal);

    await Promise.all(dataLocal.users.map(async (usuarioLocal) => {
      if (usuarioLocal.aprendiz === true) {
        const peticionApi = await fetch(`https://api.github.com/users/${usuarioLocal.user}/repos`);
        const dataApi = await peticionApi.json();

        dataApi.forEach(repo => {
          if (dataApi.length <= 5) {
            reposMenoresCinco.push(repo);
          }
          if (repo.name === "Asincrona") {
            reposPalabraAsincrona.push(repo);
          }
        });
      }
    }));

    console.log("Repositorios con menos de 5 proyectos:", reposMenoresCinco);
    console.log("Repositorios con la palabra 'Asincrona':", reposPalabraAsincrona);
  } catch (error) {
    console.error("Error en la conexión:", error);
  }
};

realizarPeticiones();
 */
