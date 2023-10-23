const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let customers = '1'
let location = 'RSA'
let currency = null
let shipping = 0

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 

let cost = shoes+toys+shirts+batteries+pens

if (location === 'RSA') { 
    shipping = 400
    currency = 'R' 
} else {
    if (location === 'NAM') {
        shipping = 600
        currency = '$' 
    } else {
        shipping = 800
        currency = '$' 
    }
}

if ((cost >= 1000 && currency === 'R' || cost >= 60 && currency === '$') && (location === 'RSA' || location === 'NAM') && customers === '1') {
    shipping = 0
} else {
    if (customers !== '1') {
        console.log(FREE_WARNING)
    }
}

location === 'NK' ? console.log(BANNED_WARNING) : console.log('Price: '+ currency + (cost+shipping))