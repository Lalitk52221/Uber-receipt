import { useContext, useEffect } from "react";
import { FormContext } from "./FormContext";
import "./App.css";
import cashLogo from "./assets/cash.png";
import location from "./assets/location.png";
import Uberlogo from './assets/Uber-Logo.png'
// import { format } from 'date-fns';

// utility function to format date
const formatDate = (dateString) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
// Function to format date in short format (e.g., "06/19/2024")
const cashDateformat = (dateString) => {
  const options = { month: "numeric", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
// Utility function to format time in short format (e.g., "10:30 AM")
const formatTimeShort = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(hours, minutes);

  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return date.toLocaleTimeString("en-US", options);
};
const UberForm = () => {
  const { formData, setFormData } = useContext(FormContext);

  const {
    name,
    date,
    totalAmount,
    subtotal,
    waitTime,
    mcdDelhiToll,
    rounding,
    gst,
    driverName,
    carNumber,
    kilometer,
    pickupTime,
    pickupFrom,
    dropTime,
    dropTo,
    distance,
  } = formData;

  // const formattedDate = formatDate(date);
  // const formattedsubtotal = Number(subtotal).toFixed(2).toLocaleString();
  // const formattedGST = Number(gst).toFixed(2).toLocaleString();
  // const formattedMCD = Number(mcdDelhiToll).toFixed(2).toLocaleString();
  // const cashformattedDate = cashDateformat(date);
  // const formattedpicupTime = formatTimeShort(pickupTime);
  // const formatteddropTime = formatTimeShort(dropTime);
  // const formattedtotal = Number(totalAmount).toFixed(2).toLocaleString();
  const formattedDate = formatDate(date);
  const formattedsubtotal = Number(subtotal).toLocaleString(undefined, { minimumFractionDigits: 2 });
  const formattedGST = Number(gst).toLocaleString(undefined, { minimumFractionDigits: 2 });
  const formattedMCD = Number(mcdDelhiToll).toLocaleString(undefined, { minimumFractionDigits: 2 });
  const cashformattedDate = cashDateformat(date);
  const formattedpicupTime = formatTimeShort(pickupTime);
  const formatteddropTime = formatTimeShort(dropTime);
  const formattedtotal = Number(totalAmount).toLocaleString(undefined, { minimumFractionDigits: 2 });

  const calculateTotal = () => {
    let total = 0;
    total = Number(subtotal) + Number(mcdDelhiToll) + Number(rounding)+ Number(waitTime);
    setFormData({ ...formData, totalAmount: total });
  };
  

  useEffect(() => {
    calculateTotal();
  }, [subtotal, gst, mcdDelhiToll, rounding,waitTime]);


  return (
    <div className="w-1024 flex justify-start items-start p-5 gap-5 uberform">
      
      <form
        className="bg-gray-100 h-fit rounded-lg p-4 gap-y-6 flex flex-wrap columns-2 gap-x-2 items-start justify-start "
      >
        <h1 className="w-full flex justify-center font-bold text-2xl">Enter Details Here</h1> <div className="w-full h-0.5 rounded-full -my-3 bg-gray-300" />
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label className="block font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-2 border rounded"
            
          />
        </div>
        {/* <div>
          <label className="block font-semibold">Total Amount</label>
          <input
            type="number"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={(e) =>
              setFormData({ ...formData, totalAmount: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div> */}
        <div>
          <label className="block font-semibold">Subtotal</label>
          <input
            type="number"
            name="subtotal"
            value={formData.subtotal}
            onChange={(e) =>
              setFormData({ ...formData, subtotal: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Waiting Time</label>
          <input
            type="number"
            name="waittime"
            value={formData.waitTime}
            onChange={(e) =>
              setFormData({ ...formData, waitTime: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">MCD Delhi</label>
          <input
            type="number"
            name="mcdDelhiToll"
            value={formData.mcdDelhiToll}
            onChange={(e) =>
              setFormData({ ...formData, mcdDelhiToll: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Rounding</label>
          <input
            type="number"
            name="rounding"
            value={formData.rounding}
            onChange={(e) =>
              setFormData({ ...formData, rounding: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        {/* <div>
          <label className="block font-semibold">Rider Promotion</label>
          <input
            type="number"
            name="riderPromotion"
            value={formData.riderPromotion}
            onChange={(e) => setFormData({ ...formData, riderPromotion: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div> */}
        
        <div>
          <label className="block font-semibold">GST</label>
          <input
            type="number"
            name="gst"
            value={formData.gst}
            onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Driver Name</label>
          <input
            type="text"
            name="drivername"
            value={formData.driverName}
            onChange={(e) =>
              setFormData({ ...formData, driverName: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="Driver Name"
          />
        </div>
        <div>
          <label className="block font-semibold">Car/Bike Number</label>
          <input
            type="text"
            name="carnumber"
            value={formData.carNumber}
            onChange={(e) =>
              setFormData({ ...formData, carNumber: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="HR72C5654"
          />
        </div>
        <div>
          <label className="block font-semibold">Distance in Kilometer</label>
          <input
            type="number"
            name="kilometer"
            value={formData.kilometer}
            onChange={(e) =>
              setFormData({ ...formData, kilometer: e.target.value })
            }
            className="w-full p-2 border rounded"
            
          />
        </div>
        <div>
          <label className="block font-semibold">Distance Time</label>
          <input
            type="text"
            name="distance"
            value={formData.distance}
            onChange={(e) =>
              setFormData({ ...formData, distance: e.target.value })
            }
            className="w-full p-2 border rounded"
            
          />
        </div>
        <div>
          <label className="block font-semibold">Pickup Time</label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={(e) =>
              setFormData({ ...formData, pickupTime: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Pickup From</label>
          <input
            type="text"
            name="pickupFrom"
            value={formData.pickupFrom}
            onChange={(e) =>
              setFormData({ ...formData, pickupFrom: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Drop Time</label>
          <input
            type="time"
            name="dropTime"
            value={formData.dropTime}
            onChange={(e) =>
              setFormData({ ...formData, dropTime: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Drop To</label>
          <input
            type="text"
            name="dropTo"
            value={formData.dropTo}
            onChange={(e) =>
              setFormData({ ...formData, dropTo: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Map</label>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098577!2d144.9630576153188!3d-37.81421797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b9c89d02a0e2!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616814257052!5m2!1sen!2sau"
            width="230"
            height="60"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* <button type="submit" className="bg-blue-500 rounded text-white">
          Submit
        </button> */}
      </form>

      {/* Uber Receipt */}

      <div className="flex justify-end">
        <div className="h-[1200px] w-[900px] text-xs font-medium border-gray-200 border-2  bg-white flex flex-col px-20 py-20 gap-y-4">
          <div className="flex flex-row justify-between items-end">
            <img src={Uberlogo} alt="Uber logo" width={80} />
            <p className="text- font-medium text-gray-500">{formattedDate}</p>
          </div>
          <div className="w-full border-t-2 bg-gray-600" />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-medium">
              Here's your receipt for your ride, {name}
            </h1>
            <p className="text-xs font-medium text-gray-500 ">
              We hope you enjoyed your ride this morning.
            </p>
          </div>
          <div className="text-xl font-medium flex justify-between">
            <h1>Total</h1>
            <p>₹{formattedtotal}</p>
          </div>
          <hr className="w-full h-0.5 rounded-md outline-none bg-gray-600" />
          <div className="flex justify-between">
            <p>Trip Charge</p>
            <p>₹{formattedtotal}</p>
          </div>
          <div className="w-full border-t-2 bg-gray-600" />
          <div className="gap-y-0.5 flex flex-col text-gray-500">
            <div className="flex justify-between font-semibold  text-black">
              <h2>Subtotal</h2>
              <h2>₹{formattedsubtotal}</h2>
            </div>
            {waitTime === "0" ? (
              ""
            ) : (
              <div className="flex justify-between">
                <p>Wait Time</p> <p>₹{waitTime}</p>
              </div>
            )}
            {formattedMCD == 0 ? (
              ""
            ) : (
              <div className="flex justify-between">
                <p>MCD Delhi New Toll</p> <p>₹{formattedMCD}</p>
              </div>
            )}

            <div className="flex justify-between">
              <p>Rounding</p>{" "}
              <p className={rounding < 0 ? "text-green-600" : "text-black"}>
                ₹{rounding}
              </p>
            </div>
            {/* <div className="flex justify-between">
              <p>Rider Promotion</p>{" "}
              <p className="text-green-600">-₹{riderPromotion}</p>
            </div> */}
          </div>
          <div className="w-full border-t-2 bg-gray-600 mb-3" />
          <div className="w-full border-t-2 bg-gray-600" />
          <h1 className="text-xl font-medium">Payments</h1>
          <div className="flex w-full gap-x-6">
            <img src={cashLogo} alt="cashLogo logo" height={26} width={26} />
            <div className="flex justify-between w-full">
              <p>Cash</p>
              <p>₹{formattedtotal}</p>
            </div>
          </div>
          <p className="text-gray-500 font-semibold -mt-4 ml-12">
            {cashformattedDate} {formatteddropTime}
          </p>
          <p>
            <span className="text-blue-600">
              <u>Visit the trip page</u>
            </span>{" "}
            for more information, including invoices (where available)
          </p>
          <p>
            The total of ₹{formattedtotal} has a GST of ₹{formattedGST} included
          </p>
          <div className="w-full border-t-2 bg-gray-600" />
          <div className="flex flex-col gap-1">
            <p>You Rode with {driverName}</p>
            <p className="text-xs font-medium text-gray-500">
              License Plate: {carNumber}
            </p>
          </div>
          <div className="w-[190px]">
            <p>
              Uber Go
              <span className="mx-5 text-gray-500 w-10">
                {kilometer} kilometres | {distance}(S)
              </span>
            </p>
          </div>
          <div className="flex gap-x-8">
            <img src={location} alt="location" width={12} height={12} />
            <div className="flex flex-col justify-between">
              <p>
                {formattedpicupTime} <span className="text-gray-500">|</span>
                <span className="text-gray-500"> {pickupFrom}</span>
              </p>
              <p >
                {formatteddropTime} <span className="text-gray-500">|</span><span className="text-gray-500"> {dropTo}</span>
              </p>
            </div>
          </div>
          <p className="text-gray-500 mt-7">
            Fares are inclusive of GST. Please download the tax invoice from the
            trip detail page for a full tax breakdown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UberForm;
