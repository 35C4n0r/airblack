import vectorl from '../assets/vectorl.svg'
import vectorr from '../assets/vectorr.svg'
import r1 from '../assets/r1.svg'
import r2 from '../assets/r2.svg'
import r3 from '../assets/r3.svg'

function Reasons() {
  return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full p-3">
        <div className={"flex flex-col gap-y-5"}>
          <div className={"flex flex-row  items-center justify-center"}>
            <div>
              <img className={""} src={vectorl} alt={""}/>
            </div>
            <div className={"mx-3 text-[1.5rem] rozha-one"}>
              <p>Why Should You</p> <p>
                Join Airblack?</p>
            </div>
            <div>
              <img className={""} src={vectorr} alt={""}/>
            </div>
          </div>
          <div className={"flex flex-row items-center justify-around w-full"}>
            <div className={"flex flex-col items-center justify-center"}>
              <img src={r1} alt={""}/>
              <p className={"mt-3"}>Do-it-together,</p> <p> live on zoom</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <img src={r2} alt={""}/>
              <p className={"mt-3"}>4.8 /5 </p> <p> Rated Classes</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <img src={r3} alt={""}/>
              <p className={"mt-3"}>35000+ </p> <p> Members</p>
            </div>
          </div>
          <div className={"flex flex-row items-center justify-around w-full"}>
            <button className={"btn btn-primary bg-primary w-full border-primary font-extrabold"}>Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Reasons;
