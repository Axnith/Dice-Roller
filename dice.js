function rollDice(){
  const noOfRolls = document.getElementById("input-number").value;
  num = [];
  images = [];
  for(let i=0;i<noOfRolls;i++){
    let value = Math.floor(Math.random()*6)+1;
    num.push(value);
    images.push(`<img class="dice-images" src="images/Dice-${value}.png">`);
  }
  document.getElementById("value").textContent = num;
  document.getElementById("images").innerHTML = images;
}