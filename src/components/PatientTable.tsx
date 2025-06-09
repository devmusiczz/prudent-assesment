import { Patient } from "@/app/types/patients";
import { getDiseaseColor } from "@/app/utils/getDiseaseColor";
import Image from "next/image";

export default function PatientTable({ patients }: { patients: Patient[] }) {
  const isValidImage = (url: string | undefined) =>
    !!url && /\.(jpg|jpeg|png|webp|gif)$/i.test(url);

  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-100 text-blue-600">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Age</th>
          <th className="p-2">Medical Issue</th>
          <th className="p-2">Address</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.patient_id} className="border-t text-center">
            <td className="p-2">
              {`ID-${p.patient_id.toString().padStart(4, "0")}`}
            </td>
            <td className="p-2 flex items-center gap-2">
              {isValidImage(p.photo_url) ? (
                <Image
                  src={p.photo_url}
                  alt={p.patient_name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                  N/A
                </div>
              )}
              <span>{p.patient_name}</span>
            </td>
            <td className="">{p.age}</td>
            <td className="p-2">
              <span className={`px-2 py-1 rounded ${getDiseaseColor(p.medical_issue)}`}>
                {p.medical_issue.charAt(0).toUpperCase() +
                  p.medical_issue.slice(1).toLowerCase()}
              </span>
            </td>
            <td className="p-2">{p.contact[0]?.address || "N/A"}</td>
            <td className="p-2">{p.contact[0]?.number || "N/A"}</td>
            <td className="p-2">{p.contact[0]?.email || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
