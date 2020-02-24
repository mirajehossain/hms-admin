export class DoctorsModel {
  _id?: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
  bloodGroup?: string;
  gender: string;
  designation?: string;
  address?: string;
}

export class DoctorsReportModel {
  totalConsult: number;
  totalConsultPatient: number;
  recentConsult: [
    {
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
      patient: {
        _id?: string;
        name: string;
        email: string;
        mobile: string;
        bloodGroup?: string;
        gender: string;
        designation?: string;
        address?: string;
      };
    }
  ];
}

