
// initialize the function "init" when the page completely loads
document.addEventListener('DOMContentLoaded', init);

function init() {
    
      for (let index = 1; index <= 150; index++) {
        
        fetchData(index)
        
      }

    
}

  async function fetchData(id) {
    try{

        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/'+id)
        const data = await res.json()
        pintarCard(data)

    }
    catch(error){
        console.log(error)
    }
  }

  //Función encargada de pintar la template
  function pintarCard(pokemon) {
      console.log(pokemon)
      const flex = document.querySelector('.flex')
      const template = document.querySelector('#template-card').content
      const clone = template.cloneNode(true)
      const fragment = document.createDocumentFragment()
  
      clone.querySelector('.card-body-img').setAttribute('src',pokemon.sprites.other.dream_world.front_default)

      if(pokemon.types[0].type.name=="grass")
        clone.querySelector(".card-header").setAttribute('src','./images/fondo-verde-abstracto-con-el-lugar-para-texto.png')
      else if(pokemon.types[0].type.name=="fire"){
        clone.querySelector(".card-header").setAttribute('src','/images/canva-fondo-degradado-rojo-texturizado-abstracto-MAHAIpt-eVk.webp')
      }

      clone.querySelector(".card-body-title").innerHTML = 
      `${pokemon.name} <span>${pokemon.stats[0].base_stat} Hp</span>`;

      clone.querySelector(".card-body-text").textContent =
        pokemon.base_experience + " exp";
      
      clone.querySelectorAll(".card-footer-social h3")[0].textContent =
        pokemon.stats[1].base_stat;

      clone.querySelectorAll(".card-footer-social h3")[1].textContent =
        pokemon.stats[3].base_stat;

      clone.querySelectorAll(".card-footer-social h3")[2].textContent =
        pokemon.stats[2].base_stat;

      fragment.appendChild(clone)
      flex.appendChild(fragment)
    }
