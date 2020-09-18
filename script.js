
let start = document.getElementsByClassName('primaryBtn');

start[0].addEventListener('click', ()=>{

    let val = document.getElementById('time-input').value;
    document.getElementById('input-time-div').style.display = 'none';
    
    let id = setInterval(()=>{
        
        document.getElementsByClassName('time-left')[0].innerText = val--
        if(val == -1){

            clearInterval(id);
            document.getElementsByClassName('time-left')[0].innerText = 'Time Out'
        }
    }, 1000)
})
