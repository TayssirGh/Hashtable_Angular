import {Component, OnInit, Renderer2} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AppController} from "./controller/AppController";
import {Table} from "../dto/Table";
import {HashtableDrawComponent} from "./view/HashtableDrawComponent";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
})
export class PresentationComponent implements OnInit{

  constructor(private renderer: Renderer2) {}
  items: MenuItem[] | undefined;
  visible: boolean = false;
  value: string = "";
  size: number = 0;

  drawComponent: HashtableDrawComponent = new HashtableDrawComponent(this.renderer)
  controller: AppController = new AppController();

  ngOnInit() {
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
            icon: 'pi pi-fw pi-user'
          },
          {
            separator: true
          },
          {
            label: 'Clear',
            icon: 'pi pi-fw pi-trash'
          },

        ],
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-comment'
      }
    ]
    if (this.renderer) {
      this.drawComponent = new HashtableDrawComponent(this.renderer);
    }
  }
  drawTable():void{
    try {
      this.size = parseInt(this.value, 10);
      if (!isNaN(this.size)) {
        console.log('Input value:', this.size);
        // console.log(this.controller.service.add("testes"))
        let table = new Table(this.size);
        this.controller.service.table = table;
        this.drawComponent.setModel(table);
        // this.drawComponent.createCanvas();
        // console.log('input fl draw : ', this.drawComponent.getModel().nodes.length)
        // this.drawComponent.ngOnInit();

      } else {
        throw new Error('Invalid input. Please enter a valid number.');
      }
    } catch (error) {
      console.error('Error ');

    }
  }

}
