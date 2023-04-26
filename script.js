const formEl = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password'); 
const cpassword = document.querySelector('#cpassword'); 

formEl.addEventListener('submit',(e)=>{
    if(!validateInputs()){
    e.preventDefault();
    }
    // validateInputs();

})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal= email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if(usernameVal ===''){
        success = false;
        setError(username, 'username is required')
    }
    else{
        setSucess(username)
    }

    if(emailVal=== ''){
        success = false;
        setError(email, 'email is required')
    }
    else if (!validateEmail(emailVal)){
        success = false;
    setError(email, 'Please enter a valid email')
}
else{
    setSuccess(email)
}

if(passwordVal=== ''){
    success = false;
    setError(password,'password is required')
}
else if (passwordVal.length<8){
    success = false;
    setError(password, 'password must be atleast 8 charteristics')
}
else{
    setSucess(password)
}

if(cpasswordVal === ''){
    success = false;
    setError(cpassword, 'confirm password is required')
}
else if(cpasswordVal!==passwordVal){
    success = false;
    setError(cpassword, 'password not match')
} else{
    setSucess(username)
}
return success;
    
}



//elemens -password , msg -pwd is reqd

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('sucess')
    
}

function setSucess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
    
}


const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)

    );

}

