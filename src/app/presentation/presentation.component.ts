import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
})
export class PresentationComponent implements OnInit{
  items: MenuItem[] | undefined;
  visible: boolean = false;
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',


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
  showDialog() {
    this.visible = true;
  }

}
