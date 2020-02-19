export class PatientsModel {
  _id?: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
  bloodGroup?: string;
  designation?: string;
  address?: string;
}

export class PatientReports {
  _id: string;
  date: Date;
  doctorId: string;
  patientId: string;
  historyType: string;
  symptoms: string;
  note: string;
  report: string;
  test: string;
  medicine: string;
  advise: string;
  createdAt: Date;
  updatedAt: Date;
}

