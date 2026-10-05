

export const StudentDashboard = () => (
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Student Dashboard</h1>
    <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
      <p className="text-gray-600">Welcome to your ExamShield portal. Available exams will appear here.</p>
    </div>
  </div>
);

export const ExaminerDashboard = () => (
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Examiner Dashboard</h1>
    <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
      <p className="text-gray-600">Manage exams and view proctoring reports here.</p>
    </div>
  </div>
);

export const AdminDashboard = () => (
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
    <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
      <p className="text-gray-600">System overview and user management.</p>
    </div>
  </div>
);

export const Unauthorized = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-2">403</h1>
      <p className="text-xl text-gray-600">Unauthorized Access</p>
    </div>
  </div>
);
