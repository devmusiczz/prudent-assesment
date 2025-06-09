import { Card, CardContent } from "@/components/ui/card";
import { Patient } from "@/app/types/patients";
import Image from "next/image";
import { LocationEdit, Mail, Phone } from "lucide-react";
import { getDiseaseColor } from "@/app/utils/getDiseaseColor";

export default function PatientCard({ patient }: { patient: Patient }) {
  const contact = patient.contact[0];
  console.log(patient.photo_url)
  const isValidImage = (url: string | undefined) => {
    return !!url && /\.(jpg|jpeg|png|webp|gif)$/i.test(url);
  };

  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center space-x-4">
          {isValidImage(patient.photo_url) ? (
            <Image
              src={patient.photo_url}
              alt={patient.patient_name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              N/A
            </div>
          )}
          
          <div>
            <h2 className="text-xl font-semibold">{patient.patient_name}</h2>
            <p className="text-sm text-gray-600">Age: {patient.age}</p>
          </div>
        </div>

        <div className="text-sm flex flex-col gap-2 text-gray-700">
        <span
  className={`px-1 py-1 rounded w-max ${getDiseaseColor(
    patient.medical_issue
  )}`}
>
  {patient.medical_issue.charAt(0).toUpperCase() +
    patient.medical_issue.slice(1).toLowerCase()}
</span>
          <p className="flex gap-1"><Phone/> {contact?.number || "N/A"}</p>
          <p className="flex gap-1"><Mail/> {contact?.email || "N/A"}</p>
          <p className="flex gap-1"><LocationEdit/>{contact?.address || "N/A"}</p>
        </div>
      </CardContent>
    </Card>
  );
}
