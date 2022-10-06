// Author: KB
// Version: 1.0
// All Rights Copyrights 2022

class cookieSupport{
    static list(){
    	var cookies = document.cookie.split(";");
      	console.warn("[Cookie] List Availables Cookies")
        for (var cookie in cookies){
        	console.log(cookies[cookie])
    	}
        console.warn("=================================")
    }
	static check(cookie_name){
    	/*var res = document.cookie.indexOf(cookie_name + "=");
      	if (res == 0){
        	return "[Cookie] " + cookie_name + " exist";
        }
      	else{
        	return "[Cookie] " + cookie_name + " no exist";
        }*/
      	var res = this.get(cookie_name);
        if (res.length > 0){
        	return "[Cookie] " + cookie_name + " exist";
        }
      	else{
        	return "[Cookie] " + cookie_name + " no exist";
        }
    }
  	static check_val(cookie_name){
    	/*var res = document.cookie.indexOf(cookie_name + "=");
      	if (res == 0){
        	return true;
        }
      	else{
        	return false;
        }*/
        var res = this.get(cookie_name);
		try{
          if (res.length > 0){
              return true;
          }
          else{
              return false;
          }
        }
   catch{
          return false;
        }
    }
  	static get(cookie_name){
    	const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookie_name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    static add(cookie_name, value){
      try{
      	  document.cookie =  cookie_name + "=" + value +  "; expires=Thu, 31 Dec 2023 23:59:00 UTC";
          return "[Cookie] " + cookie_name +  " created";
      }
      catch{
          return "[Cookie] invalid cookie name or value";
	  }
    }
  	static edit(cookie_name, value){
      this.add(cookie_name, value)
    }
  	static remove(cookie_name){
      	try{
    		document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      		document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
         	return "[Cookie] " + cookie_name + " deleted"
        }
      	catch{
          	return "[Cookie] Problem with delete Cookie " + cookie_name
        }
    }
  
  	/* Setup Aliases */
  	
    static delete(cookie_name){
      this.remove(cookie_name);
    }  	
    static del(cookie_name){
      this.delete(cookie_name);
    }    
  	static find(cookie_name, value){
      this.check(cookie_name);
    }
}

// Init
const cst = cookieSupport