import { Avatar, Text } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import { Button, Card, Progress } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const Skills = (props: any) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const [scroll, scrollTo] = useWindowScroll();

  const [selected, setSelected] = useState(1);
  const [reactProgress, setReactProgress] = useState(0);
  const phoneSize = useMediaQuery('(max-width: 600px)');

  const initial = 0;
  const beginner = 25;
  const intermediate = 65;
  const expert = 100;
  useEffect(() => {
    // here you can add your aos options
    AOS.init();
    // Aos.init({ startEvent: "load", once: false });
  }, []);
  const selectSkillsPage = (page: any) => {
    setSelected(page);
  };
  const animateNumber = (level: any) => {
    var current = 0;
    for (var i = 0; (i = level); i++) {
      current++;
    }
    return current;
  };

  const SkillItem = (props: any) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10%',
          marginBottom: phoneSize ? '15%' : '5%',
        }}
      >
        <div style={{ display: 'flex', gap: '2%' }}>
          <Avatar radius="xl" src={props.src} />
          <Text style={{ fontWeight: 700, fontSize: '1.5rem', color: '#FFF' }}>{props.title}</Text>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5%',
            width: phoneSize ? '100%' : '95%',
          }}
        >
          <Progress
            value={props.value}
            size="medium"
            color={props.color}
            indeterminated={props.indeterminate}
          />
          {/* <Text style={{ color: '#FFF', fontSize: '1.25rem' }}>{props.level}</Text> */}
          <Stars starLevel={props.starLevel} />
        </div>
      </motion.div>
    );
  };

  const FrontEnd = () => {
    return (
      <Fragment>
        <SkillItem
          title="Next.js/React.js"
          src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png"
          starLevel={5}
          value={expert}
          color="gradient"
        />
        <SkillItem
          title="CSS"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/1200px-Devicon-css3-plain.svg.png"
          value={expert}
          starLevel={5}
        />
        <SkillItem
          title="HTML"
          src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
          value={expert}
          starLevel={5}
          color="#E44E26"
        />
        <SkillItem
          title="GraphQL"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png"
          value={intermediate}
          starLevel={3}
          color="#f4a"
        />
        <SkillItem
          title="SASS"
          src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
          value={intermediate}
          starLevel={3}
          color="#f4a"
        />
        <SkillItem
          title="Node.js"
          src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
          value={intermediate - 10}
          starLevel={3}
          color="success"
        />
      </Fragment>
    );
  };

  const BackEnd = () => {
    return (
      <Fragment>
        <SkillItem
          title="MongoDB"
          src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
          color="success"
          value={expert}
          starLevel={5}
        />
        <SkillItem
          title="Firebase"
          src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
          color="warning"
          value={intermediate}
          starLevel={3}
        />
        <SkillItem
          title="Python"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          color="primary"
          value={beginner}
          starLevel={2}
        />
        <SkillItem
          title="php"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png"
          color="primary"
          value={beginner - 10}
          starLevel={1}
        />
      </Fragment>
    );
  };

  const Blockchain = () => {
    return (
      <Fragment>
        <SkillItem
          title="Web3.js"
          src="https://repository-images.githubusercontent.com/24655114/c71c5800-6a8c-11e9-9117-8ec357c9f69e"
          color="gradient"
          value={intermediate}
          starLevel={4}
        />
        <SkillItem
          title="Solidity"
          src="https://download.logo.wine/logo/Solidity/Solidity-Logo.wine.png"
          color="secondary"
          value={beginner + 5}
          starLevel={2}
        />

        <SkillItem
          title="Plutus/Cardano"
          src="https://cryptologos.cc/logos/cardano-ada-logo.png"
          color="primary"
          value={intermediate}
          starLevel={0}
          indeterminate={true}
        />
        <SkillItem
          title="Ergo"
          src="https://s2.coinmarketcap.com/static/img/coins/200x200/1762.png"
          color="#444"
          value={intermediate}
          starLevel={0}
          indeterminate={true}
        />
      </Fragment>
    );
  };
  const Other = () => {
    return (
      <Fragment>
        <SkillItem
          title="Microsoft Office"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png"
          color="#ff7300e0"
          value={expert}
          starLevel={5}
        />
        <SkillItem
          title="Photoshop"
          src="https://logos-world.net/wp-content/uploads/2020/11/Adobe-Photoshop-Logo.png"
          color="primary"
          value={intermediate}
          starLevel={4}
        />
        <SkillItem
          title="After Effects"
          src="https://1000logos.net/wp-content/uploads/2020/07/After-Effects-Logo.png"
          color="secondary"
          value={beginner + 10}
          starLevel={2}
        />

        <SkillItem
          title="Illustrator"
          src="https://vectorlogo4u.com/wp-content/uploads/2020/11/adobe-illustrator-cc-logo.png"
          color="#ff7300e0"
          value={beginner}
          starLevel={1}
        />
      </Fragment>
    );
  };
  return (
    <div
      ref={props.skillsRef}
      style={{
        width: phoneSize ? '100vw' : '95vw',
        height: selected == 1 ? '1150px' : '900px',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6E96CF',
        marginLeft: phoneSize ? '0' : '5vw',
        padding: phoneSize ? '5% 5%' : '5% 20%',
        paddingTop: '5%',
        // paddingBottom:""
        display: 'flex',
        flexDirection: 'column',
        gap: '2%',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          justifyItems: 'flex-start',
          alignSelf: phoneSize ? 'center' : 'flex-start',
          fontWeight: 900,
          position: 'relative',
        }}
      >
        <Text
          style={{
            fontSize: '3rem',
            zIndex: 3,
            color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
          }}
        >
          My Skills
        </Text>
      </div>
      <Button.Group
        style={{
          alignSelf: phoneSize ? 'center' : 'flex-start',
        }}
        size={phoneSize ? 'mini' : 'large'}
      >
        <Button
          style={{
            backgroundColor:
              selected == 1 ? '#E63946' : colorScheme == 'light' ? '#335e99' : '#2C2E33',
            height: '45px',
          }}
          onClick={() => selectSkillsPage(1)}
        >
          Front-End
        </Button>
        <Button
          style={{
            backgroundColor:
              selected == 2 ? '#E63946' : colorScheme == 'light' ? '#335e99' : '#2C2E33',
            height: '45px',
          }}
          onClick={() => selectSkillsPage(2)}
        >
          Back-End
        </Button>
        <Button
          style={{
            backgroundColor:
              selected == 3 ? '#E63946' : colorScheme == 'light' ? '#335e99' : '#2C2E33',
            height: '45px',
          }}
          onClick={() => selectSkillsPage(3)}
        >
          Blockchain
        </Button>
        <Button
          style={{
            backgroundColor:
              selected == 4 ? '#E63946' : colorScheme == 'light' ? '#335e99' : '#2C2E33',
            height: '45px',
          }}
          onClick={() => selectSkillsPage(4)}
        >
          Other
        </Button>
      </Button.Group>
      <Card
        data-aos="fade-up"
        style={{
          backgroundColor: colorScheme == 'light' ? '#335e99' : '#2C2E33',
          height: phoneSize ? '70%' : '90%',
          padding: '1%',
        }}
      >
        {selected == 1 ? (
          <FrontEnd />
        ) : selected == 2 ? (
          <BackEnd />
        ) : selected == 3 ? (
          <Blockchain />
        ) : selected == 4 ? (
          <Other />
        ) : null}
      </Card>
    </div>
  );
};
export default Skills;

const Stars = (props: any) => {
  // all;
  const sL = props.starLevel;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {sL == 0 ? (
        <Text style={{ color: 'white' }}>Learning</Text>
      ) : sL < 3 && sL > 0 ? (
        <Text style={{ color: 'white' }}>Beginner</Text>
      ) : sL < 5 ? (
        <Text style={{ color: 'white' }}>Intermediate</Text>
      ) : (
        <Text style={{ color: 'white' }}>Expert</Text>
      )}

      <div style={{ display: 'flex' }}>
        <FontAwesomeIcon icon={solidStar} color="#FFF" />
        {props.starLevel > 1 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
        {props.starLevel > 2 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
        {props.starLevel > 3 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
        {props.starLevel > 4 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
      </div>
    </div>
  );
};
