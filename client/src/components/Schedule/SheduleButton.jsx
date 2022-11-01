const ScheduleButton = (props) =>{
    return(
        <div class="p-2 rounded-lg" id="mon" role="tabpanel" aria-labelledby="mon-tab">
            <div class="p-2 m-2 max-w-sm bg-white border-b border-[#ECECEC]">
              <p class="font-bold text-zinc-600">{props.time}</p>
          </div>
        </div>
    )
}

export default ScheduleButton