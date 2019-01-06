import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      ErrorComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      ErrorComponent
    ],
    imports: [
      RouterModule
    ]
  })
  export class LayoutModule {}