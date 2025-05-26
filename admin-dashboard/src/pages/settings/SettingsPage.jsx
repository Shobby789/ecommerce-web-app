import React, { useEffect } from "react";

const SettingsPage = () => {
  useEffect(() => {
    document.title = "Settings";
  }, []);
  return (
    <div>
      <h1>Settings Page</h1>
    </div>
  );
};

export default SettingsPage;
