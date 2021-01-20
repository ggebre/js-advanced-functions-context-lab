/* Your Code Here */

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

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    const employeeRecord = {
        firstName, familyName, title, payPerHour, timeInEvents : [], timeOutEvents : []
    }
    return employeeRecord
}
function createEmployeeRecords(employeeRecords){
    return employeeRecords.map(employeeRecord => createEmployeeRecord(employeeRecord))
}


function createTimeInEvent(dateStamp){
   
    const [date, time] = dateStamp.split(" ")
   
    this.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(time), 
        date
        
    }) 
    return this
}

function createTimeOutEvent(dateStamp){
    const [date, time] = dateStamp.split(" ")
    
    this.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(time), 
        date, 
    }) 
    return this
} 

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date == date).hour
    const timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date == date).hour
    return (timeOut - timeIn)/100 
} 

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date) 
    const payPerHour = this.payPerHour 
    return hoursWorked * payPerHour
} 


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employeeRecord => employeeRecord.firstName == firstName)
}

function calculatePayroll(employeeRecords){
    
    let payroll = 0;
    employeeRecords.forEach(employeeRecord => 
        {
            payroll += allWagesFor.call(employeeRecord)
        })
    // return srcArray.reduce((momo, e) => momo + allWagesFor.call(this), 0) 
    return payroll 
}


