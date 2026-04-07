import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const IconLogo = () => (
  <StaticImage
    src="../../images/companyLogoTransperent.png"
    alt="IzarAi"
    placeholder="none"
    height={30}
    quality={100}
  />
);

export default IconLogo;
