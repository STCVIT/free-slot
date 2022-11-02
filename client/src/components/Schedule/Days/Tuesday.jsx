import TuesdayData from '../Data/TuesdayData'
import ScheduleButton from '../SheduleButton'
const Tuesday = () =>{
    const tt = TuesdayData.map(x=>
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

export default Tuesday;