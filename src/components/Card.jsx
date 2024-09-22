import react from "react";

function Card(props) {

    console.log(props)
  return (
    <div >
      {/* Box */}
      <div className="h-[400px] w-[400px] bg-white rounded-lg border border-black shadow-xl">
        <div className="m-8 justify-between">
          <img
            className="mx-auto my-4 h-[200px] w-4/5 rounded-lg object-cover"
            src={props.img}
          />
          {/* Text next to image */}
          <div className="mx-8">
            <h1 className="text-xl poppins-bold">{props.name}</h1>
            <div className="flex gap-1">
              <h2 className="inter-regular text-l text-gray-500">
                {props.interested} Interested
              </h2>
              <h2 className="inter-regular text-l text-gray-500">| </h2>
              <h2 className="inter-regular text-l text-gray-500">
                {props.date}
              </h2>
            </div>

            <p className="inter-regular mt-4">You UTD students need this!!!</p>
            <div className="mt-3 flex justify-between">
              <h2 className="text-green-400 text-xl "> {props.status}</h2>
              <button className="h-[30px] w-[80px] border text-primary border-primary rounded-lg hover:text-white duration-300 hover:bg-secondary">
                BID{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
