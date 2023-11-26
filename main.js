


var canvas = document.getElementById("jogo");
var ctx = canvas.getContext('2d');
//defnir o inicio do qudrado
var x = 55;
var x_largura = 40;
var y = 280;
var y_largura = 40;
var dx = 5;
var dy = 5;

requestAnimationFrame(gameloop);

function detectarColisao(){
    if ((x + x_largura) > (950, 0)){
        //interrompe o game loop parando a movimentacao dos quadrados
        clearTimeout();
    }else{
        requestAnimationFrame(gameloop);
    };
};

//criacaao da funcao game loop
function gameloop(){
    desenharQuadrado(x, y);
    detectarColisao();
};

//determinando a funcao desenhar quadrado
function desenharQuadrado(x, y){
    ctx.clearRect(0, 0, 0, 0); //antes de fazer o desenho e preciso determinar as linhas
    ctx.fillStyle = '#00f';
    ctx.fillRect(x, y, x_largura, y_largura);
};

//determinando a funcao de loop de game
function gameloop(){
    desenharQuadrado(x, y);
    //chamar novamente o ciclo de animacao
    requestAnimationFrame(gameloop);
};

window.onkeydown = pressionaTecla;

var velocidade = 2;

function pressionaTecla(tecla){
    if(tecla.keyCode == 39 ){
        x = x + 5; // aumentar o x tem o efeito de ir para a direita
    };
    if(tecla.keyCode == 37){
        x = x -5; // diminuir o x tem o efeito de ir para a esquerda
    };
    if(tecla.keyCode == 38){
        y = y - 5;
    };
    if(tecla.keyCode == 40){
        y = y + 5;
    };
};

//desenho do game
//linha verde vertical com espessura 5px
ctx.beginPath();
ctx.strokeStyle = '#000'; //cor dos traçados
ctx.fillStyle = '#000'; //cor do preenchimento
ctx.lineWidth = 5;//espessura da linha
ctx.lineJoin = 'round';
ctx.moveTo(50, 50); 
ctx.lineTo(950, 50); 
ctx.lineTo(950, 550); 
ctx.lineTo(50, 550); 
ctx.lineTo(50, 50); 
ctx.stroke(); //traçar as linhas
//ctx.fill(); //preencher o objeto format
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 250);
ctx.lineTo(50, 250);
ctx.lineTo(50, 50);
ctx.stroke(); //traçar as linhas
ctx.fill(); //preencher o objeto format
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(50, 550);
ctx.lineTo(150, 550);
ctx.lineTo(150, 350);
ctx.lineTo(50, 350);
ctx.lineTo(50, 550);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(200, 100);
ctx.lineTo(400, 100);
ctx.lineTo(400, 275);
ctx.lineTo(200, 275);
ctx.lineTo(200, 100);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(200, 500);
ctx.lineTo(400, 500);
ctx.lineTo(400, 325);
ctx.lineTo(200, 325);
ctx.lineTo(200, 500);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(450, 50);
ctx.lineTo(450, 150);
ctx.lineTo(600, 150);
ctx.lineTo(600, 50);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(450, 200);
ctx.lineTo(450, 400);
ctx.lineTo(650, 400);
ctx.lineTo(650, 200);
ctx.lineTo(450, 200);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(450, 550);
ctx.lineTo(450, 450);
ctx.lineTo(600, 450);
ctx.lineTo(600, 550);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(650, 200);
ctx.lineTo(650, 100);
ctx.lineTo(800, 100);
ctx.lineTo(800, 500);
ctx.lineTo(650, 500);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(850, 50);
ctx.lineTo(950, 50);
ctx.lineTo(950, 250);
ctx.lineTo(850, 250);
ctx.lineTo(850, 50);
ctx.fill();
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'
ctx.lineWidth = 5;
ctx.moveTo(850, 550);
ctx.lineTo(950, 550);
ctx.lineTo(950, 350);
ctx.lineTo(850, 350);
ctx.lineTo(850, 550);
ctx.fill();
ctx.stroke()
// FIM DO DESENHO DO GAME