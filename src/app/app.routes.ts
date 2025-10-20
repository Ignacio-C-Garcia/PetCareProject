import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Register } from './views/register/register';
import { PetContainer } from './components/pet-container/pet-container';
import { PetDetails } from './views/pet-details/pet-details';
import { UserSettings } from './views/user-settings/user-settings';

export const routes: Routes = [
    {
        path: "",
        component: PetContainer
    }, {
        path: "login",
        component: Login
    }, {
        path: "register",
        component: Register
    }, {
        path: "user/settings",
        component: UserSettings
    }, {
        path: "mypets/:id",
        component: PetDetails
    }];
