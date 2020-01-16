import { Injectable } from "@angular/core";
import { Couchbase } from "nativescript-couchbase";

@Injectable()
export class CouchbaseService {

    private database: any;
    private pull: any;
    private push: any;

    public constructor() {
        if(!this.database) {
            this.database = new Couchbase("data");
            this.database.createView("profiles", "1", function(document, emitter) {
                emitter.emit(document._id, document);
            });
        }
    }

    public getDatabase() {
        return this.database;
    }

    public startSync(gateway: string, continuous: boolean) {
        this.push = this.database.createPushReplication(gateway);
        this.pull = this.database.createPullReplication(gateway);

        this.push.setContinuous(continuous);
        this.pull.setContinuous(continuous);

        this.push.start();
        this.pull.start();
    }

    public stopSync() {
        this.push.stop();
        this.pull.stop();
    }

}
