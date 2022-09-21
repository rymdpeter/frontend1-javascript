const { dennisRecept } = require("./app.js");
const prompt = require("prompt-sync")();
("use strict");

console.log("Välkommen till vår kokbok!");
let kokbok = true;
while (kokbok === true) {
  switch (
    prompt(
      "Välj ett recept: 1, 2, 3, 4, 5, 6. Skriv 'e' för att gå ur programmet: "
    )
  ) {
    case "1":
      console.log("Hannas recept: Pannkaka");
      const pancakes = function (factor) {
        const ingredient = function (amount, unit, name) {
          let ingredientAmount = amount * factor;
          console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1.5, "dl", "vetemjöl");
        ingredient(0.25, "tsk", "salt");
        ingredient(3, "dl", "mjölk");
        ingredient(1.5, "knäckta", "ägg");
        ingredient(1.25, "msk", "matfett");
      };
      let amount = prompt("Hur många portioner vill du göra? ");
      pancakes(amount);
      console.log("Blanda alla ingredienser och stek på medelvärme");
      break;

    case "2":
      console.log(`\nMattias recept: Marinerade kikärter med citron, chili och persilja:\n
        Du behöver:\n
        1 näve persilja
        2 paket förkokta kikärer
        2 st medelstora färska röda chilipeppar\n
        Dressing:\n
        2 msk citronsaft
        5 msk rapsolja
        1 struken tsk salt
        1 struken tsk svartpeppar\n
        Tillagning:\n
        Skölj av ärtorna och låt dem rinna av.
        Blanda ihop dressingen i en skål.
        Grovhacka persiljan och finhacka chilipepparn och häll i skålen.
        Häll i kikärtorna, blanda allt och ät.\n`);
      break;

    case "3":
      console.log("Robins Cocktail recept: Clover Club");
      const cloverclub = function (factor) {
        const ingredient = function (quantity, unit, name) {
          let ingredientAmount = quantity * factor;
          console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(3, "cl", "London dry gin");
        ingredient(2, "cl", "Dry vermuth");
        ingredient(2, "berrie", "Raspberry");
        ingredient(3, "cl", "Lemon juice");
        ingredient(2, "cl", "Syrup");
        ingredient(1, "egg", "eggwhite");
      };
      let quantity = prompt("Hur många drinkar vill du göra? ");
      cloverclub(quantity);
      console.log("Blanda ner ingridienserna i shakern och skaka. Häll upp");
  
      break;

    case "4":
      dennisRecept();
      break;

    case "5":
      console.log("\nEriks recept: Kladdkaka\n");
      console.log("Ingredienser:");
      console.log("100 g smör");
      console.log("2,5 dl strösocker");
      console.log("2 ägg");
      console.log("1,5 dl vetemjöl");
      console.log("3 msk kakao");
      console.log("1 tsk vaniljsocker");
      console.log("florsocker, till garnering\n");
      console.log(
        "Sätt ugnen på 175°. Smält smöret och låt det svalna.\nRör samman ägg och socker." +
          "\nBlanda vetemjöl, kakao och vaniljsocker och rör ner blandningen i äggsmeten.\nRör till sist ner det smälta smöret."
      );
      console.log(
        "Grädda kakan i ca 25 minuter.\nDen ska bli låg och ha en hård yta men vara kladdig i mitten."
      );
      console.log(
        "Låt kakan svalna, pudra över florsocker och skär den i snibbar.\n"
      );
      console.log("Servera med vispad grädde\n");
      break;

    case "6":
      console.log(`\Linus recept: Chokladbollar:\n
        Ingredienser:
        100 g smör
        1 dl strösocker
        1 msk vaniljsocker
        3 msk kakao
        3 dl havregryn
        3 msk kallt starkt kaffe
        Pärlsocker att rulla chokladbollarna i\n
        Tillagning:
        Smält smöret och låt puttra 1 minut
        Blanda socker, vaniljsocker, kakao, havregryn, kaffe och smör med en elvisp.
        Ställ in i kylskåp så att smeten stelnar lite, ca 40 minuter.
        Forma bollarna och rulla i pärlsockret.\n`);
      break;

    case "e":
      console.log("Hejdå!");
      kokbok = false;
      break;

    default:
      console.log("Du måste välja ett recept mellan 1-6");
      break;
  }
}
