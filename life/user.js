var user = (function (e = 'sergi@gmail.com') {
    let email = e;
    var password = 'dsadasdasdsas' ;

    function consoleme(){
        console.log('Usuari: '+ email)
    }
    
    function setemail() {
        
    }
    return {
        consoleme: consoleme,
        email: email
    }
})()