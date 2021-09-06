import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/Alerts">Alerts</Link>
        <Link to="/Settings">Settings</Link>
        <Link to="/Services">Services</Link>
        <Link to="/CronJobs">CronJobs</Link>
        <Link to="/Application-Users">Application Users</Link>
        <Link to="/Server-Logs">ServerLogs</Link>
        <Link to="/FireWall">FireWall</Link>
        <Link to="/CDn">CDn</Link>
        <Link to="/Cloaud-Vps">
          <ChevronLeft className="ChevronLeft" />
          CloaudVps
        </Link>
      </div>
    </div>
  );
}
