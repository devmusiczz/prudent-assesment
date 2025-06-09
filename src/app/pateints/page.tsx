"use client";

import { useEffect, useState } from "react";
import PatientTable from "@/components/PatientTable";
import { fetchPatients } from "@/app/utils/api"
import { Patient } from "@/app/types/patients";

export default function Page() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Directory</h1>

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
          <PatientTable patients={patients} />
          <div className="flex justify-between mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}