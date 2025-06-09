export function getDiseaseColor(issue: string): string {
  const styles: Record<string, string> = {
    fever: "bg-red-100 text-red-600 font-bold border-2 border-red-400",
    headache: "bg-orange-100 text-orange-600 font-bold border-2 border-orange-400",
    "sprain ankle": "bg-green-100 text-green-600 font-bold border-2 border-green-400",
    "sprained ankle": "bg-green-100 text-green-600 font-bold border-2 border-green-400",
    rash: "bg-pink-100 text-pink-600 font-bold border-2 border-pink-400",
    "sore throat": "bg-yellow-100 text-yellow-600 font-bold border-2 border-yellow-400",
  };

  return styles[issue.toLowerCase()] || "bg-purple-100 text-gray-600 font-bold border-2 border-purple-400";
}
