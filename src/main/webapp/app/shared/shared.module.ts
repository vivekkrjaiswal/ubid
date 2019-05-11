import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UbidSharedLibsModule, UbidSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [UbidSharedLibsModule, UbidSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [UbidSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UbidSharedModule {
  static forRoot() {
    return {
      ngModule: UbidSharedModule
    };
  }
}
