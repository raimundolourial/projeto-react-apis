import bug from "../assest/pokemon-types/bug.png";
import dark from "../assest/pokemon-types/dark.png";
import dragon from "../assest/pokemon-types/dragon.png";
import electric from "../assest/pokemon-types/electric.png";
import fairy from "../assest/pokemon-types/fairy.png";
import fighting from "../assest/pokemon-types/fighting.png";
import fire from "../assest/pokemon-types/fire.png";
import flying from "../assest/pokemon-types/flying.png";
import ghost from "../assest/pokemon-types/ghost.png";
import grass from "../assest/pokemon-types/grass.png";
import ground from "../assest/pokemon-types/ground.png";
import ice from "../assest/pokemon-types/ice.png";
import normal from "../assest/pokemon-types/normal.png";
import poison from "../assest/pokemon-types/poison.png";
import psychic from "../assest/pokemon-types/psychic.png";
import rock from "../assest/pokemon-types/rock.png";
import steel from "../assest/pokemon-types/steel.png";
import water from "../assest/pokemon-types/water.png";

  export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };