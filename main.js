// fetch("https://dog.ceo/dog-api")
//    .then((response) => response.json())
//    .then((data) => console.log(data))
//    .catch((error) => console.error("erro ao buscar os dados"));

   //  async/await 

   async function CarregarUsuarios(){
    try {
       let response = await fetch("https://dog.ceo/api/breeds/image/random");
       let data = await response.json();
       console.log(data);
   }   catch (error) {
       console.error("erro ao buscar os dados:", error);
   }
}

CarregarUsuarios()