import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['div { background: #ECECEB; border: 2px dotted silver; margin-top: 1px; margin-right:1px; margin-bottom:1px; margin-left:1px; }']
})
export class AppComponent {
  title = 'app';
}
