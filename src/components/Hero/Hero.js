import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
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
  </Section>
);

export default Hero;