let menuButtons = document.querySelector('#menuButtons')
let menuOpen = document.querySelector('#menuOpen')
let menuClose = document.querySelector('#menuClose')
let navigationList = document.querySelector('#navigationList')
let profileCard = document.querySelector('#profileCard')
let aside = document.querySelector('aside')
let closeSettings = document.querySelector('#closeSettings')
let settingsForm = document.querySelector('#settingsForm')
let openSettingsForm = document.querySelector('#openSettingsForm')
let preferences = document.querySelector('#preferences')
let profile = document.querySelector('#profile')
let profilePage = document.querySelector('#profilePage')
let preferencesPage = document.querySelector('#preferencesPage')

menuButtons.addEventListener('click',(e)=>{
    let clickedButton = e.target.dataset.action
    if(clickedButton=='menu-open'){
        document.querySelector('main').classList.add('hidden')
        aside.classList.add('h-[calc(100dvh-55px)]')
        navigationList.classList.remove('hidden')
        profileCard.classList.remove('hidden')
        menuOpen.classList.add('hidden')
        menuClose.classList.remove('hidden')
    }
    if(clickedButton == 'menu-close'){
        document.querySelector('main').classList.remove('hidden')
        aside.classList.remove('h-[calc(100dvh-55px)]')
        navigationList.classList.add('hidden')
        profileCard.classList.add('hidden')
        menuClose.classList.add('hidden')
        menuOpen.classList.remove('hidden')
    }
})

openSettingsForm.addEventListener('click',()=>{
    settingsForm.classList.remove('hidden')
})

closeSettings.addEventListener('click', ()=>{
    settingsForm.classList.add('hidden')
})

profile.addEventListener('click',()=>{
    preferencesPage.classList.add('hidden')
    profilePage.classList.remove('hidden')

})

preferences.addEventListener('click',()=>{
    console.log('yes')
    profilePage.classList.add('hidden')
    preferencesPage.classList.remove('hidden')
})