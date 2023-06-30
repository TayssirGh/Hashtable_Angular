import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Table} from '../../dto/Table'
@Component({
  selector: 'app-hashtable-draw',
  templateUrl: './hashtableDrawComponent.component.html',

})
export class HashtableDrawComponent implements OnInit {
  @ViewChild('canvas', {static : true}) myCanvas!: ElementRef;

  private model : Table = new Table(7);
  public getModel() :Table {
    return this.model
  }
  public  setModel(model : Table): void{
    this.model = model;
  }
  ngOnInit(): void {
    let canvas : HTMLCanvasElement =this.myCanvas.nativeElement
    canvas.width = window.innerWidth -30;
    canvas.height = window.innerHeight;

    let context = canvas.getContext('2d');
    if (context){
      this.draw(context)
    }

  }
  public draw(context : CanvasRenderingContext2D){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    let caseSize = 150;
    let tableSize = this.model.nodes.length;
    let startX = context.canvas.width/ 2 - 800;
    let startY = context.canvas.height / 6 -100 ;

    for (let i = 0; i<tableSize; i++){
      context.strokeRect(startX,startY,caseSize,caseSize);
      startY = startY + caseSize
    }

  }
}
