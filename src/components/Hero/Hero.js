import React from 'react';
import Image from 'next/image';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, MaskedImage, StyledImage } from './HeroStyles';
import { MdWavingHand } from "react-icons/md";

const Hero = (props) => {
  const imageUrl = '/images/kunal_virmani_cropped.png';
  const maskUrl = '/images/blob-green.svg';

  return (
    <Section row nopadding style={{ margin: '0px !important' }}>
      <LeftSection>
        <StyledImage src='/images/kunal_virmani.jpeg' />
        <SectionTitle main center>
          Hi ,<br />
          I'm Kunal, <br />
          Front-end Developer
        </SectionTitle>
        <SectionText>
          I design and develop experiences that make people's lives simpler through web apps. I work with Figma, HTML5, CSS3, Javascript,
          React, ReactNative and Flutter.
        </SectionText>

        {/* <Button onClick={() => window.location = "https://google.com"}>
          Learn More
          <MdWavingHand size="3rem" />
        </Button> */}
      </LeftSection>
      {/* <RightSection>
        <MaskedImage src={imageUrl} mask={maskUrl} alt="Masked Image" />
      </RightSection> */}
    </Section>
  );
}

export default Hero;