// types
// interfaces

//  interface IAnimal{
//      nome: string,
//      tipo: 'terrestre' | 'aquatico'
//      domestico: boolean,
//      executarRugido(alturaEmDecibeis: number): void
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     domestico: false,
//     executarRugido: alturaEmDecibeis => (`${alturaEmDecibeis}`)
// }

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
//     domestico: false,
//     executarRugido: alturaEmDecibeis => (`${alturaEmDecibeis}`)
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande'
// }

// type IDomestico = IFelino | ICanino

// const animal2: IDomestico = {
//     domestico: true,
//     nome: 'Cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
//     visaoNoturna: false,
//     executarRugido: alturaEmDecibeis => (`${alturaEmDecibeis}`)
// }

// const input = document.getElementById('input') as HTMLInputElement
// input.addEventListener('input', (e) => {
//     const i = event.currentTarget as HTMLInputElement
//     console.log(i.value)
// })

// Generic types
function addApendiceLista<NaoSei>(array: any[], value: NaoSei){
    return array.map(item => item + value)
}

addApendiceLista([1, 2, 3], 1)