import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import LocatonPanelSearch from '../components/LocatonPanelSearch';
import RideInfoPanel from '../components/RideInfoPanel';
import VehiclePanel from '../components/VehicelPanel';

function Home() {
  const [isClicked, setIsClicked] = useState(false); // Default to false to hide RideInfoPanel initially
  const [rideShow, setRideShow] = useState(false)
  const [hidden, setHidden] = useState(false);
  const [rideInfo, setRideInfo] = useState({
    pickup: '',
    destination: ''
  });

  const handleLocationClick = () => {
    setIsClicked(prev => !prev); // Set to true when a location is clicked
  };
  
  const handleHidden = () => {
    setHidden(!hidden);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyRideInfo = { ...rideInfo };
    copyRideInfo[name] = value;
    setRideInfo(copyRideInfo);
  };

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="Uber logo" />

      <div
        onClick={handleLocationClick} 
        className='h-screen w-screen object-cover'>
        <img className='h-full w-full object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="Background" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute bottom-0 w-full rounded-md'>
        <div className='h-[30%] p-5 relative bg-white'>
          {hidden ? (
            <FaAngleDown onClick={handleHidden} className='absolute left-5 top-2 text-2xl cursor-pointer' />
          ) : (
            <h4 className='text-2xl font-semibold'>Find Trip</h4>
          )}

          <form className='mt-5'>
            {hidden ? (
              <div>
                <div className='absolute left-[39.5px] top-[36.9%] h-1.5 w-1.5 border-black border-[2px] rounded-full'></div>
                <div className='line absolute h-10 w-1 top-[41.5%] left-[41px] bg-black rounded-full'></div>
                <div className='absolute left-[39.9px] top-[64%] h-1.5 w-1.5 border-black border-[1.6px]'></div>
              </div>
            ) : (
              <div>
                <div className='absolute left-[39.5px] top-[51%] h-1.5 w-1.5 border-black border-[2px] rounded-full'></div>
                <div className='line absolute h-10 w-1 top-[55.5%] left-[41px] bg-black rounded-full'></div>
                <div className='absolute left-[39.9px] top-[77%] h-1.5 w-1.5 border-black border-[1.6px]'></div>
              </div>
            )}
            <input
              onClick={() => setHidden(true)}
              onChange={handleChange}
              name="pickup"
              className='bg-[#eee] px-10 py-2 text-base rounded-xl w-full mt-3'
              placeholder='Add a pick up location'
            />
            <input
              onClick={() => setHidden(true)}
              onChange={handleChange}
              name="destination"
              className='bg-[#eee] px-10 py-2 text-base rounded-xl w-full mt-3'
              placeholder='Enter your destination'
            />
          </form>
        </div>

        {hidden && (
          <div
          onClick={() => {
            handleHidden();
            handleLocationClick();
          }}
            className='h-[75%] bg-white px-5'>
            <LocatonPanelSearch />
          </div>
        )}
        {isClicked && 
            <RideInfoPanel />
        }
      </div>
    </div>
  );
}

export default Home;
