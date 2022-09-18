const ScheduleButton = (props) =>{
    return(
        <div class="p-2 rounded-lg" id="mon" role="tabpanel" aria-labelledby="mon-tab">
            <div class="p-2 m-2 max-w-sm bg-white rounded-lg border border-black shadow-md">
              <p class="mt-1 text-xs font-bold text-zinc-600">{props.time}</p>
              <p class="font-bold text-zinc-600">{props.subject}</p>
              <p class="mb-1 text-xs text-zinc-600">{props.venue}</p>
          </div>
        </div>
    )
}

export default ScheduleButton