import { LightningElement } from 'lwc';

export default class C2pParentcomponent extends LightningElement {
    showModel = false
    msg
    handleClick(){
        this.showModel=true
    }
    closeHandler(event){
        this.msg =event.detail.msg
        this.showModel=false
    }
}