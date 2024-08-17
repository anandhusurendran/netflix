function validate(){
    var ls_pass = document.getElementById("pass").value;
    var ls_email =document.getElementById("email").value;
    
    if(ls_email==='ArjunMR'){
        if(ls_pass==='1234'){
            alert("sucess");
            
            window.open("index.html")
            window.close();
    }
    else{
        alert("Enter correct Password");
        return false;
    }
    }
    else{
        alert("Enter correct Email ID");
        return false;
    }
}
