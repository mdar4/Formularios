const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submiteButtom = document.querySelector('.login-submite');

    if(submiteButtom){
        submiteButtom.addEventListener('click',(event)=> {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers:{
                    'Content-Type' :'application/json'
                },
                body:JSON.stringify({
                    email: inputEmail.Value,
                    password: inputPassword.Value,
                })
            }).then((response)=>{
                return response.json();
            }).then((data)=> {
                console.log(data)
            })
        })
    }
}

window.onload = init;