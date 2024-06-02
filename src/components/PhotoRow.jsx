function PhotoRow(props) {
  return (
      <div className="relative w-full flex flex-row">
        <div className="absolute w-full h-full bg-black opacity-70 z-10"></div>
        {props.photos.map((photo, index) => (
            <div key={index} className="">
              <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto"/>
            </div>
        ))}
      </div>
  );
}

export default PhotoRow;
