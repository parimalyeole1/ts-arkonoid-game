import { CanvasView } from './view/CanvasView';
import { Brick } from "./sprites/Brick";
import { Ball } from "./sprites/Ball";
import { Paddle } from "./sprites/Paddle";

// Images
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'
// Level and colors
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup'

let gameOver = false;
let score = 0;

function setGameOver(view:CanvasView){
    view.drawInfo('Game Over!');
    gameOver = false;
}

function setGameWin(veiw:CanvasView){
    veiw.drawInfo('Game Won!');
    gameOver = false;
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball
){}

function startGame(veiw: CanvasView){}
// create new veiw
const view = new CanvasView('#playField');
view.initStartButton(startGame)