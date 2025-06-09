export async function fetchPatients(
    page: number = 1,
    limit: number = 10,
    search: string = ""
  ) {
    const res = await fetch(
      `https://assign.immunefile.com/api/patients?page=${page}&limit=${limit}&search=${search}`
    );
    return res.json();
  }