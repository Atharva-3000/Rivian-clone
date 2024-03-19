import "./configurator.css";
const Configurator = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#fff", height: "90vh" }}>
      <div
        className="grid grid-cols-2 gap-7 pt-20 "
        style={{ height: "30vh", marginBottom: "5vh" }}
      >
        <div className="flex justify-end">
          <h1 className="text-5xl">
            Vehicles made for the <br />
            planet
          </h1>
        </div>
        <div>
          <h3 className="text-xl">
            Whether taking families on new adventures or <br /> electrifying
            fleets at scale, our vehicles all share a <br /> common goal —
            preserving the natural world for <br /> generations to come.
          </h3>
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-7 px-0
        mx-4 overflow-hidden"
        style={{ height: "50vh", marginBottom: "5vh" }}
      >
        <div
          className="h-30 w-full relative box1"
          style={{ backgroundColor: "#f2f2f2" }} 
        >
          <div className="h-full w-full box-content">
            <h3 className="absolute top-4 left-4">
              R1T | Up to 410 miles of range
            </h3>
            <div className="absolute top-1/5 left-20 right-10 flex justify-center">
              <img
                className="aspect-[4/3]"
                src="src\assets\asset 2.png"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 flex justify-end w-full pb-6 px-6 gap-4">
              <button className="border-2 border-black rounded-3xl py-3 px-8">
                Configure
              </button>
              <button className="text-white border-2 border-black rounded-3xl bg-black py-3 px-6">
                Shop Available
              </button>
            </div>
          </div>
        </div>

        <div
          className="h-30 w-full relative box2"
          style={{ backgroundColor: "#f2f2f2" }}
        >
          <div className="h-full w-full box-content">
            <h3 className="absolute top-4 left-4">
              R1S | Up to 400 miles of range
            </h3>
            <div className="absolute top-1/5 left-20 right-10 flex justify-center">
              <img
                className="aspect-[4/3]"
                src="src\assets\asset 8.png"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 flex justify-end w-full pb-6 px-6 gap-4">
              <button className="border-2 border-black rounded-3xl py-3 px-8">
                Configure
              </button>
              <button className="text-white border-2 border-black rounded-3xl bg-black py-3 px-6">
                Shop Available
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
