import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralInfoComponent } from './profile/general-info/general-info.component';
import { AddressComponent } from './profile/address/address.component';
import { CodesComponent } from './profile/codes/codes.component';
import { PurchaseHistoryComponent } from './profile/purchase-history/purchase-history.component';
import { CartStatusComponent } from './profile/cart-status/cart-status.component';
import { SazegaryabComponent } from './sazegaryab/sazegaryab.component';
import { isLoggedIn } from './route.guard';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'log-in', component: LogInComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'general', component: GeneralInfoComponent },
      { path: 'addresses', component: AddressComponent },
      { path: 'codes', component: CodesComponent },
      { path: 'cartStatus', component: CartStatusComponent },
      { path: 'purchaseHistory', component: PurchaseHistoryComponent },
    ],
    canActivate: [isLoggedIn],
    canActivateChild: [isLoggedIn],
  },
  {
    path: 'sazegaryab',
    component: SazegaryabComponent,
    canActivate: [isLoggedIn],
  },
  { path: '**', component: NotFoundPageComponent },
];
