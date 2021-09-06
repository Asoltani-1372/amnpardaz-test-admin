import "./sidebar.css";
import { Storage, FilterDrama, SdStorageRounded, VpnLockRounded, CollectionsBookmarkRounded, AttachMoneyRounded, SettingsApplications, AccountCircleOutlined, ExitToAppOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Storage className="sidebarIcon" />
                <h4 className="link-text">سرور</h4>
              </li>
            </Link>
            <Link to="/cloud-sec">
              <li className="sidebarListItem">
                <FilterDrama className="sidebarIcon" />
                <h4 className="link-text">امنیت ابری</h4>
              </li>
            </Link>
            <Link to="/iran-cloud-server">
              <li className="sidebarListItem">
                <SdStorageRounded className="sidebarIcon" />
                <h4 className="link-text">فضای ذخیره سازی</h4>
              </li>
            </Link>
            <li className="sidebarListItem">
              <VpnLockRounded className="sidebarIcon" />
              <h4 className="link-text">وی پی ان</h4>
            </li>
            <li className="sidebarListItem">
              <CollectionsBookmarkRounded className="sidebarIcon" />
              <h4 className="link-text"> پهنای باند</h4>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <AttachMoneyRounded className="sidebarIcon" />
                <h4 className="link-text">مالی</h4>
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <SettingsApplications className="sidebarIcon" />
                <h4 className="link-text">تنظیمات</h4>
              </li>
            </Link>
            <li className="sidebarListItem">
              <AccountCircleOutlined className="sidebarIcon" />
              <h4 className="link-text">اکانت کاربر</h4>
            </li>
            <li className="sidebarListItem">
              <ExitToAppOutlined className="sidebarIcon" />
              <h4 className="link-text">خروج</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
