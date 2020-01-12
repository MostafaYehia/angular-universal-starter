import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [{
  path: "",
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
}, {
  path: '**',
  component: PageNotFoundComponent
}];

/**
 * @Name Routing Module
 * @Role Manage Routes
 * @Signature No Declarations, Guards' Services
 * @Deps RouterModule
 * @Exports RouterModule
 */

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
