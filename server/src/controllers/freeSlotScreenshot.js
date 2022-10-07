const moment = require('moment')
const {time_slots_screenshot} = require('./timeSlots')

// output from ML
const tt1 = [
    {"0":"Mon:Thry","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"YES","9":"NO","10":"NO","11":"YES","12":"NO","13":"NO","14":"NO"},
    {"0":"Mon:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"YES","6":"YES","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Tue:Thry","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"YES","9":"NO","10":"YES","11":"YES","12":"NO","13":"NO","14":"NO"},
    {"0":"Tue:Lab","1":"NO","2":"NO","3":"NO","4":"YES","5":"YES","6":"YES","7":"NO","8":"NO","9":"YES","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Wed:Thry","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"YES","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Wed:Lab","1":"YES","2":"NO","3":"YES","4":"YES","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Thu:Thry","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"YES","10":"NO","11":"YES","12":"NO","13":"NO","14":"NO"},
    {"0":"Thu:Lab","1":"YES","2":"YES","3":"NO","4":"NO","5":"YES","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Fri:Thry","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"YES","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Fri:Lab","1":"YES","2":"YES","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"}
]
const tt2 = [
    {"0":"Mon:Thry","1":"NO","2":"YES","3":"YES","4":"YES","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"YES","11":"YES","12":"NO","13":"NO","14":"NO"},
    {"0":"Mon:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Tue:Thry","1":"YES","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"YES","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Tue:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"YES","11":"YES","12":"YES","13":"YES","14":"NO"},
    {"0":"Wed:Thry","1":"YES","2":"NO","3":"YES","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Wed:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"YES","11":"YES","12":"NO","13":"NO","14":"NO"},
    {"0":"Thu:Thry","1":"YES","2":"YES","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"YES","9":"YES","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Thu:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Fri:Thry","1":"NO","2":"YES","3":"NO","4":"NO","5":"YES","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Fri:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"}
]
const tt3 = [
    {"0":"Mon:Thry","1":"YES","2":"YES","3":"YES","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Mon:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"YES","11":"YES","12":"YES","13":"YES","14":"NO"},
    {"0":"Tue:Thry","1":"YES","2":"NO","3":"YES","4":"NO","5":"YES","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Tue:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"YES","11":"YES","12":"YES","13":"YES","14":"NO"},
    {"0":"Wed:Thry","1":"YES","2":"YES","3":"YES","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Wed:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Thu:Thry","1":"YES","2":"YES","3":"NO","4":"YES","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Thu:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Fri:Thry","1":"YES","2":"YES","3":"YES","4":"YES","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"NO","11":"NO","12":"NO","13":"NO","14":"NO"},
    {"0":"Fri:Lab","1":"NO","2":"NO","3":"NO","4":"NO","5":"NO","6":"NO","7":"NO","8":"NO","9":"NO","10":"YES","11":"YES","12":"NO","13":"NO","14":"NO"}
]

const response = [tt1, tt2, tt3]

// function to find busy time from ML output
function busy_time(tt_response){
    let final = []
    let temp = []
    for (var i=0; i<10; i++){
        let arr = []
        for (var j=1; j<14; j++){
            if (Object.values(tt_response[i])[j]==="YES"){
                if (Object.values(tt_response[i])[0].match(/Thry/g)){
                    arr.push(time_slots_screenshot[0][j])
                } else {
                    arr.push(time_slots_screenshot[1][j])
                }
            }
        }
        temp.push(arr)
    }
    for(var k=0; k<10; k+=2){
        let a = new Set([...temp[k],...temp[k+1]])
        a = [...a]
        final.push(a)
    }
    //console.log(final)
    return final
}

function busy_time_users(response){
    let final = []
    for (var i=0; i<response.length; i++){
        final.push(busy_time(response[i]))
    }
    //console.log(final[0])
    return final
}
// function to remove duplicates
const combinedItems = (arr = []) => {
    const res = arr.reduce((acc, obj) => {
        let found = false;
        for (let i = 0; i < acc.length; i++) {
            if (acc[i].start_time === obj.start_time) {
                found = true;
            };
        }
        if (!found) {
            acc.push(obj);
        }
        return acc;
    }, []);
    return res;
}

// function to sort slots
const sortSlot = (commonSlots)=>{
    commonSlots.sort((right, left)=>{
    return moment(right.start_time, "hh:mm").diff(moment(left.start_time, "hh:mm"))
  })
return commonSlots
}

// function to find union of busy slots of users
const findCommonSlots = (res)=>{
    let final = []
    for (var i=0; i<5; i++){
        let arr = []
        res.forEach(element => {
            arr.push(...element[i])
        });
        final.push(sortSlot(combinedItems(arr)))
    }
//console.log(final)
return final
}

//function to find free slots

function giveTime(start){
    return moment(start, "hh:mm a").format()
}

function freeTime(commonSlots){
    const freeSlotArray = []
      for (var i=0; i<5; i++){
          let farthestEndTime = moment(giveTime("12:00 am"))
          let farthestStartTime = moment(giveTime("11:45 pm"))
          let timeRange = commonSlots[i]
          let temp = []
          timeRange.forEach((element, index)=>{
              let currentEndtime = moment(giveTime(element.end_time))
              const currentStartTime = moment(giveTime(element.start_time))
              if (currentStartTime.isBefore(farthestStartTime)){
                  farthestStartTime = currentStartTime
              }
              if(currentEndtime.isAfter(farthestEndTime)){
                  farthestEndTime = currentEndtime
              }
              if(index === timeRange.length-1){
                  if(timeRange.length===1){
                      temp.push({
                          start_time: "12:00 am",
                          end_time: currentStartTime.format("hh:mm a")
                      })
                  }
                  temp.push({
                      start_time: farthestEndTime.format("hh:mm a"),
                      end_time: "11:59 pm"
                  })
              } else {
                  const nextBusyTime = timeRange[index+1]
                  const nextStartTime = moment(giveTime(nextBusyTime.start_time))
                  if (index === 0){
                      temp.push({
                          start_time: "12:00 am",
                          end_time: currentStartTime.format("hh:mm a")
                      })
                  }
                  let endTimeToCompare = currentEndtime.isBefore(farthestEndTime) ? farthestEndTime : 
                  currentEndtime
                  if (endTimeToCompare.isBefore(nextStartTime) && (endTimeToCompare.diff(nextStartTime, 'minutes')<=-15)){
                      temp.push({
                          start_time: endTimeToCompare.format("hh:mm a"),
                          end_time: nextStartTime.format("hh:mm a")
                      })
                  }
              }
          })
          freeSlotArray.push(temp)
    }
      console.log(freeSlotArray)
      return freeSlotArray
}

function freeSlotScreenshot(response){
    return freeTime(findCommonSlots(busy_time_users(response)))
}
module.exports = {freeSlotScreenshot, busy_time}