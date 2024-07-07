import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ExperienceList, ExperienceListItem } from './TimeLineStyles';
import { timelineElements } from '../../constants/constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Experience from '../experience/experience';

const Timeline = () => {
  let workIconStyles = { background: "#06D6A0", display: "flex", justifyContent: "center", alignItems: "center" };
  let schoolIconStyles = { background: "#f9c74f", display: "flex", justifyContent: "center", alignItems: "center" };

  return (
    <Section nopadding id="experience">
      <SectionDivider />
      <SectionTitle>Experience</SectionTitle>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <img src="/images/work.svg" width={30} height={30} /> : <img src="/images/school.svg" width={30} height={30} />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <ExperienceList id="key-highlights">
                {element.key_highlights?.map((highlight, index) => <ExperienceListItem key={element.index + "" + index}>{highlight}</ExperienceListItem>)}
              </ExperienceList>
              {/* <p id="description">{element.description}</p> */}
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
};

export default Timeline;