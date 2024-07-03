// export default function ForwardRef({
//   firstNameRef,
//   secondNameRef,
//   submitRef,
//   firstKeyDown,
//   secondKeyDown,
//   submitKeyDown,
// }) {
//   return (
//     <div>
//       <div className="pt-10 justify-center items-center flex flex-col gap-6">
//         <input
//           type="text"
//           placeholder="Enter First Name"
//           className="border border-slate-400 shadow-md p-2 w-80"
//           ref={firstNameRef}
//           onKeyDown={firstKeyDown}
//         />
//         <input
//           type="text"
//           placeholder="Enter Second Name"
//           className="border border-slate-400 shadow-md p-2 w-80"
//           ref={secondNameRef}
//           onKeyDown={secondKeyDown}
//         />
//         <button
//           ref={submitRef}
//           onKeyDown={submitKeyDown}
//           //   onClick={handleSubmit}
//           className="border border-green-400 text-white p-1.5 bg-green-400 rounded-md px-4"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";
function ForwardRef({ type, placeholder, onKeyDown }, ref) {
  return (
    <div>
      <input
        className="border border-slate-400 shadow-md p-2 w-80"
        type={type}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        ref={ref}
      />
    </div>
  );
}

const forwardedRef = React.forwardRef(ForwardRef);

export default forwardedRef;
