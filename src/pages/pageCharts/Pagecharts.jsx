import "./pagecharts.css";
import { SwapVertTwoTone, MailOutline, CloudQueue, DesktopMac, KeyboardReturn } from "@material-ui/icons";
import Progressbar from "./../../components/proggressbar/Progressbar";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

export default function Pagecharts() {
  return (
    <div className="cloudsec-container">
      <div className="cloudsetflex-container">
        <div className="title">
          <h1> Iran-cloud-server</h1>
        </div>
        <div className="container-flex">
          <div className="iran-cloud-top-div box-shadoww">
            <h4>کارکرد سرور</h4>
            <div className="preggressbar-details">
              <h4>Total : 20G</h4>
              <Progressbar bgcolor="Rajah" progress="70" height={20} />
            </div>
          </div>
          <div className="iran-cloud-top-div box-shadoww">
            <h4>حافظه</h4>
            <div className="preggressbar-details ">
              <h4>Total : 20G</h4>
              <Progressbar bgcolor="deepskyblue" progress="70" height={20} />
            </div>
          </div>
          <div className="iran-cloud-top-div box-shadoww">
            <h4>رم</h4>
            <div className="preggressbar-details">
              <h4>Total : 20G</h4>
              <Progressbar bgcolor="limegreen" progress="70" height={20} />
            </div>
          </div>
        </div>
        {/* botoom div  */}
        <div className="bottom-div-container">
          <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        </div>
      </div>

      <div className="leftbar">
        <div className="top-text">
          <h2>سرویس های شما</h2>
          <SwapVertTwoTone className="SwapVertTwoTone" />
        </div>
        <p>کل سرویس ها</p>
        <div className="active-services">
          <h3>سرویس های فعال</h3>
          <span className="active-number"> 3</span>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h3>اسم سرویس</h3>
            <h4>جزعیات سیستم</h4>
          </div>
          <div className="services-icons">
            <MailOutline className="icons-s" />
            <CloudQueue className="icons-s" />
            <DesktopMac className="icons-s" />
          </div>
        </div>
      </div>
    </div>
  );
}
