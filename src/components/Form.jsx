function Form() {
  return (
      <div className="rounded-xl flex flex-col gap-y-[0.rem] bg-white">
        <div className="bg-primary rounded-t-xl">
          <p className="text-lg p-3 font-bold text-sm text-center text-white">
            Fill the form below to enquire
          </p>
        </div>
        <div className={"flex p-3 flex-col gap-y-[0.7rem]"}>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">*Enter your name</span>
              </div>
              <input type="text" placeholder="Eg. Aneesha Mehra" className="input input-bordered w-full max-w-xs"/>
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">*Enter your WhatsApp Number</span>
              </div>
              <div className={"flex gap-x-1"}>
                <div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>+91</option>
                    <option>+33</option>
                    <option>+111</option>
                  </select>
                </div>
                <div>
                  <input type="text" placeholder="Eg. 0000000000"
                         className="input input-bordered w-full max-w-xs"/>
                </div>
              </div>

            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">*Select your profession</span>
              </div>
              <div>
                <select className="select select-bordered w-full">
                  <option disabled className={""} selected>Choose the most relevant option</option>
                  <option>+33</option>
                  <option>+111</option>
                </select>
              </div>

            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">*Select your goal</span>
              </div>
              <div>
                <select className="select select-bordered w-full">
                  <option disabled selected>Choose the most relevant option</option>
                  <option>+33</option>
                  <option>+111</option>
                </select>
              </div>

            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">*Select your city</span>
              </div>
              <div>
                <select className="select select-bordered w-full">
                  <option disabled selected>Choose the most relevant option</option>
                  <option>+33</option>
                  <option>+111</option>
                </select>
              </div>

            </label>
          </div>
        </div>
        <div className={"mt-3 p-3"}>
          <button className="btn btn-primary bg-primary w-full">Submit</button>
        </div>


      </div>
  )
}

export default Form;
