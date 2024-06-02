import insta from '../assets/insta.svg'
import face from '../assets/face.svg'
import lin from '../assets/lin.svg'
import twit from '../assets/twit.svg'


function Conclusion() {
  return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full p-5">
        <div className={"flex flex-col gap-y-5 items-center justify-center"}>
          <div className={"flex flex-row  items-center justify-center"}>
            <div className={"mx-3 text-[1.5rem] rozha-one"}>
              <p>Join our growing</p> <p>
              community of</p> <p>
              35,000+ alumni</p>
            </div>
          </div>
          <div className={"flex flex-row items-center justify-around w-full"}>
            <button className={"btn btn-primary bg-primary w-full border-primary"}>Apply Now</button>
          </div>
          <div className={"flex flex-row w-[70%] items-center justify-around"}>
            <img src={insta} alt={""}/>
            <img src={face} alt={""}/>
            <img src={lin} alt={""}/>
            <img src={twit} alt={""}/>
          </div>
        </div>
      </div>
  )
}


export default Conclusion;
