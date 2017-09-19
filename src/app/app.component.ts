import { Component } from '@angular/core';

@Component({
 selector: 'my-app',
 template: `
 <h1 style='color:red'>{{title}}</h1>
 <nav>
   <a routerLink="/dashboard">Dashboard</a>
   <a routerLink="/heroes">Employee</a>
 </nav>
 <router-outlet></router-outlet>
 `,
 styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title = 'GREATWITS EMPLOYEEE INFORMATION';
}