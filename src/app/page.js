"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error("Error fetching vehicle makes:", error);
      }
    };

    fetchMakes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Vehicle Filter</h1>

        {/* Vehicle Make Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Make
          </label>
          <select
            className="block w-full p-2 border rounded-md"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select a make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>
        </div>

        {/* Model Year Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Model Year
          </label>
          <select
            className="block w-full p-2 border rounded-md"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Button */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4"
          onClick={() => alert(`Make: ${selectedMake}, Year: ${selectedYear}`)}
        >
          Filter
        </button>

        {/* Next Button */}
        <Link
          href={selectedMake && selectedYear ? `/result/${selectedMake}/${selectedYear}` : "#"}
        >
          <button
            className={`w-full py-2 rounded-md ${
              selectedMake && selectedYear
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedMake || !selectedYear}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}





































// "use client"

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [makes, setMakes] = useState([]);
//   const [selectedMake, setSelectedMake] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

 
//   useEffect(() => {
//     const fetchMakes = async () => {
//       try {
//         const response = await fetch(
//           "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
//         );
//         const data = await response.json();
//         setMakes(data.Results);
//       } catch (error) {
//         console.error("Error fetching vehicle makes:", error);
//       }
//     };

//     fetchMakes();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-4">Vehicle Filter</h1>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Select Make
//           </label>
//           <select
//             className="block w-full p-2 border rounded-md"
//             value={selectedMake}
//             onChange={(e) => setSelectedMake(e.target.value)}
//           >
//             <option value="">Select a make</option>
//             {makes.map((make) => (
//               <option key={make.MakeId} value={make.MakeName}>
//                 {make.MakeName}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Select Model Year
//           </label>
//           <select
//             className="block w-full p-2 border rounded-md"
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           >
//             <option value="">Select a year</option>
//             {years.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//           onClick={() => alert(`Make: ${selectedMake}, Year: ${selectedYear}`)}
//         >
//           Filter
//         </button>
//       </div>
//     </div>
//   );
// }


