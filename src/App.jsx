// import reactLogo from './assets/logo.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/Form.jsx";
import PhotoRow from "./components/PhotoRow.jsx";
import a1 from './assets/aunties/a1.svg'
import a2 from './assets/aunties/a2.svg'
import a3 from './assets/aunties/a3.svg'
import a4 from './assets/aunties/a4.svg'
import a5 from './assets/aunties/a5.svg';
import a6 from './assets/aunties/a6.svg';
import a7 from './assets/aunties/a7.svg';
import a8 from './assets/aunties/a8.svg';
import a9 from './assets/aunties/a9.svg';
import a10 from './assets/aunties/a10.svg';
import a11 from './assets/aunties/a11.svg';
import a12 from './assets/aunties/a12.svg';
import a13 from './assets/aunties/a13.svg';
import a14 from './assets/aunties/a14.svg';
import a15 from './assets/aunties/a15.svg';
import a16 from './assets/aunties/a16.svg';

import logo from './assets/logo.svg'
import Intro from "./components/Intro.jsx";
import Reasons from "./components/Reasons.jsx";
import Award from "./components/Award.jsx";
import Conclusion from "./components/Conclusion.jsx";


function App() {

  return (
      <>
        <div className="flex flex-col text-white gap-y-[1.8rem]">
          <div className={"flex flex-col items-center justify-center relative"}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className={"flex flex-col items-center justify-center"}>
                <div>
                  <img className="" src={logo} alt="logo"/>
                </div>

                <p className={"mt-2 letter tracking-[5px]"}>
                  PRESENTS
                </p>
              </div>

            </div>
            <PhotoRow photos={[a1, a2, a3, a4]}/>
          </div>
          <div className="flex flex-col gap-y-[1.8rem] p-5 font-normal">
            <Intro/>
            <Form/>
          </div>
          <div className={"flex flex-col items-center justify-center relative"}>
            <Reasons/>
            <PhotoRow photos={[a5, a6, a7, a8]}/>
            <PhotoRow photos={[a9, a10, a11, a12]}/>
            <PhotoRow photos={[a13, a14, a15, a16]}/>
          </div>
          <Award/>
          <div className={"flex flex-col items-center justify-center relative"}>
            <Conclusion/>
            <PhotoRow photos={[a5, a6, a7, a8]}/>
            <PhotoRow photos={[a9, a10, a11, a12]}/>
            <PhotoRow photos={[a13, a14, a15, a16]}/>
          </div>
        </div>
      </>
  )
}

export default App
