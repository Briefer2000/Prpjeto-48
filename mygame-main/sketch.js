var background
var zombie
var plant
var backgroundmusic
var sol = 0






function preload(){
 Background = loadImage("./Assets/Player's House.png")
 BackgroundMusic = loadSound("./Assets/Theme.mp3")
 PlantaGelo = loadImage("./Assets/PlantaGelo.png")
 PlantaDragão = loadImage("./Assets/PlantaDragão.png")
 Girassol = loadImage("./Assets/Girassol.png")
 PlantaToxica = loadImage("./Assets/PlantaToxica.png")
 PlantaAtiradora = loadImage("./Assets/PlantaAtiradora.png")
 Plantacenoura = loadImage("./Assets/Plantacenoura.png")
 PlantaMina = loadImage("./Assets/PlantaMina.png")
 PlantaDoisLados = loadImage("./Assets/PlantaDoisLados.png")
 PlantaBoomerang = loadImage("./Assets/Boomerang.png")
 Sol = loadImage("./Assets/Sol.png")
 HUDSol = loadImage("./Assets/HUD1.png")
 HUDAtiradora = loadImage("./Assets/HUD2.png")
 HUDMina = loadImage("./Assets/HUD3.png")
 HUDToxica = loadImage("./Assets/HUD4.png")
 HUDGeladora = loadImage("./Assets/HUD5.png")
 HUDBoomerang = loadImage("./Assets/HUD6.png")
 HUDDragão = loadImage("./Assets/HUD7.png")
 HUDRetribudores= loadImage("./Assets/HUD8.png")
 

}

function setup() {
 createCanvas(windowWidth,windowHeight)
 BackgroundMusic.play()
 BackgroundMusic.setVolume(0.3)
 HUD1 = createSprite(350,50)
 HUD1.addImage(HUDSol)
 HUD1.scale = 1.2
 HUD2 = createSprite(430,50)
 HUD2.addImage(HUDAtiradora)
 HUD2.scale = 1.2
 HUD3 = createSprite(510,50)
 HUD3.addImage(HUDMina)
 HUD3.scale = 1.2
 HUD4 = createSprite(590,50)
 HUD4.addImage(HUDToxica)
 HUD4.scale = 1.2
 HUD5 = createSprite(670,50)
 HUD5.addImage(HUDGeladora)
 HUD5.scale = 1.2
 HUD6 = createSprite(750,50)
 HUD6.addImage(HUDBoomerang)
 HUD6.scale = 1.2
 HUD7 = createSprite(830,50)
 HUD7.addImage(HUDDragão)
 HUD7.scale = 1.2
 HUD8 = createSprite(910,50)
 HUD8.addImage(HUDRetribudores)
 HUD8.scale = 1.2
 HUD9 = createSprite(200,700)
 HUD9.addImage(Sol)
 HUD9.scale = 0.5
 sol = 0
}

function draw() {
 image(Background,0,0,windowWidth,windowHeight)
 drawSprites()
 fill("Blue")
 textSize(30)
 text(sol,200,200)
 
 if (mouseIsPressed === true) {
    sol = sol + 1
 } else {
   console.log("eae")
 }
 
}

    




