import { LightningElement,wire } from 'lwc';
import {MessageContext, publish} from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class LmsComponentA extends LightningElement {
   inputValue
    @wire(MessageContext)
    context
    inputHandler(event){
        this.inputValue=event.target.value
    }
    publishMessage(){
       const message={
        lmsData:{
            value:this.inputValue
        }
       }
        publish(this.context,SAMPLEMC,message)   
    }
}