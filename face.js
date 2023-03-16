$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gender:{
                required:true 
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
            minlength:"Enter atleast 4 characters"
            }
            
        }
        
    })
})