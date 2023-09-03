
let characters = [
    {
    name: 'Sakura',
    image: 'characters_01.jpg'
    },
    {
    name: 'Kaede',
    image: 'characters_02.jpg'
    },
    {
    name: 'Aya',
    image: 'characters_03.jpg'
    },
    {
    name: 'Yuuki',
    image: 'characters_04.jpg'
    },
    {
    name: 'Mikoto',
    image: 'characters_05.jpg'
    },
    {
    name: 'Ren',
    image: 'characters_06.jpg'
    },
    {
    name: 'Ryo',
    image: 'characters_07.jpg'
    },
    {
    name: 'Yori',
    image: 'characters_08.jpg'
    },
    {
    name: 'Hana',
    image: 'characters_09.jpg'
    },
    {
    name: 'Tatsuya',
    image: 'characters_10.jpg'
    },
    {
    name: 'Taro',
    image: 'characters_11.jpg'
    },
    {
    name: 'Mai',
    image: 'characters_12.jpg'
    },
    {
    name: 'Emiko',
    image: 'characters_13.jpg'
    },
    {
    name: 'Ayumi',
    image: 'characters_14.jpg'
    },
    {
    name: 'Hotaru',
    image: 'characters_15.jpg'
    },
    {
    name: 'Haru',
    image: 'characters_16.jpg'
    },
    {
    name: 'Kazuya',
    image: 'characters_17.jpg'
    },
    {
    name: 'Akire',
    image: 'characters_18.jpg'
    },
    {
    name: 'Saki',
    image: 'characters_19.jpg'
    },
    {
    name: 'Kazuo',
    image: 'characters_20.jpg'
    }
]

function toggleEliminated(element){

    console.log('TOGGLE ELIMINATED')
    element.classList.toggle('eliminated')

}

function selectRandomCard() {
    let rand = Math.floor(Math.random() * 20)
    return rand;
}

function setMysteryCard(){
    let randomCharacter = selectRandomCard()
    console.log(randomCharacter)
    let mysteryImg = document.querySelector('.mystery-image')
    mysteryImg.src = 'images/' + characters[randomCharacter].image
    let mysteryName = document.querySelector('.mystery-name')
    mysteryName.innerHTML = characters[randomCharacter].name
}
setMysteryCard()