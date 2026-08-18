let menuButtons = document.querySelector('#menuButtons')
let menuOpen = document.querySelector('#menuOpen')
let menuClose = document.querySelector('#menuClose')
let navigationList = document.querySelector('#navigationList')
let profileCard = document.querySelector('#profileCard')
let aside = document.querySelector('aside')
let addTransaction = document.querySelector('#add-transaction')
let transactionInput = document.querySelector('#transaction-input')
let transactionPage = document.querySelector('#transaction-page')
let cancelTransaction = document.querySelector('#cancel-transaction')


menuButtons.addEventListener('click',(e)=>{
    let clickedButton = e.target.dataset.action
    if(clickedButton=='menu-open'){
        document.body.classList.add('overflow-hidden')
        aside.classList.remove('lg:h-screen')
        aside.classList.add('h-dvh')
        navigationList.classList.remove('hidden')
        profileCard.classList.remove('hidden')
        menuOpen.classList.add('hidden')
        menuClose.classList.remove('hidden')
    }
    if(clickedButton == 'menu-close'){
         document.body.classList.remove('overflow-hidden')
        aside.classList.remove('h-dvh')
        aside.classList.add('lg:h-screen')
        navigationList.classList.add('hidden')
        profileCard.classList.add('hidden')
        menuClose.classList.add('hidden')
        menuOpen.classList.remove('hidden')
    }
})

addTransaction.addEventListener('click',()=>{
    transactionInput.classList.remove('hidden')
    transactionPage.classList.add('hidden')
})

cancelTransaction.addEventListener('click',(e)=>{
    e.preventDefault()
    transactionInput.classList.add('hidden')
    transactionPage.classList.remove('hidden')
})