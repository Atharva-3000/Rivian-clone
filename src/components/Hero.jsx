const Hero = () => {
  return (
    <div className="absolute top-1/3 left-36 text-white" 
    style={{top:'35vh', left:'20vw',letterSpacing:'.1px'}}>
    <div >
        <h1 className=" text-6xl">Lease an R1 starting <br /> at $559/mo*</h1>
        <br />
        <h3 className="text-2xl">Includes a $7,500 EV lease credit at <br /> time of lease.</h3>
        <br />
        <div className="flex gap-4">
            <button className="px-8 bg-white text-black p-4 rounded-3xl hover:bg-gray-200 text-base">Shop R1T</button>
            <button className="px-8 bg-white text-black p-4 rounded-3xl hover:bg-gray-200 text-base">Shop R1S</button>
        </div>
        </div>
    </div>
  )
}

export default Hero