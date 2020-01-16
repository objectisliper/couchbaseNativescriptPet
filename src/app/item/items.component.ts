import {Component, OnInit, ViewContainerRef} from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {ModalDialogService} from "nativescript-angular/directives/dialogs";
import {Couchbase} from "nativescript-couchbase";
import {ModalComponent} from "~/app/app.modal";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    public profile: any;
    private database: any;

    public constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef) {
        this.profile = {
            photo: "~/kitten1.jpg",
            firstname: "",
            lastname: ""
        };
        this.database = new Couchbase("data");
    }

    ngOnInit(): void {
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
        let document = this.database.getDocument("mydockey");
        if(document) {
            this.database.updateDocument("mydockey", this.profile);
        } else {
            this.database.createDocument(this.profile, 'mydockey');
        }
        this.profile = {
            photo: "~/kitten1.jpg",
            firstname: "",
            lastname: ""
        }
    }

    public load() {
        this.profile = this.database.getDocument("mydockey");
    }
}
