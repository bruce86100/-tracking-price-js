const nightmare = require('nightmare')()

const args = process.argv.slice(2)
const url = args[0]
const minPrice = args[1]
https://www.amazon.com/Native-Instruments-Komplete-Ultimate-Software/dp/B07GY8BSQJ
checkPrice()

async function checkPrice() {
    try {
    const priceString = await nightmare.goto(url)
    .wait("#priceblock_ourprice")
    .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
    .end()
const priceNumber = parseFloat(priceString.replace('$', ''))
if(priceNumber < minPrice) {
console.log("cheap")
    } else {
        console.log("expensive")
    }
} catch(err) {
    console.log(err)
}
}