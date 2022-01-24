
window.addEventListener('DOMContentLoaded', ()=>{
    const name = document.querySelector('#name'),
       email = document.querySelector('#email'),
       psw  = document.querySelector('#password'),
       btn = document.querySelector('.btn'),
       userList = document.querySelector("#userList");
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        if(email.value == "" && psw.value == '' && name.value == ''){
            alert('form to\'ldirilmagan')
        }
        else{
            const newRow = document.createElement('tr')
            const newName = document.createElement('td');
            newName.innerHTML= name.value;
            const newEmail = document.createElement('td');
            newEmail.innerHTML = email.value;
            const newPsw = document.createElement('td')
            newPsw.innerHTML = psw.value

            newRow.appendChild(newName);
            newRow.appendChild(newEmail)
            newRow.appendChild(newPsw)
            userList.appendChild(newRow)
            psw.value = '' 
            email.value = ''
            name.value = ''
        }
    })
})
