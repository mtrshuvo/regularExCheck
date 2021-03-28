let form = document.querySelector('form');
let option = document.querySelector('#regex')
let p = document.getElementById("result")


form.addEventListener('submit',display);


function display(e){
    let input__value = document.getElementById('input').value.trim();
    if(input__value!==""){
        function check(value,regex){
            if(regex.test(value)){
                p.innerHTML = 'Success'
    
            }
            else{
                p.innerHTML = 'failed'
            }
            setTimeout(function(){
                p.innerHTML ="";
            },3000)
        }
        switch(option.value){
            case '1':
                var re = /^(\+)?(88)?(01)[0-9]{9}$/;
                check(input__value,re);
                break;
            case '2':
                var re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
                check(input__value,re);
                break;
            case '3':
                var re = /^[0-9]{4}$/
                check(input__value,re)
                break;
            
        }
    }
    else{
        alert("Input field empty")
    }

    

    e.preventDefault();
}


