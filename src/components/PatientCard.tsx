import { Card, CardContent } from "@/components/ui/card";
import { Patient } from "@/app/types/patients";
import Image from "next/image";
import { LocationEdit, Mail, Phone } from "lucide-react";
import { getDiseaseColor } from "@/app/utils/getDiseaseColor";

export default function PatientCard({ patient }: { patient: Patient }) {
  const contact = patient.contact[0];

  const isValidImage = (url: string | undefined) => {
    return !!url && /\.(jpg|jpeg|png|webp|gif)$/i.test(url);
  };

  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-blue-200">
      {/* Top Section */}
      <div className="bg-blue-100 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isValidImage(patient.photo_url) ? (
            <Image
              src={patient.photo_url}
              alt={patient.patient_name}
              width={56}
              height={56}
              className="rounded-full object-cover border border-blue-300"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600 border border-gray-400">
              N/A
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold">{patient.patient_name}</h2>
            <p className="text-sm text-gray-600">
            ID-{String(patient.patient_id).padStart(4, "0")}
              
            </p>
          </div>
        </div>
        <div className="text-xs text-blue-800 bg-blue-200 px-2 py-1 rounded-full font-semibold border border-blue-300">
        Age: {patient.age || "N/A"}
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-4 space-y-3">
        <span
          className={`inline-block px-3 py-1 text-sm font-medium rounded border w-max ${getDiseaseColor(
            patient.medical_issue
          )}`}
        >
          {patient.medical_issue.charAt(0).toUpperCase() +
            patient.medical_issue.slice(1).toLowerCase()}
        </span>

        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            {contact?.number || "N/A"}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            {contact?.email || "N/A"}
          </p>
          <p className="flex items-center gap-2">
            <LocationEdit className="w-4 h-4 text-gray-500" />
            {contact?.address || "N/A"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
