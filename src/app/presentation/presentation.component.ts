import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {HashtableDrawComponent} from "./view/HashtableDrawComponent";
import {AppController} from "./controller/AppController";
import {Table} from "../dto/Table";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
})
export class PresentationComponent implements OnInit{
  items: MenuItem[] | undefined;
  visible: boolean = false;
  value: string = "";
  size: number = 0;
  drawComponent: HashtableDrawComponent = new HashtableDrawComponent();
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
  }
  drawTable():void{
    try {
      this.size = parseInt(this.value, 10);
      if (!isNaN(this.size)) {
        console.log('Input value:', this.size);
        let table = new Table(this.size);
        this.controller.service.table = table;
        this.drawComponent.setModel(table);
        console.log('input fl draw : ', this.drawComponent.getModel().nodes.length)
        // this.drawComponent.ngOnInit();

      } else {
        throw new Error('Invalid input. Please enter a valid number.');
      }
    } catch (error) {
      console.error('Error ');

    }
  }

}
