"use client"; 
import { useParams, useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const { makeId, year } = useParams(); 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <span className="text-center mb-5">Hope you will like it😊</span>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Selected Vehicle</h1>

        <p className="text-lg text-gray-700 text-center mb-6">
          <strong>Make ID:</strong> {makeId} <br />
          <strong>Model Year:</strong> {year}
        </p>

        <button
          onClick={() => router.push("/")} 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Back to Filter
        </button>
      </div>
    </div>
  );
}
