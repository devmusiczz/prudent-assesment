// utils/getDiseaseClass.ts
export function getDiseaseColor(issue: string): string {
    const styles: Record<string, string> = {
      fever: "bg-red-100 text-red-700",
      headache: "bg-orange-100 text-orange-700",
      "sprain ankle": "bg-green-100 text-green-700",
      "sprained ankle": "bg-green-100 text-green-700",
      rash: "bg-pink-100 text-pink-700",
      "sore throat": "bg-yellow-100 text-yellow-700",
    };
  
    return styles[issue.toLowerCase()] || "bg-purple-100 text-gray-700"; // ✅ Default fallback
  }
  