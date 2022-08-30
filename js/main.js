
import { subscribeToHellfireClube } from "./firebase/hellfire-clube.js"

    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')


    const btSubscribe = document.getElementById('btSubscribe')

    btSubscribe.addEventListener('click', async () => {
        const subscribe = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value,
        }

         const subscrebeId = subscribeToHellfireClube(subscribe)
         console.log(`Inscrito com sucesso! ${subscrebeId}`)
        
    })