import React, { useState, useEffect } from "react";
import "../scss/component/_aspirants.scss";

import PageTitle from "../components/pagetitle/PageTitle";
import UpcomingExams from "../components/aspirants/UpcomingExams";
import upcomingExams_data from "../assets/fake-data/dataForAspirants/upcoming-exams_data";
import Videos from "../components/aspirants/Videos";
import videos_data from "../assets/fake-data/dataForAspirants/videos_data";
import Channels from "../components/aspirants/Channels";
import channel_data from "../assets/fake-data/dataForAspirants/channel_data";
import Websites from "../components/aspirants/Websites";
import websites_data from "../assets/fake-data/dataForAspirants/websites_data";

function Aspirants() {
  return (
    <div className="wrapper">
      <PageTitle title="For Aspirants" desc="Your Preparation Zone" />
      {/* <div className="block-text center">
        <h3 className="heading">Upcoming Exams</h3>
        <div className="topic">
          <UpcomingExams data={upcomingExams_data}></UpcomingExams>
        </div>
      </div> */}

      <div className="block-text center">
        <h3 className="heading">Video Resources</h3>
        <div className="topic">
          <Videos data={videos_data}></Videos>
        </div>
      </div>

      <div className="block-text center md-phone">
        <h3 className="heading">Channels To Follow</h3>
        <div className="topic">
          <Channels data={channel_data}></Channels>
        </div>
      </div>

      <div className="block-text center">
        <h3 className="heading">Official Websites</h3>
        <div className="topic">
          <Websites data={websites_data}></Websites>
        </div>
      </div>
    </div>
  );
}

export default Aspirants;
