export function Animals(){
 
 function animals(tipNumber){

    const tipObject = [
      {
        animalName: "Tamanduá",
        tip: "Esse bicho gosta de comer formigas"
      },
      {
        animalName: "Macaco",
        tip: "Esse bicho gosta de comer banana"
      },
  
      {
        animalName: "Elefante",
        tip: "Esse bicho gosta de comer amendoim"
      },
  
      {
        animalName: "Rato",
        tip: "Esse bicho gosta de comer queijo"
      },

      {
        animalName: "Coelho",
        tip: "Esse bicho gosta de comer cenoura"
      },
      {
        animalName: "Galinha",
        tip: "Esse bicho gosta de comer minhocas"
      },
    ]
    return tipObject[tipNumber]
  }

 
  return {
    animals
  }
}