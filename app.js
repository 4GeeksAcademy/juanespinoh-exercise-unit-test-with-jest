let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// fromDollarToYen, fromEuroToDollar, and fromYenToPound
const fromDollarToYen=(dollarValue)=>parseFloat((dollarValue * 156.5).toFixed(2))
const fromEuroToDollar=(euroValue)=>parseFloat((euroValue * 1.07).toFixed(2))
const fromYenToPound=(yenValue)=>parseFloat((yenValue * 0.87).toFixed(2))

module.exports={
    fromDollarToYen,fromEuroToDollar,fromYenToPound
}