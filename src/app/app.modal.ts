import { Component, Input } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: "my-modal",
    template: `
        &lt;StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center"&gt;
            &lt;Label [text]="prompt"&gt;&lt;/Label&gt;
            &lt;StackLayout orientation="horizontal" marginTop="12"&gt;
                &lt;Image src="~/kitten1.jpg" width="75" height="75" (tap)="close('~/kitten1.jpg')"&gt;&lt;/Image&gt;
                &lt;Image src="~/kitten2.jpg" width="75" height="75" (tap)="close('~/kitten2.jpg')"&gt;&lt;/Image&gt;
                &lt;Image src="~/kitten3.jpg" width="75" height="75" (tap)="close('~/kitten3.jpg')"&gt;&lt;/Image&gt;
            &lt;/StackLayout&gt;
        &lt;/StackLayout&gt;
    `,
})
export class ModalComponent {

    @Input() public prompt: string;
    constructor(private params: ModalDialogParams) {
        this.prompt = params.context.promptMsg;
    }

    public close(res: string) {
        this.params.closeCallback(res);
    }

}
