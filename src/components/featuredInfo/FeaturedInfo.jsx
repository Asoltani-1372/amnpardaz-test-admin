import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";
import "./featuredInfo.css";
import { AddCircleOutlineTwoTone } from "@material-ui/icons";

export default function FeaturedInfo() {
  const data = [
    {
      name: "سرور",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
    {
      name: "امنیت ابری",
      uv: 26.69,
      pv: 4567,
      fill: "#83a6ed",
    },
    {
      name: "فضای ذخیره سازی",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1",
    },
    {
      name: "وی پی ان",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d",
    },
    {
      name: "پهنای باند",
      uv: 8.63,
      pv: 3908,
      fill: "#a4de6c",
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">مصرف ماهیانه سرویس ها</span>
        <div className="line-wrap"></div>
        <div className="chart-container">
          <ResponsiveContainer width="125%" height="125%" text-algne="right">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" text-algne="right" barSize={10} data={data}>
              <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }} background clockWise dataKey="uv" />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" text-algne="right" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">پیام ها</span>
        <div className="line-wrap"></div>
        <div className="mid-text-wrapper">
          <p className="featuredSub">حساب شما منفی شده است</p>
          <p className="mid-date">۲۵ مرداد ۱۳۹۹</p>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">کیف پول</span>
        <div className="line-wrap"></div>
        <div className="mid-text-wrapper">
          <p className="featuredSub">هزینه مصرف این ماه:</p>
          <p className="mid-date">۱۲۰۳۰۰۰ ریال</p>
        </div>
        <div className="mid-text-wrapper">
          <p className="featuredSub">کیف پول</p>
          <p className="mid-date">۹,850,۰۰۰ هزار ریال</p>
        </div>
        <div className="btn-container">
          <div className="botoom-btn">
            <p>افزایش موجودی</p>
            <AddCircleOutlineTwoTone className="AddCircleOutlineTwoTone" />
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">آخرین تیکت ها</span>
        <div className="line-wrap"></div>
        <div className="mid-text-wrapper">
          <p className="ticket-text">شما تا به حال تیکتی ثبت نکرده اید.</p>
        </div>
        <div className="btn-container">
          <div className="botoom-btn">
            <p>ایجاد تیکت</p>
            <AddCircleOutlineTwoTone className="AddCircleOutlineTwoTone" />
          </div>
        </div>
      </div>
    </div>
  );
}
