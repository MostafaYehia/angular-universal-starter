import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

/**
 * @Name Routing Module
 * @Role Manage Routes
 * @Signature No Declarations, Guards' Services
 * @Deps RouterModule
 * @Exports RouterModule
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
