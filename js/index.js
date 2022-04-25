// $(document).ready(function(){
//       let dom1 = document.querySelector('#container-1')
//       console.log(dom1.dataset);
// })
let alertbox = document.querySelector('#send-alert')
let modalBox = document.querySelector('#form-modal')


function showAlert(text,timeout = 2000) {
    alertbox.style.display = "block"
    alertbox.innerHTML = text
    setTimeout(()=>{
        alertbox.style.display = "none"
    },timeout)
}

function hideModal(){
    modalBox.style.display ='none'
    document.querySelector('.modal-backdrop').style.display = 'none' 
    $('#app-loading').hide()

}

function initEvent(){
    document.querySelector('#SendMessage').addEventListener('click', ()=>{
        $('#app-loading').show()
        setTimeout(()=>{
            hideModal()
            showAlert('😍 Votre message a été envoyé avec succès !!!')
        }, 3000)
    })
}

setTimeout(()=>{
    initEvent()
},2000)
initEvent()
