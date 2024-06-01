import { useState } from "react";
import EditPane from "./components/EditPane";
import GraphPane from "./components/GraphPane";

function App() {
  return (
    <div className="w-full">
      <div className="p-4 z-10 max-sm:p-2 bg-neutral-200 flex justify-between text-lg max-sm:flex-col shadow-lg">
        <div>Name: Swaraj Y. Dusane</div>
        <div>
          Mail Id:{" "}
          <a
            className=" underline text-sky-600"
            href="mailto:swaraj.dusane90@gmail.com"
          >
            swaraj.dusane90@gmail.com
          </a>
        </div>
        <div>Phone Number: +91 7039011011</div>
      </div>
      <div className="w-full flex max-md:flex-col">
        <GraphPane />
        <EditPane />
      </div>
    </div>
  );
}

export default App;
