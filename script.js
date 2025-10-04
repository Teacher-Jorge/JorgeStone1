const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const input6 = document.getElementById('input6')
const input7 = document.getElementById('input7')
const input8 = document.getElementById('input8')
const input9 = document.getElementById('input9')
const input10 = document.getElementById('input10')
const input11 = document.getElementById('input11')
const input12 = document.getElementById('input12')

const right1 = document.getElementById('right1')
const right2 = document.getElementById('right2')
const right3 = document.getElementById('right3')
const right4 = document.getElementById('right4')
const right5 = document.getElementById('right5')
const right6 = document.getElementById('right6')
const right7 = document.getElementById('right7')
const right8 = document.getElementById('right8')

input1.addEventListener('keyup', (e) => {
    if(input1.value === "Is he") {
        input1.style.color = 'darkorange'
        right1.style.visibility = 'visible'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if(input2.value === "he's") {
        input2.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('input3').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if(input3.value === "He's") {
        input3.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        right2.style.visibility = 'visible'
        document.getElementById('input4').focus()
    }
})

input4.addEventListener('keyup', (e) => {
    if(input4.value === "Are they") {
        input4.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('input5').focus()
    }
})

input5.addEventListener('keyup', (e) => {
    if(input5.value === "they're") {
        input5.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('input6').focus()
    }
})

input6.addEventListener('keyup', (e) => {
    if(input6.value === "They're") {
        input6.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        right4.style.visibility = 'visible'
        document.getElementById('input7').focus()
    }
})

input7.addEventListener('keyup', (e) => {
    if(input7.value === "Are") {
        input7.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        right5.style.visibility = 'visible'
        document.getElementById('input8').focus()
    }
})

input8.addEventListener('keyup', (e) => {
    if(input8.value === "they are") {
        input8.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('input9').focus()
    }
})

input9.addEventListener('keyup', (e) => {
    if(input9.value === "they're") {
        input9.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        right6.style.visibility = 'visible'
        document.getElementById('input10').focus()
    }
})

input10.addEventListener('keyup', (e) => {
    if(input10.value === "Is he") {
        input10.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        right7.style.visibility = 'visible'
        document.getElementById('input11').focus()
    }
})

input11.addEventListener('keyup', (e) => {
    if(input11.value === "he is") {
        input11.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('input12').focus()
    }
})

input12.addEventListener('keyup', (e) => {
    if(input12.value === "he's") {
        input12.style.color = 'darkorange'
        const audio = document.getElementById('rightSound')
        audio.play()
        right8.style.visibility = 'visible'
    }
})