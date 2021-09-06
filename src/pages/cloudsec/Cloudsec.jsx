import "./cloudsec.css";
import { FaLinux, FaWindows, FaArrowLeft, FaShoppingBasket } from "react-icons/fa";
import { SwapVertTwoTone, MailOutline, CloudQueue, DesktopMac, KeyboardReturn } from "@material-ui/icons";
import Flags from "country-flag-icons/react/3x2";
import Progressbar from "./../../components/proggressbar/Progressbar";

export default function CloudSet() {
  return (
    <div className="cloudsec-container">
      <div className="cloudsetflex-container">
        <div className="title">
          <h1> ساخت سرویس:</h1>
        </div>
        <div className="container-flex">
          <div className="cloudsetitems">
            <h2 className="featuredTitle">انتخاب سیستم عامل</h2>
            <div className="line-wrap"></div>
            <div ClassName="choose-system">
              <FaLinux class="FaLinux" />
              <h3>linux</h3>
            </div>
            <div ClassName="choose-system">
              <FaWindows class="FaWindows" />
              <div className="btn-os">
                <h4>انتخاب نوع OS</h4>
                <FaArrowLeft />
              </div>
              <h3>windows</h3>
            </div>
            <div ClassName="choose-system">
              <FaLinux class="FaLinux" />
              <h3>mac</h3>
            </div>
          </div>

          <div className="cloudsetitems">
            <span className="featuredTitle">دیتا سنتر</span>
            <div className="line-wrap"></div>
            <div className="data-center">
              <div className="data-center-items">
                <h3>آسیا تک</h3>
                <div className="ir-flag">
                  <Flags.IR title="ir" />
                </div>
              </div>
              <div className="data-center-items">
                <h3>پارس آنلاین</h3>
                <div className="ir-flag">
                  <Flags.IR title="ir" />
                </div>
              </div>
              <div className="data-center-items">
                <h3>آلمان</h3>
                <div className="ir-flag">
                  <Flags.DE title="United States" />
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
              <h3 className="bot-btn">بیشتر</h3>
            </div>
          </div>
        </div>
        {/* botoom div  */}
        <div className="bottom-div-container">
          <h2 className="featuredTitle">انتخاب سیستم عامل</h2>
          <div className="line-wrap-botoom"></div>
          <div className="bottom-div-detail">
            <div className="bottom-div-right">
              <h3>تنطیمات دستی</h3>
              <div className="bottom-div-right-detail">
                <FaShoppingBasket class="details-icon1" />
                <h3>رم</h3>
              </div>
              <div className="bottom-div-right-detail">
                <FaShoppingBasket class="details-icon2" />
                <h3>پردازنده</h3>
              </div>
              <div className="bottom-div-right-detail">
                <FaShoppingBasket class="details-icon3" />
                <h3>فضای ذخیره سازی</h3>
              </div>
            </div>
            <div className="bottom-div-left">
              <h3>تنظیمات خودکار</h3>
              <div className="bottom-div-left-detail">
                <div className="preggressbar-details">
                  <h4>Total : 7.78G</h4>
                  <Progressbar bgcolor="limegreen" progress="70" height={20} />
                </div>
                <div className="preggressbar-details">
                  <h4>Total : 7.78G</h4>
                  <Progressbar bgcolor="darkorange" progress="70" height={20} />
                </div>
                <div className="preggressbar-details">
                  <h4>Total : 7.78G</h4>
                  <Progressbar bgcolor="dodgerblue" progress="70" height={20} />
                </div>
              </div>
            </div>
          </div>
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
