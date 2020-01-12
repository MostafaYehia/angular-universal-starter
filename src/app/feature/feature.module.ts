import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';

// Containers
import { FeatureComponent } from './containers/feature/feature.component';


const COMPONENTS = [FeatureComponent];
const DIRECTIVES = [];

const EXPORTS = [];

/**
 * @Name Sample of Feature Module ( Reusable as it is [encapsulated] )
 * @Role Related business logic & UI
 * @Signature No Exports
 * @Deps RoutingModule & SharedModule
 * @Exports None
 */

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: EXPORTS,
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
