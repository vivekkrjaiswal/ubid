import { NgModule } from '@angular/core';

import { UbidSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [UbidSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [UbidSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class UbidSharedCommonModule {}
