function MyFunction(){
            var x = document.querySelector('.password input');
            if(x.type === "password"){
                x.type = "text";
            } 
            else if(x.type === "text"){
                x.type = "password";
            }
}