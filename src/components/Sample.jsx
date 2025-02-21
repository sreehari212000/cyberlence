import React, { useState } from "react";

const allWidgets = [
  { id: 1, title: "Personal Data", name: "Sample", email: "sample@gmail.com", phoneno: 233344545 },
  { id: 2, title: "Guardian Data", email: "sdsf@gmail.com", phoneno: 24345432, alternateemail: "ssdsds@gddsf.com", address: "sdsdfsdds dsfdsfsf" },
  { id: 3, title: "Transfer Data" },
  { id: 4, title: "Degree Program", bachelors: "B-Tech", discipline: "Comp Science", joinDate: "12-07-2024" },
  { id: 5, title: "Admin Notification", feesPayment: "Hostel fee", lastDate: "23-02-2025", uploadCertificates: "Completed", pendingStatus: "Hostel fees" }
];

const DashBoardWidget = ({ title, onRemove, ...props }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <ul>
        {Object.entries(props).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button
        onClick={onRemove}
        className="mt-2 bg-red-500 text-white p-2 rounded-md"
      >
        Remove
      </button>
    </div>
  );
};

const Dashboard = () => {
  const [activeWidgets, setActiveWidgets] = useState(allWidgets);

  // Function to remove a widget
  const removeWidget = (id) => {
    setActiveWidgets(activeWidgets.filter(widget => widget.id !== id));
  };

  // Function to add a widget back
  const addWidget = (widget) => {
    setActiveWidgets([...activeWidgets, widget]);
  };

  return (
    <div className="p-6 border">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Buttons to Add Removed Widgets Back */}
      <div className="mb-4">
        {allWidgets
          .filter(widget => !activeWidgets.some(active => active.id === widget.id))
          .map(widget => (
            <button
              key={widget.id}
              onClick={() => addWidget(widget)}
              className="mr-2 p-2 bg-green-500 text-white rounded-md"
            >
              Add {widget.title}
            </button>
          ))}
      </div>

      {/* Display Active Widgets */}
      <div className="grid gap-4">
        {activeWidgets.map(widget => (
          <DashBoardWidget
            key={widget.id}
            {...widget}
            onRemove={() => removeWidget(widget.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;