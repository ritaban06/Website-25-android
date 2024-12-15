import React, { useState, useEffect } from "react";
import "../scss/component/_aspirants.scss";

import PageTitle from "../components/pagetitle/PageTitle";
import UpcomingExams from "../components/aspirants/UpcomingExams";
import notices from "../assets/fake-data/dataStudy/notices";
import Videos from "../components/aspirants/Videos";
import playlists from "../assets/fake-data/dataStudy/playlists";
import Channels from "../components/aspirants/Channels";
import study_channel from "../assets/fake-data/dataStudy/study_channel";
import Websites from "../components/aspirants/Websites";
import {notes,pyqs} from "../assets/fake-data/dataStudy/notes";

function Study() {
  return (
    <div className="wrapper">
      <PageTitle title="Study Material" desc="All Resources you Need" />
      <div className="block-text center flexcenter">
        <h3 className="heading">Notices</h3>
        <div className="topic">
          <UpcomingExams data={notices}></UpcomingExams>
        </div>
      </div>

      {/* <div className="block-text center">
        <h3 className="heading">Study Playlists</h3>
        <div className="topic">
          <Videos data={playlists}></Videos>
        </div>
      </div> */}

      <div className="block-text center">
        <h3 className="heading">Channels To Follow</h3>
        <div className="topic">
          <Channels data={study_channel}></Channels>
        </div>
      </div>

      <div className="block-text center">
        <h3 className="heading">MAKAUT Organizer</h3>
        <div className="topic">
          <Websites data={notes}></Websites>
        </div>
      </div>

      <div className="block-text center">
        <h3 className="heading">MAKAUT PYQs</h3>
        <div className="topic">
          <Websites data={pyqs}></Websites>
        </div>
      </div>

    </div>
  );
}

export default Study;
