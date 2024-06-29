import React from 'react';
import Image from 'next/image';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, StyledImage } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding style={{ margin: '0px !important' }}>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to tell the viewers about the projects
        i have done and my experiences in a creative way that doesn't bore you
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>
    <RightSection>
      {/* TO BE CONTINUED */}
      {/* <StyledImage src="/images/blob-dp.svg" /> */}
      {/* <StyledImage src="/images/kunal_virmani_cropped.png" alt='kunal' /> */}
    </RightSection>
  </Section>
);

export default Hero;