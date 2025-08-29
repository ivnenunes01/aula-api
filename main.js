// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => {
//     const img = document.getElementById('foto');
//     img.src = data.message;
//     img.alt = "Imagem de cachorro";
//   })
//   .catch(error => console.error('Erro ao carregar a imagem:', error));

const btn = document.getElementById('btn-mudar');
const img = document.getElementById('foto');

let intervalo = null;
let ativo = false;

function trocarImagem() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      img.src = data.message;
      img.alt = "Imagem de cachorro";
    })
    .catch(error => console.error('Erro ao carregar a imagem:', error));
}

btn.addEventListener('click', () => {
  if (!ativo) {
    trocarImagem(); // primeira troca
    intervalo = setInterval(trocarImagem, 2000); // começa a trocar
    btn.textContent = "Parar Imagens";
    ativo = true;
  } else {
    clearInterval(intervalo); // para a troca
    btn.textContent = "Mudar Imagem";
    ativo = false;s
  }
});







       //    .catch((error) => console.error("erro ao buscar os dados"));

   //  async/await 

//    async function CarregarUsuarios(){
//     try {
//        let response = await fetch("https://dog.ceo/api/breeds/image/random");
//        let data = await response.json();
//        console.log(data);
//    }   catch (error) {
//        console.error("erro ao buscar os dados:", error);
//    }
// }

// CarregarUsuarios()