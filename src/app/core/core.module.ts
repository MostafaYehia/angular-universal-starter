import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @Name Core ( just one core module in the whole app )
 * @Role Contains Shared Application Logic
 * @Signature No Declarations, Providers Only
 * @Deps None
 * @Exports None
 */

@NgModule({
  imports: [
    CommonModule
  ]
})
export class CoreModule { 

  /**
   * @param parentModule Guard against a lazy loaded module re-importing CoreModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if(parentModule) {
        throw new Error('CoreModuleModule is already loaded. Import it in the AppModule only');
      }
  }
}
