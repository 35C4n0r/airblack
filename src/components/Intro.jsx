import cert from "../assets/cert.svg";
import star from "../assets/star.svg";
import tick from "../assets/tick.svg";

function Intro() {
  return (
      <div className={"gap-y-5 flex flex-col"}>
        <p className={"text-[1.5rem] text-left rozha-one"}>Professional Online Makeup Course</p>
        <div className={"flex flex-row text-xs gap-x-3 items-center justify-start"}>
          <div className={"bg-[#FFFFFF24] flex flex-row rounded-sm gap-x-1 p-2 items-center justify-start"}>
            <div><img src={cert} alt={""}/></div>
            <div><p>Certification Programme</p></div>
          </div>
          <div className={"flex flex-row gap-x-1 items-center justify-start "}>
            <div><img src={star} alt={""}/></div>
            <div><p>Rated 4.85/5</p></div>
          </div>
        </div>
        <div className={"flex flex-row text-sm gap-x-3"}>
          <div className={"flex flex-row gap-x-1 items-center justify-start w-full"}>
            <div><img src={tick} alt={""}/></div>
            <div><p>India’s No.1 Online Makeup Course</p></div>
          </div>

        </div>
        <div className={"flex flex-row text-sm gap-x-3"}>
          <div className={"flex flex-row gap-x-1 items-center justify-start w-full"}>
            <div><img src={tick} alt={""}/></div>
            <div><p>Learn by LIVE Do-it-Together Classes</p></div>
          </div>
        </div>
        <div className={"flex flex-row text-sm gap-x-3"}>
          <div className={"flex flex-row gap-x-1 items-center justify-start w-full"}>
            <div><img src={tick} alt={""}/></div>
            <div><p>Unlimited Practise Session to master skills</p></div>
          </div>
        </div>
      </div>
  )
}

export default Intro;
