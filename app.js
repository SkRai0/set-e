const parser = require('simple-excel-to-json')

const xldata = parser.parseXls2Json('./SET_E.xlsx')[0];
let minpro = Number. MAX_SAFE_INTEGER
let maxpro = Number. MIN_SAFE_INTEGER
let maxprodata=xldata[0]
let minprodata=xldata[0]

// console.log(xldata)
for (let i = 1; i < xldata.length; i++) {
    var keysToIterateThrough = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    keysToIterateThrough.forEach((key) => {
        if(xldata[i][key] > maxpro){
            maxprodata = {
                "Account": xldata[i].Account,
                "Buisness": xldata[i].Business,
                "Year": xldata[i].Year,
                "Month": key,
                "Profit": xldata[i][key]
            };
            // console.log("Hello")

            maxpro = xldata[i][key];
        }
        if(xldata[i][key] < minpro){
            minprodata = {
                "Account": xldata[i].Account,
                "Buisness": xldata[i].Business,
                "Year": xldata[i].Year,
                "Month": key,
                "Profit": xldata[i][key]
            };
            minpro = xldata[i][key];
    
        }
    })
}

console.log("Most Profitable:")
console.log(maxprodata)

console.log("Most Unprofitable:")
console.log(minprodata)

// Step1: Import excel to json parser
// Step2: Assign minimum price, maximum price
//Step3: Create an array with the keys to iterate on
//Step4: Check for each key if profit is greater than max pro, if yes, assign maxpro to current profit, and maxdata to this data.
//Step5: If profit is leeser than min pro, assign minpro to current profit, and mindata to this data
//Step6: Print maxdata and mindata
//Step7: Stop