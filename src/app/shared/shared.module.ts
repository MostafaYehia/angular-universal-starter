import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const COMPONENTS = [];
const DIRECTIVES = [];

const EXPORTS = [];


/**
 * @Name Shared
 * @Role Contains components, directives, and pipes that you use everywhere in your app
 * @Signature Declarations, No Services
 * @Deps CommonModule
 * @Exports Most of the Declarations
 */

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: EXPORTS,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
