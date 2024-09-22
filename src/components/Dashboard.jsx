import {React,useState} from "react";
import Card from "./Card";
import data from "../data/data.json";

function Dashboard() {
    const [items, setItems] = useState(data);
    console.log(data);
  return (
    <div className="flex justify-between flex-wrap gap-y-12">
        {/* Events List */}
        {items.map((item,index) => (
        <Card
        key = {index}
        img={item.img}
        name={item.name}
        interested={item.interested}
        date={item.date}
        status={item.status}
      /> 
      ))}

    </div>
  );
}

export default Dashboard;
