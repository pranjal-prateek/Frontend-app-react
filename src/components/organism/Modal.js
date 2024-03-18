import React, { useState } from "react";
import Button from "../atoms/buttons/Button";

const Modal = ({children,modalHeading,buttonText,closeText,SubmitText,onClickSubmit}) => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit =()=>{
    onClickSubmit()
    setShowModal(false)
  }
  return (
    <>
      <Button text={buttonText} type={"button"} onClick={() => setShowModal(true)}/>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-solid border-gray-100">
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-600 rounded-t ">
                  <h3 className="text-3xl text-gray-300 font-semibold">{modalHeading}</h3>
                  
                </div>
                <div className="relative p-6 flex-auto">
                    {children}
                </div>
               
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-600 border-blueGray-200 rounded-b gap-6">
                   <Button text={closeText} type={"button"} onClick={() => setShowModal(false)}/>
                  <Button text={SubmitText} type={"button"} onClick={handleSubmit}/>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
