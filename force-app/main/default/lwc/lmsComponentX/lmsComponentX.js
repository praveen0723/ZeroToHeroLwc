import { LightningElement, wire } from 'lwc';
import {MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
export default class LmsComponentX extends LightningElement {
       recievedMessage
       subscription
    @wire(MessageContext)
       context
       connectedCallback(){
        this.subscribeMessage()
       }
     subscribeMessage(){
     this.subscription=subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})

      }
      handleMessage(message){
        this.recievedMessage = message.lmsData.value ? message.lmsData.value : 'No Message published' 
      }  
      unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription=null
      } 
}