import { auth } from './firebase.js'

const buttons = document.querySelectorAll('button[data-tab]')
buttons.forEach(button => button.addEventListener('click', () => {
    const tabName = button.dataset.tab
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => {tab.style.display = 'none';} )
    const activeTab = document.querySelector(`.tab[data-tab="${tabName}"]`)
    activeTab.style.display = 'block'
}))

async function loadUserInfo() {
    const user = auth.currentUser
    const namePlace = document.getElementById('name-place')
    namePlace.textContent = user.displayName
}
await loadUserInfo()
