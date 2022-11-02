import FridayData from '../Data/FridayData'
import ScheduleButton from '../SheduleButton'
const Friday = () =>{
    const tt = FridayData.map(x=>
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

export default Friday;