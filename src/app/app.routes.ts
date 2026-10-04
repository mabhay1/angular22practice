import { Routes } from '@angular/router';
import { NgifPractice } from './pages/ngif-practice/ngif-practice';
import { FunctionPractice } from './pages/function-practice/function-practice';
import { NotFound404 } from './pages/not-found404/not-found404';
import { NgClassPractice } from './pages/ng-class-practice/ng-class-practice';
import { FormsPractice } from './pages/forms-practice/forms-practice';
import { GetApi } from './pages/get-api/get-api';
import { AddUpdateBulkCity } from './pages/add-update-bulk-city/add-update-bulk-city';
import { Enquiry } from './pages/enquiry/enquiry';
import { BusVendor } from './pages/bus-vendor/bus-vendor';
import { SignalBasic } from './pages/signal-basic/signal-basic';
import { BasicReactiveForm } from './pages/basic-reactive-form/basic-reactive-form';
import { BasicSignalForm } from './pages/basic-signal-form/basic-signal-form';
import { ParentResuableComponent } from './pages/parent-resuable-component/parent-resuable-component';
import { ViewChildEx } from './pages/view-child-ex/view-child-ex';
import { TemplateContainer } from './pages/template-container/template-container';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'ngif-practice',
        pathMatch:'full'
    },
    {
        path:'function-practice',
        component:FunctionPractice
    },
    {
        path:'ngif-practice',
        component:NgifPractice
    },
    {
        path: 'ngClass-practice',
        component:NgClassPractice
    },
    {
        path:'functions-practice',
        component:FormsPractice
    },
    {
        path:'get-api',
        component:GetApi
    },
    {
        path:'bulk-city',
        component:AddUpdateBulkCity
    },
    {
        path:'enquiry',
        component:Enquiry
    },
    {
        path:'bus-vendor',
        component:BusVendor
    },
    {
        path:'signal-basic',
        component:SignalBasic
    },
    {
        path:'basic-reactive',
        component:BasicReactiveForm
    },
    {
        path:'basic-signal-form',
        component:BasicSignalForm
    },
    {
        path:'parent-reusable',
        component:ParentResuableComponent
    },
    {
        path:'view-child',
        component:ViewChildEx
    },
    {
        path:'ng-template-container',
        component:TemplateContainer
    },
    {
        path:'**',
        component:NotFound404
    }
];
