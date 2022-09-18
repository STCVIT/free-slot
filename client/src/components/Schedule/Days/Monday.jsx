import MondayData from '../Data/MondayData'
import ScheduleButton from '../SheduleButton'
const Monday = () =>{
    const tt = MondayData.map(x=>
            <ScheduleButton 
            time = {x.time}
            subject = {x.subject}
            venue = {x.venue}
            />
        
    )
    return(
        <div>
            {tt}
        </div>
    )
}

export default Monday;