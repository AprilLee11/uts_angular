import { NgModule } from '@angular/core';

import { APP_SERVICES } from './services';

@NgModule({
    imports: [],
    declarations: [],
    exports: [], 
    providers: [...APP_SERVICES]
})

export class CoreModule {}

