import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

import Tamdid from "./../../components/tamdid/Tamdid";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Tamdid />
    </div>
  );
}
