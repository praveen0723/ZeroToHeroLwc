import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            bubbles:true,
            detail:{
                msg:"This Model Closed Successfully"
            }
        })
        this.dispatchEvent(myEvent)
    }
    footerHandler(){
        console.log("Footer Event Called");
    }
}