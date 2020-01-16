import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {ProfileListComponent} from "~/app/components/profile-list/profile-list";
import {ProfileComponent} from "~/app/components/profile/profile";

const routes: Routes = [
    { path: "", component: ProfileListComponent },
    { path: "profile", component: ProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
