import { Timeline, TimelineItem, Title, Text, Avatar } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import {
  faGraduationCap,
  faBriefcase,
  faBuilding,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
const Education = (props: any) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const phoneSize = useMediaQuery('(max-width: 600px)');
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      style={{
        width: phoneSize ? '100%' : '95%',
        height: phoneSize ? '1000px' : '1000px',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6e96cf',
        marginLeft: phoneSize ? 0 : '5vw',
        padding: '5%',
        display: 'flex',
        flexDirection: phoneSize ? 'column' : 'row',
        maxHeight: phoneSize ? '125vh' : '100vh',
      }}
      ref={props.educationRef}
    >
      <div
        data-aos={phoneSize ? 'fade-up' : 'fade-right'}
        style={{
          width: phoneSize ? '100%' : '50%',
          height: phoneSize ? '50%' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: phoneSize ? '15%' : '15%',

          marginBottom: phoneSize ? '10%' : '',
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            fontSize: phoneSize ? '2rem' : '3rem',
            zIndex: 3,
            color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
          }}
        >
          Education
        </Text>
        <Timeline
          active={2}
          bulletSize={35}
          lineWidth={5}
          color="red"
          style={{
            transform: phoneSize ? 'scale(1.2)' : 'scale(1.25)',
          }}
        >
          <Timeline.Item
            title="Independence HS"
            bullet={
              <Avatar
                src="https://static.hudl.com/users/temp/56346_af6abde0e79e493fb5b627ee838d602f.jpg"
                radius="xl"
                size="sm"
              />
            }
          >
            <Text size="xs">Aug 2016 - Jun 2018 </Text>
          </Timeline.Item>
          <Timeline.Item
            title="Collin College"
            bullet={
              <Avatar
                src="http://www.collin.edu/pr/images/Preferred-2C.jpeg"
                radius="xl"
                size="sm"
              />
            }
          >
            <Text size="xs"> 2019 - Now </Text>
            <Text size="xs"> Assoc. Comp Sci </Text>
          </Timeline.Item>
          <Timeline.Item
            lineVariant="dashed"
            title="Learn Full-Stack"
            bullet={<FontAwesomeIcon icon={faDesktop} />}
          >
            <Text size="sm">2020 - Forever</Text>
            <Text size="xs">Spent most of quarantine</Text>
            <Text size="xs"></Text>
            <Text size="xs">learning Full-Stack</Text>
          </Timeline.Item>
          <Timeline.Item title="UT Dallas" bullet={<FontAwesomeIcon icon={faGraduationCap} />}>
            <Text size="sm">2022 - </Text>
          </Timeline.Item>
        </Timeline>
      </div>
      <div
        style={{
          width: phoneSize ? '100%' : '50%',
          height: phoneSize ? '50%' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: phoneSize ? '15%' : '15%',
        }}
        data-aos={phoneSize ? 'fade-up' : 'fade-left'}
      >
        <Text
          style={{
            fontWeight: 700,
            fontSize: phoneSize ? '2rem' : '3rem',
            zIndex: 3,
            color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
          }}
        >
          Experience
        </Text>
        <Timeline
          active={2}
          bulletSize={35}
          lineWidth={5}
          color="red"
          style={{ transform: phoneSize ? 'scale(1.2)' : 'scale(1.25)' }}
        >
          <Timeline.Item title="Wireless Expert">
            <Text size="xs">Jan 2019 - Nov 2019 </Text>
            <Text size="xs">Wireless Advocates </Text>
          </Timeline.Item>
          <Timeline.Item title="Barista">
            <Text size="xs"> April 2018 - Jan 2019 </Text>
            <Text size="xs">Scooter's Coffee </Text>
          </Timeline.Item>
          <Timeline.Item
            lineVariant="dashed"
            title="Freelance"
            bullet={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <Text size="sm">2020 - Now</Text>
          </Timeline.Item>
          <Timeline.Item title="Your Company ????" bullet={<FontAwesomeIcon icon={faBuilding} />}>
            <Text size="sm">Soon</Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};
export default Education;
