/* import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
 
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  template: '<h1>You are viewing a page</h1>',
  styles: ['h1 { color: purple; }']
})
export class ViewComponent { }
