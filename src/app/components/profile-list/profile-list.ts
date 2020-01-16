import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { CouchbaseService } from "../../couchbase.service";

@Component({
    selector: "profile-list",
    templateUrl: "./profile-list.html",
})
export class ProfileListComponent implements OnInit, OnDestroy {

    public profiles: Array<any>;
    private database: any;

    public constructor(private router: Router, private location: Location, private zone: NgZone, private couchbase: CouchbaseService) {
        this.database = this.couchbase.getDatabase();
        this.profiles = [];
    }

    public ngOnInit() {
        this.location.subscribe(() => {
                this.refresh();
        });
        this.couchbase.startSync("http://192.168.57.1:4984/example", true);
        this.database.addDatabaseChangeListener((changes) => {
            for (let i = 0; i < changes.length; i++) {
                let document = this.database.getDocument(changes[i].getDocumentId()); this.zone.run(() => {
                    this.profiles.push(document);
                });
            }
        });
        this.refresh();
    }

    public ngOnDestroy(): void {
        this.couchbase.stopSync();
    }

    public refresh() {
        this.profiles = [];
        let rows = this.database.executeQuery("profiles");
        for(let i = 0; i < rows.length; i++) {
            this.profiles.push(rows[i]);
        }
    }

    public create() {
        this.router.navigate(["profile"]);
    }

}
