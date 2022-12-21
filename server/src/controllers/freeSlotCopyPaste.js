const moment = require('moment')
const { time_slots_copy_paste } = require('./timeSlots');

function removeDuplicates (arr){
    const uniqueSlots = []
    const unique = arr.filter(element=>{
        const isDuplicate = uniqueSlots.includes(element.start_time)
        if(!isDuplicate){
            uniqueSlots.push(element.start_time)
            return true
        }
        return false
    })
    return unique
}
function sortSlot (slotArr){
    slotArr.sort((right, left)=>{
    return moment(right.start_time, "hh:mm").diff(moment(left.start_time, "hh:mm"))
  })
return slotArr
}
function freeSlotCopyPaste(timetable){
    let lectures =  [...timetable.matchAll(/[A-Z]{1,3}[0-9]{1,2}[\D]{1}[A-Z]{3,4}[0-9]{3,4}[A-Z]{0,1}[\D]{1}[A-Z]{2,3}[\D]{1}[A-Z]{2,6}[0-9]{2,4}[A-Za-z]{0,1}[\D]{1}[A-Z]{2,4}[0-9]{0,3}/g)];
    const final = []
    const temp = [[], [], [], [], []];
    lectures.forEach(lecture=>{
        let slot = [...lecture[0].matchAll(/[A-Z]{1,3}[0-9]{1,2}\b/g)][0][0]
        time_slots_copy_paste[slot].forEach(item=>{
        let day_number=item[0];
        let start_time = item[1];
        let end_time = item[2];
        let obj = new Object
        obj.type="class";
        obj.start_time=start_time;
        obj.end_time=end_time;
        temp[day_number].push(obj)
    }); 
    })
    for(var i=0; i<5; i++){
        final.push(sortSlot(removeDuplicates(temp[i])));
    }
    console.log(final);
    return final;
}
//finalCopyPaste(timetable)
module.exports = freeSlotCopyPaste