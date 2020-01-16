import { Component, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { Couchbase } from "nativescript-couchbase";
import { ModalComponent } from "../../app.modal";
import {CouchbaseService} from "~/app/couchbase.service";

@Component({
    selector: "profile",
    templateUrl: "./profile.html",
})
export class ProfileComponent {

    public profile: any;
    private database: any;

    public constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef, private location: Location, private couchbase: CouchbaseService) {
        this.profile = {
            photo: "~/kitten1.jpg",
            firstname: "",
            lastname: ""
        };
        this.database = this.couchbase.getDatabase();
    }

    public showModal(fullscreen: boolean) {
        let options = {
            context: { promptMsg: "Pick your avatar!" },
            fullscreen: fullscreen,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ModalComponent, options).then((res: string) => {
            this.profile.photo = res || "~/kitten1.jpg";
        });
    }

    public save() {
        this.database.createDocument(this.profile);
        this.location.back();
    }

}
