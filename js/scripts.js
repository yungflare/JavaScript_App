// Task 1.2 - Pokedex 

 let pokemonList = [
    {name: 'Bulbasaur', 
    height: 7, 
    type:['grass','poison']
   },
    {name: 'Charmander',
     height: 6,
   type:'fire'
   },
    {name: 'Squirtle', 
    height: 5, 
    type: 'water'
   },
    {name: 'Weedle', 
    height: 3, 
    type:['bug','poison']
   },
    {name: 'Pikachu', 
    height: 4, 
    type:'electric'
   },
    {name: 'Snorlax', 
    height: 2.1,
     type: 'normal'
   } 

];  
   // creating forEach loop 

   pokemonList.forEach(item => document.write(item.name + ' ' + ' (Height: ' + item.height + ')' + ' (Type: ' + item.type + ')' + '<br>'));




// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height >4.5) {
     
//       // using  document.write 

//       document.write(pokemonList[i].name + " (Height: ", pokemonList[i].height, ") - That is a Big Pokemon!");
//       document.write("<br>") ;
  
//    }else {
      
//       document.write(pokemonList[i].name + " (Height: ", pokemonList[i].height, ")");
//       document.write("<br>") ;
  
//    }
//   }


