import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {ModalComponent} from "~/app/app.modal";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import {ProfileListComponent} from "~/app/components/profile-list/profile-list";
import {ProfileComponent} from "~/app/components/profile/profile";
import {CouchbaseService} from "~/app/couchbase.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    declarations: [
        AppComponent,
        ModalComponent,
        ItemsComponent,
        ItemDetailComponent,
        ProfileListComponent,
        ProfileComponent,
    ],
    entryComponents: [ModalComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, AppRoutingModule],
    providers: [ModalDialogService, CouchbaseService],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
