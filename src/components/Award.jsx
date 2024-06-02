import vectorl from "../assets/vectorl.svg";
import vectorr from "../assets/vectorr.svg";
import frame from "../assets/frame.svg";

function Award() {
  return (
      <div className="flex flex-col gap-y-10">
        <div className={"flex flex-row  items-center justify-center"}>
          <div>
            <img className={""} src={vectorl} alt={""}/>
          </div>
          <div className={"mx-3 text-[1.5rem] rozha-one"}>
            <p>Get Certified From </p> <p>
              India’s Biggest</p> <p>
              Beauty Platform</p>
          </div>
          <div>
            <img className={""} src={vectorr} alt={""}/>
          </div>
        </div>
        <div className={""}>
          <img className={""} src={frame} alt={""}/>
        </div>
      </div>
  )
}

export default Award;
