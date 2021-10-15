const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

//Net Dollar Retention

//NDR = (Revenue at the start + upgrades – downgrades – churn) / Revenue at the start

/*
Net dollar retention (NDR) or Net Revenue Retention (NRR) is a SaaS metric to see the fluctuations within the existing revenue base.

NDR is used to further describe the changes in recurring revenue over time according to upgrades, downgrades, and churn. In other words, NDR tells you how much revenue growth or churn you have in a period of time from your existing customers.

It’s a crucial metric that shows you your success in achieving growth without acquiring new customers.
*/


const revAtStart = prompt("Please enter the revenue at the beginning ")
const upgrades = prompt("Dollar value in upgrades? ")
const downgrades = prompt("Dollar value in downgrades? ")
const churn = prompt("Dollar value in churn? ")

const calcNDR = (rev,upg,down,chu) => {
    var calculating = (rev + upg - down - chu) / rev
    return calculating
}

console.log(calcNDR(parseInt(revAtStart),parseInt(upgrades),parseInt(downgrades),parseInt(churn)))