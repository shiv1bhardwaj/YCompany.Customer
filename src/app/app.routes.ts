import { Routes } from '@angular/router';
import { MyComComponent } from './my-com/my-com.component';
import { AddressComponent } from './views/address/address.component';

import { MyProfileComponent } from './views/my-profile/my-profile.component';
import { DashboardComponent } from './modules/dashboard/views/dashboard.component';
import { PolicyComponent } from './modules/policy/views/policy.component';
import { MyPolicyComponent } from './modules/my-policy/views/my-policy.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'address', component: AddressComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'my-policy', component: MyPolicyComponent },
];
