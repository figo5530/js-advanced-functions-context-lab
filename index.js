/* Your Code Here */
function createEmployeeRecord(infoArr) {
    return {
    firstName : infoArr[0],
    familyName : infoArr[1],
    title : infoArr[2],
    payPerHour : infoArr[3],
    timeInEvents : [],
    timeOutEvents : []
    }
}

function createEmployeeRecords(arrArr) {
    return arrArr.map(e => {return createEmployeeRecord(e)})
}

function createTimeInEvent(dateStamp) {
    const newEvent= {}
    newEvent.type = "TimeIn"
    newEvent.hour = parseInt(dateStamp.split(" ")[1])
    newEvent.date = dateStamp.split(" ")[0]
    this.timeInEvents.push(newEvent)
    return this
}

function createTimeOutEvent(dateStamp) {
    const newEvent= {}
    newEvent.type = "TimeOut"
    newEvent.hour = parseInt(dateStamp.split(" ")[1])
    newEvent.date = dateStamp.split(" ")[0]
    this.timeOutEvents.push(newEvent)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => {return e.date === date})
    let timeOut = this.timeOutEvents.find(e => {return e.date === date})
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}



function calculatePayroll(arr) {
    return arr.reduce((m, c) => {return m += allWagesFor.call(c)}, 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => {return e.firstName === firstName})
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}