let pronombre = ['yo','usted','el','ella','nosotros','ustedes','ellos','ellas']
let adjetivo = ['grande','pequeño','bonito','feo','rico','pobre']
let sustantivo = ['jugador','corredor','nadador','programador','investigador']

for (let i = 0; i<pronombre.length; i++){
    for(let y = 0; y <adjetivo.length; y++){
        for(let z=0; z<sustantivo.length;z++){
            console.log(pronombre[i]+adjetivo[y]+sustantivo[z]+'.com')
        }
    }
}