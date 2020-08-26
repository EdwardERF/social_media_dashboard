var switcher = true

function changeSwitcher(){
    if(switcher == true){
        //cambiar variables para dark theme
        document.documentElement.style.setProperty('--main-bg', 'hsl(230, 17%, 14%)')
        document.documentElement.style.setProperty('--top-bg', 'hsl(232, 19%, 15%)')
        document.documentElement.style.setProperty('--card-bg', 'hsl(228, 28%, 20%)')
        document.documentElement.style.setProperty('--text-color-one', 'hsl(228, 34%, 66%)')
        document.documentElement.style.setProperty('--text-color-two', 'hsl(0, 0%, 100%)')
        document.documentElement.style.setProperty('--toggle', 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))')
        document.documentElement.style.setProperty('--switcher-place', 'translateX(0)')

        switcher = false
    } else {
        //cambiar variables para light theme
        document.documentElement.style.setProperty('--main-bg', 'hsl(0, 0%, 100%)')
        document.documentElement.style.setProperty('--top-bg', 'hsl(225, 100%, 98%)')
        document.documentElement.style.setProperty('--card-bg', 'hsl(227, 47%, 96%)')
        document.documentElement.style.setProperty('--text-color-one', 'hsl(228, 12%, 44%)')
        document.documentElement.style.setProperty('--text-color-two', 'hsl(230, 17%, 14%)')
        document.documentElement.style.setProperty('--toggle', 'hsl(230, 22%, 74%)')
        document.documentElement.style.setProperty('--switcher-place', 'translateX(21px)')

        switcher = true
    }

    //funcion para cambiar el switcher de lugar.
}
