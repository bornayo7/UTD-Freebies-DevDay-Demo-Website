import react from "react";

// function FeaturedItem() {
//   return (
//     <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-8">
//       {/* Box */}
//       <div className="mx-auto h-fit w-fit bg-white rounded-lg border border-black">
//         <div className="m-8 flex justify-between">
//           <img
//             className="h-[300px] w-[400px] rounded-lg border flex-none"
//             src="freakbob.png"
//           />
//           {/* Text next to image */}
//           <div className="mx-8">
//             <h1 className="text-2xl poppins-bold">FreakBob</h1>
//             <h2 className="inter-regular text-xl text-gray-500">
//               {" "}
//               3 Interested | listed 10 days ago 
//             </h2>
//             <p className="inter-regular mt-7">
//               With FreakBob, you're stepping into a world of unpredictability,
//               where the ordinary gets flipped on its head. Think of it as your
//               mischievous digital companion—whether it’s throwing random,
//               cryptic tasks your way or turning a simple request into something
//               completely unexpected. Want to set a reminder? Be prepared for
//               FreakBob to twist it into a mini-challenge. Need help organizing?
//               FreakBob might just leave you a mysterious riddle to solve first. (has fentanyl)
//             </p>
//             <div className="mt-3 flex justify-between">
//               <h2 className="text-green-400 text-xl "> Available </h2>
//               <button className="h-[30px] w-[80px] border text-primary border-primary rounded-lg">
//                 BID{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
function FeaturedItem() {
  return (
    <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-8">
      {/* Box */}
      <div className="mx-auto h-fit w-fit bg-white rounded-lg border border-black">
        <div className="m-8 flex justify-between">
          <img
            className="h-[300px] w-[400px] rounded-lg border flex-none"
            src="deo.png"
          />
          {/* Text next to image */}
          <div className="mx-8">
            <h1 className="text-2xl poppins-bold">Deodorant</h1>
            <h2 className="inter-regular text-xl text-gray-500">
              {" "}
              3 Interested | listed 10 days ago 
            </h2>
            <p className="inter-regular mt-7">
              You know what it smells like in class.
            </p>
            <div className="mt-3 flex justify-between">
              <h2 className="text-green-400 text-xl "> Available </h2>
              <button className="h-[30px] w-[80px] border text-primary border-primary rounded-lg">
                BID{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItem;
