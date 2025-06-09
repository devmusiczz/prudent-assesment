"use client";

import { useEffect, useState } from "react";
import PatientTable from "@/components/PatientTable";
import PatientCard from "@/components/PatientCard";
import { fetchPatients } from "@/app/utils/api";
import { Patient } from "@/app/types/patients";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Pagination from "@/components/Pagination";

export default function Page() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [view, setView] = useState<"row" | "card">("row");

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      fetchPatients(page, 10, search).then((res) => {
        setPatients(res.data);
        setTotalPages(res.pagination.total_pages);
        setLoading(false);
      });
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [page, search]);

  return (
    <div >
      <h1 className="text-2xl h-20 p-4 font-bold mb-2 text-amber-50 bg-blue-600">Patient Directory
      <p className="text-xs font-light">1000 Patient Found</p>
      </h1>
     
<div className="p-5">
      <Tabs defaultValue="row" value={view} onValueChange={(v) => setView(v as "row" | "card")}>
        <TabsList className="mb-4">
          <TabsTrigger value="row">Table View</TabsTrigger>
          <TabsTrigger value="card">Card View</TabsTrigger>
        </TabsList>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search patients..."
          className="mb-4 p-2 border w-full max-w-md"
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <TabsContent value="row">
              <PatientTable patients={patients} />
            </TabsContent>
            <TabsContent value="card">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {patients.map((patient) => (
                  <PatientCard key={patient.patient_id} patient={patient} />
                ))}
              </div>
            </TabsContent>

            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </Tabs>
      </div>
    </div>
  );
}
