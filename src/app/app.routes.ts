import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { PetContainer } from './pet-container/pet-container';

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
    }];
