import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Table} from '../../dto/Table'
import {Service} from "../../service/Service";
import {Node} from "../../dto/Node"
import {MenuItem} from "primeng/api";
import {Draw} from "./drawing/Draw";

@Component({
  selector: 'app-hashtable-draw',
  templateUrl: './hashtableDrawComponent.component.html',

})
export class HashtableDrawComponent implements OnInit {
  items: MenuItem[] | undefined;
  visible: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visibleRemove : boolean = false;
  value : string = "";
  name : string = "";
  size : number = 0;
  removed : boolean = false
  removedValue : string = "";
  index : number = 0;
  added : boolean = false;
  animate : boolean = false;
  // drawComponent? : Draw

  constructor(private renderer: Renderer2) {}
  @ViewChild('container') container!:any;
  private model : Table = new Table(0);

  // public getModel() :Table {
  //   return this.model
  // }
  public  setModel(model : Table): void{
    this.model = model;
    console.log(model)

    }

  createCanvas() {
    let canvas = this.renderer.createElement('canvas');
    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    this.container.nativeElement.innerHTML = '';
    this.container.nativeElement.appendChild(canvas);

    if (this.model.nodes.length>0) {
      this.draw(ctx, this.model);
    }

  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            command: () => this.visible = true


          },
          {
            label: 'Add',
            icon: 'pi pi-fw pi-user',
            command: () => this.visible1 = true
          },
          {
            separator: true
          },
          {
            label: 'Clear',
            icon: 'pi pi-fw pi-trash',
            command: () => this.clear()
          },

        ],
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-comment'
      }
    ]

  }

  public drawNode(context : CanvasRenderingContext2D, nodeX: number, nodeY: number, n: Node, i: number, k:number){
    if(n.next == null && i == this.index && this.added){
      setTimeout(() => {
        context.beginPath();
        context.moveTo(nodeX-40, nodeY+60);
        context.lineTo(nodeX , nodeY+60);
        context.stroke();
        context.fillStyle = 'orange'
        context.fillRect(nodeX, nodeY + 10, 100, 100)
        context.strokeRect(nodeX, nodeY + 10, 100, 100);
        context.font = "16px Arial";
        context.fillStyle= 'black';
        context.fillText(n.value, nodeX + 20, nodeY + 60);
      }, this.index * 3000 + 1500*k);
    }
    else if(this.index ==i && this.added){
      context.beginPath();
      context.moveTo(nodeX-40, nodeY+60);
      context.lineTo(nodeX , nodeY+60);
      context.stroke();
      context.strokeRect(nodeX, nodeY + 10, 100, 100);
      setTimeout(() =>{

        context.fillStyle = 'orange'
        context.fillRect(nodeX, nodeY + 10, 100, 100)
        context.strokeRect(nodeX, nodeY + 10, 100, 100);

      }, 2000*k + 1000)
      setTimeout(()=>{
        context.fillStyle = 'white'
        context.fillRect(nodeX, nodeY + 10, 100, 100)
        context.strokeRect(nodeX, nodeY + 10, 100, 100);
        context.font = "16px Arial";
        context.fillStyle= 'black';
        context.fillText(n.value, nodeX + 20, nodeY + 60);
      }, 3000*k +1000)
    }
    else {
      context.beginPath();
      context.moveTo(nodeX-40, nodeY+60);
      context.lineTo(nodeX , nodeY+60);
      context.stroke();
      context.strokeRect(nodeX, nodeY + 10, 100, 100);
      context.font = "16px Arial";
      context.fillStyle= 'black';
      context.fillText(n.value, nodeX + 20, nodeY + 60);
    }

    context.canvas.addEventListener('click', (event) => {
      const rect = context.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (mouseX >= nodeX && mouseX <= nodeX + 100 && mouseY >= nodeY + 10 && mouseY <= nodeY + 110) {
        console.log("Clicked node value:", n.value);
        this.visibleRemove = true
        this.removed = true
        this.removedValue = n.value;
      }
    });
  }
  public drawMsalha(context : CanvasRenderingContext2D, nodeX: number, nodeY : number){
    context.beginPath();
    context.moveTo(nodeX-40, nodeY+60);
    context.lineTo(nodeX , nodeY+60);
    context.stroke();
    context.beginPath();
    context.moveTo(nodeX, nodeY+30);
    context.lineTo(nodeX , nodeY+90);
    context.stroke();
    context.moveTo(nodeX, nodeY+45);
    context.lineTo(nodeX+10 , nodeY+35);
    context.stroke();
    context.moveTo(nodeX, nodeY+60);
    context.lineTo(nodeX+10 , nodeY+50);
    context.stroke();
    context.moveTo(nodeX, nodeY+75);
    context.lineTo(nodeX+10 , nodeY+65);
    context.stroke();
  }
  public draw(context : CanvasRenderingContext2D, model : Table){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    let caseSize = 150;
    let tableSize = model.nodes.length;
    let startX = context.canvas.width/ 2 - 800;
    let startY = context.canvas.height / 6 -100 ;
    let k = 0;
    for (let i = 0; i<tableSize; i++){
      if(this.index>=i && this.added ){

        setTimeout(()=>{
          startY = startY + caseSize
          context.font = "24px Ariel"
          context.fillStyle = 'green'
          context.strokeRect(startX,startY-(tableSize+1)*caseSize,caseSize,caseSize);
          context.fillText(i.toString(),startX-20, startY + 80 -(tableSize+1)*caseSize,caseSize)
          context.fillRect(startX,startY-(tableSize+1)*caseSize,caseSize,caseSize)
        }, i*1000+1000)
        setTimeout(()=>{

          context.strokeRect(startX,startY-(tableSize+1)*caseSize,caseSize,caseSize);
          context.fillStyle = "white"

          context.fillRect(startX,startY-(tableSize+1)*caseSize,caseSize,caseSize)
        }, i*2000+1000)

      }
      context.strokeRect(startX,startY,caseSize,caseSize);
      startY = startY + caseSize
      let n : Node |null = model.nodes[i]
      let nodeX = startX + caseSize + 40;
      let nodeY = startY - caseSize;

      while(n!= null ){
        this.drawNode(context, nodeX, nodeY,n, i, k)
        nodeX+=caseSize-10  ;
        n = n.next as Node
        k++;

      }
      if(this.index == i && this.added){
        setTimeout(()=>{
          this.drawMsalha(context, nodeX, nodeY)
        },i*4000 +k*1000)
      }
      else {
        this.drawMsalha(context, nodeX, nodeY)
      }

    }
    this.animate = false
    this.added = false

  }
  test(): void{
    try {
      this.size = parseInt(this.value)
      if(!isNaN(this.size)){
        this.model = new Table(this.size);
        this.createCanvas()
        this.visible = false
      }
      else {
        throw new Error('Invalid input. Please enter a valid number.');
      }
    }
    catch (e) {
      console.error('Error ');
      this.visible2 = true;
    }


  }
  clear(){
    this.model = new Table(0)
    this.createCanvas()
  }
  add(): void{
    if(this.size == 0 ){
      this.visible3 = true
    }
    else {

      let service  = new Service(this.model)
      console.log(service.table.nodes.length)
      service.add(this.name)
      this.index = service.hash(this.name);
      this.added = true
      this.createCanvas()
      this.visible1 = false

    }

  }
  close(){
    this.visible3 = false
    this.visible1 = false
    this.visibleRemove = false
  }
  remove(){
    let service  = new Service(this.model)
    service.remove(this.removedValue);
    this.createCanvas()
    this.visibleRemove = false

  }





}
