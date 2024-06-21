import React, { useState, createContext, useEffect } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name:'',
    amount:'0',
    time:'',
    amtinRs:'',
    payname:'',
    BankingName:'',
    phone:'',
    date: new Date(),
    totalAmount: '0',
    subtotal: '0',
    waitTime: '0',
    mcdDelhiToll: '0',
    rounding: '0',
    riderPromotion: '',
    gst: '',
    driverName: '',
    carNumber: '',
    kilometer: '',
    pickupTime: '',
    pickupFrom: '',
    dropTime: '',
    dropTo: '',
    distance:'  '
  });


  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
