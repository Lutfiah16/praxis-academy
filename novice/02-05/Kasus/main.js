import { Square } from './modules/square.js';
// draw a square
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();
