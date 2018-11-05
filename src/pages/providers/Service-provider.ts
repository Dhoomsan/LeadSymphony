import { FormControl } from '@angular/forms';
export class ServiceProvider {
    
    static isEmailValid(control: FormControl){
 
    	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = re.test(control.value);
        
        if (!result) {
        	return {
        		'email:validation:fail' : true
        	}
        }
        return null;
    }
 
    static isLogged(){
        let ReceivedData = window.localStorage.getItem("Logged");
        if (JSON.parse(ReceivedData )!=null) {
            return true;
        } 
        else{
            return false;
        }
    }
    static login(){
        window.localStorage.setItem("Logged",JSON.stringify("Logged"));
    }
    static logout(){
        window.localStorage.removeItem('Logged');
    }
}