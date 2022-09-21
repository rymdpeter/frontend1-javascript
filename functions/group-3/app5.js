let randomNumber = Math.floor(Math.random() * 4);
const option = parseInt(prompt('Spel: programet väljer en random siffra 1-3, du ska gissa vilken siffra den valt (1-3): '))

if (option == randomNumber) {
    
    console.log('rätt');
    return
}
else{
  console.log('fel')
  return
}
