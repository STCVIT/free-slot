import WednesdayData from '../Data/WednesdayData'
import ScheduleButton from '../SheduleButton'
const Wednesday = () =>{
    const tt = WednesdayData.map(x=>
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

export default Wednesday;