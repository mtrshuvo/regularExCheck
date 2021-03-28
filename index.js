let form = document.querySelector('form');
let input = document.querySelector('#input');
let select_value = document.querySelector('#expression');

form.addEventListener('submit',check);


function showResult(message){
    let res_div = document.querySelector('#result');
    let p = document.createElement('p');
    p_t = document.createTextNode(message);
    p.appendChild(p_t);
    res_div.appendChild(p);


}
function check(e){
    let input_value = input.value;
    switch(select_value.value){

        case "phone":
            check_phone(input_value);
            break;
        case "email":
            check_phone(input_value);
            break;
        case "postcode":
            check_phone(input_value);
            break;

    }
    e.preventDefault();
}
function check_phone(selection){
    if (selection == "phone"){
       showResult("Right");
    }
}