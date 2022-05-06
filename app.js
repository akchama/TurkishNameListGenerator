'use strict'

const fs = require('fs')
const readline = require('readline')

let rawdata = fs.readFileSync('isimler.json')
let people = JSON.parse(rawdata)
let randomIndex = Math.floor(Math.random() * people.length)
let selectedPeople = []

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Kaç tane kişi istiyorsunuz? [Kisi Sayisi]', function (name) {
    for (let i = 0; i < parseInt(name); i ++) {
        selectedPeople.push(people[randomIndex])
        randomIndex = Math.floor(Math.random() * people.length)
    }
    selectedPeople.forEach(p => {
        console.log('"' + p.name + '",')
    })
    rl.close()
})

rl.on('close', function () {
    console.log('\nÇıkış yapılıyor.')
    process.exit(0)
});