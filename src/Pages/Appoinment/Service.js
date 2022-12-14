import React from "react";

const Service = ({ service,setTreatment}) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{
            slots.length?<span>{slots[0]}</span>:
            <span className="text-red-500">Try Another Date</span>
            }</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-end">

        </div>
        <label disabled={slots.length==0} htmlFor="booking-modal" onClick={()=>setTreatment(service)} className="btn btn-secondary text-white">Book Appoinment</label>
      </div>
    </div>
  );
};

export default Service;
