import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import filedriveImg from '@/../public/images/file-drive.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'MASTER - Creative Technologies',
    location: 'ESILV - Paris, France',
    description: `Creative Technologies Master's graduate with engineering expertise. Specializes in innovative problem-solving, blending design and technology. Experienced in projects involving mechanical design, audio systems and electronics.`,
    icon: React.createElement(BookIcon),
    date: 'September 2022 - Present',
  },
  {
    title: 'Mechanical Design Intern',
    location: 'ID² - Marseille, France',
    description: `3D design and drafting on SolidWorks, project follow-up, client communication`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'April 2024 - August 2024',
  },
  {
    title: 'Preparatory Classes for Grandes Écoles',
    location: 'Annonay - France',
    description: 'Scientific Preparatory Class graduate with a strong foundation in mathematics, physics, and engineering sciences. Skilled in analytical thinking, problem-solving, and rigorous academic approaches.',
    icon: React.createElement(LaptopMinimalIcon),
    date: 'September 2020 - July 2022',
  },
] as const;

export const images = {
  campwithusImg,
  filedriveImg,
};

export const projectsData = [
  {
    title: 'CLARUS',
    description:
      'A programmable audio amplifier with per-channel equalizers, interconnectivity, and USB-C external battery support, designed for versatile speaker setups and DIY audio systems',
    tags: [],
    imageUrl: filedriveImg,
    link: 'https://coeos.github.io/ThreeJS-Clarus/',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [],
    imageUrl: portfolioImg,
    link: 'https://github.com/Coeos/portfolio',
  },
  {
    title: 'KOLOBURO',
    description: `A minimalist leather cable management device launched on Kickstarter, combining practicality and elegance to keep your cables organized and tangle-free, made for design-conscious tech users.`,
    tags: [],
    imageUrl: auditMasterImg,
    link: 'https://www.kickstarter.com/projects/koloburo/quickstarter-koloburo-leather-cable-management-device?ref=user_menu',
  },
  {
    title: 'Water Decanteur',
    description:
      'A 3D-modeled water decanter designed for rapid filtration of large volumes, aimed at providing clean water to flood a nuclear reactor in critical scenarios.',
    tags: [],
    imageUrl: surgeImg,
    link: '',
  },
  {
    title: 'Sink Support',
    description:
      'A seismic-resistant sink support, designed to withstand earthquakes and other stresses, tailored for bunkers in nuclear power plants.',
    tags: [],
    imageUrl: campwithusImg,
    link: '',
  },
] as const;

export const skillsData = [
  ['SolidWorks', '/svgs/Soliworks.svg'],
  ['Arduino', '/svgs/arduino-1.svg'],
  ['Matlab', '/svgs/matlab.svg'],
  ['C#', '/svgs/C--4.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;