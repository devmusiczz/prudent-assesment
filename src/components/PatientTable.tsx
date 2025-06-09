import { Patient } from "@/app/types/patients";

export default function PatientTable({ patients }: { patients: Patient[] }) {
  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Age</th>
          <th className="p-2">Medical Issue</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.patient_id} className="border-t text-center">
            <td className="p-2">ID-{p.patient_id.toString().padStart(4, "0")}</td>
            <td className="p-2">{p.patient_name}</td>
            <td className="p-2">{p.age}</td>
            <td className="p-2">
              <span className="px-2 py-1 rounded bg-pink-100 text-pink-700">
                {p.medical_issue}
              </span>
            </td>
            <td className="p-2">{p.contact[0]?.number || "N/A"}</td>
            <td className="p-2">{p.contact[0]?.email || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
