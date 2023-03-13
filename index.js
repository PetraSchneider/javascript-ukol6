/*const stedryDen = dayjs('2022-12-24')
const today = dayjs()

if (today.isAfter(stedryDen) ) {
    alert('Musíš počkat na příští rok')
} else {
    alert('Už brzy přijde Ježíšek!')
}*/
/*
const email = prompt('Zadejte váš e-mail')
const isEmail = validator.isEmail(email)
const messageElement = document.querySelector('#msg')

if (isEmail) {
    messageElement.textContent = 'E-mail v pořádku'
    messageElement.classList.add('msg--valid')
} else {
    messageElement.textContent = 'Neplatný e-mail'
    messageElement.classList.add('msg--invalid')
}
*/
/*
function mojeFunkce(){
    console.log("Volání z Mojí funkce!")
}
const mojeDruhaFunkce = function(){}

const mojeTretiFunkce = () => {

}

mojeFunkce()
mojeDruhaFunkce()
mojeTretiFunkce()

const plochaTRojuhelniku = (sirka,vyska) => {
 return (sirka*vyska)/2
}

console.log(plochaTRojuhelniku(20,10))

const overeniDelkyHesla = (password) => {
    if(password.lenght > 12){
        console.log('Heslo je Bezpečné:)')
    } else{
        console.log('Heslo není Bezpečné!')
    }
}
const zprava = document.querySelector('.msg')
const overeniHesla = (password) =>{
    if(password == '123456'){
      zprava.textContent = "Heslo je správné"  
      zprava.classList.add('msg--valid')
    } else { 
        zprava.textContent = "Heslo je špatné"
        zprava.classList.add('msg--invalid')
        }
}*/
/*
const pi = Math.PI
const ellipseArea = (width,height) => {
    return((width/2)*(height/2)) * pi //Math.PI
}
console.log(ellipseArea(1,2))*/
/*
const max2 = (x,y) => {
    if (x < y){
        return y
    } else{
        return x
    }
}
console.log(max2(5,2))*/

const isDIC = (inputStr) => {
    if ((inputStr.lenght < 11) && (inputStr.lenght > 12)) {
        return false
    } else {
        return true
    }
}
const prefix = inputStr.slice(0, 2)
if (prefix !== 'CZ') {
    return false
}