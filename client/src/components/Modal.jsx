import React from "react";
import { IoMdAdd } from "react-icons/io";
// export default function Modal() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         className="btn btn-sm  rounded-md px-4 text-white flex gap-3 bg-[#3c80fd] hover:bg-[#3c80fd] hover:border-none"
//         onClick={() => setShowModal(true)}
//       >
//         <IoMdAdd></IoMdAdd>Add Goal
//       </button>

//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-200 outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">Modal Title</h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-red-200 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative text-black">
//                     <form className="" action="">
//                         <input type="text" />
//                         <input type="text" />
//                         <input type="text" />
//                         <input type="text" />

//                     </form>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="btn btn-sm  rounded-md px-4 text-white flex gap-3 bg-[#3c80fd] hover:bg-[#3c80fd] hover:border-none"
        onClick={() => setShowModal(true)}
      >
        <IoMdAdd></IoMdAdd>Add Goal
      </button>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-200 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Goal</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-red-200 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative text-black p-5">
                  <form className="grid grid-cols-1 gap-4 w-[300px]">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        title
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Field 2
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Field 3
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Field 4
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

