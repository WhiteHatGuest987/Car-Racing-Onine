class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton("reset")
    this.button.style("font-size","25px")
    this.button.style("width","100px")
    this.button.style("height","50px")
    this.button.style("border-radius","25px")
    this.button.style("background-color","#d42898")
    this.button.style("color","white")
    this.input.style("width","225px")
    this.input.style("height","60px")
    this.input.style("font-size","25px")
    this.input.style("border-width","5px")
    this.input.style("border-color","red")
    this.input.style("text-align","center")
    this.reset.style("font-size","25px")
    this.reset.style("width","100px")
    this.reset.style("height","40px")
    this.reset.style("border-radius","25px")
    this.reset.style("color","black")
    this.reset.style("background-color","#5deb0c")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 50,0);
    this.reset.position(displayWidth-150,30)
    this.reset.mousePressed(()=>{
    game.update(0)
    player.updateCount(0)
    Player.updateRank(0)
    })

    this.input.position(displayWidth/2 -40, displayHeight/2 -80);
    this.button.position(displayWidth/2 +30,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 -70, displayHeight/4);
    });

  }
}
