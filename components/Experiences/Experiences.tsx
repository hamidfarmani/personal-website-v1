import { Container, List, Tabs, Text, Title, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useExperiencesStyles } from "./useExperiencesStyles";
import viaplay from "./logos/viaplay.png";
import segula from "./logos/segula.png";
import gsm from "./logos/gsm.png";
import wirelesscar from "./logos/wirelesscar.png";
import eg from "./logos/eg.png";
import golestan from "./logos/golestan.png";
import avihang from "./logos/avihang.png";

export function Experiences() {
  const largeScreen = useMediaQuery("(min-width: 60em)");

  const { classes } = useExperiencesStyles();

  return (
    <div className={classes.wrapper} id="experiences">
      <Container className={classes.inner}>
        <Title mb="xs">
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Experiences
          </Text>
        </Title>

        <Text color="dimmed">
          My professional journey has been filled with diverse experiences in
          various companies. From product and industrial development to real
          estate crowdfunding, I have gained valuable skills in Java, Spring
          Boot, React, and more. Below are some of the companies I have had the
          privilege to work with, along with a brief description of my
          responsibilities and the skills I utilized. Take a closer look and
          discover how I can contribute to your organization.
        </Text>
        <Tabs
          mt="md"
          variant={largeScreen ? "outline" : "pills"}
          defaultValue="Viaplay"
          orientation={largeScreen ? "vertical" : "horizontal"}
        >
          <Tabs.List>
            <Tabs.Tab
              className={classes.tabs}
              value="Viaplay"
              icon={<Image src={viaplay.src} width="1.5rem" />}
            >
              Viaplay Group
            </Tabs.Tab>
            <Tabs.Tab
              className={classes.tabs}
              value="SegulaTechnologies"
              icon={<Image src={segula.src} width="1.5rem" />}
            >
              Segula Technologies
            </Tabs.Tab>
            <Tabs.Tab
              className={classes.tabs}
              value="GSM"
              icon={<Image src={gsm.src} width="1.5rem" />}
            >
              GSM Electric
            </Tabs.Tab>
            <Tabs.Tab
              className={classes.tabs}
              value="WirelessCar"
              icon={<Image src={wirelesscar.src} width="1.5rem" />}
            >
              WirelessCar
            </Tabs.Tab>
            <Tabs.Tab
              className={classes.tabs}
              value="EstateGuru"
              icon={<Image src={eg.src} width="1.5rem" />}
            >
              EstateGuru
            </Tabs.Tab>
            <Tabs.Tab
              className={classes.tabs}
              value="Golestan"
              icon={<Image src={golestan.src} width="1.5rem" />}
            >
              Golestan University
            </Tabs.Tab>
            <Tabs.Tab
              className={classes.tabs}
              value="Avihang"
              icon={<Image src={avihang.src} width="1.5rem" />}
            >
              Avihang
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Viaplay" className={classes.tabInner}>
            <Title pb="xs">Viaplay Group</Title>
            <Text pb="xs" size="sm" fs="italic">
              Viaplay Group AB, formerly known as Nordic Entertainment Group AB,
              is a Swedish media and entertainment company headquartered in
              Stockholm. The company operates the video streaming services
              Viaplay, advertising-funded TV and radio channels, as well as the
              studio production company Viaplay Studios.
            </Text>
            {/* <List pb="xs" size="lg">
              <List.Item>
                Designed and launched an inhouse-project which was an assignment
                collector that gathers opportunities from various portals,
                enabling employees to browse and apply for new assignments and
                inform their managers online.
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, Spring boot, Azure, MySql, CI/CD The customers that
              I worked for as a consultant were WirelessCar and GSM electric.
            </Text> */}
          </Tabs.Panel>
          <Tabs.Panel value="SegulaTechnologies" className={classes.tabInner}>
            <Title pb="xs">Segula Technologies</Title>
            <Text pb="xs" size="sm" fs="italic">
              Segula Technologies is a consultant agency which main areas of
              competence are product and industrial development, including SW
              Engineering & Electronics, Mechanical Engineering and Project
              Management.
            </Text>
            <List pb="xs" size="lg">
              <List.Item>
                Designed and launched an inhouse-project which was an assignment
                collector that gathers opportunities from various portals,
                enabling employees to browse and apply for new assignments and
                inform their managers online.
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, Spring boot, Azure, MySql, CI/CD The customers that
              I worked for as a consultant were WirelessCar and GSM electric.
            </Text>
          </Tabs.Panel>
          <Tabs.Panel value="GSM" className={classes.tabInner}>
            <Title pb="xs">GSM Electric</Title>
            <Text pb="xs" size="sm" fs="italic">
              GSM electric is responsible for electrifying boats. Their web
              application allows customers to configure and modify their boats
              behavior and interact with it.
            </Text>
            <List pb="xs" size="lg">
              <List.Item>
                Providing a convenient interface for electric boat owners to
                access features such as charging, speed, and navigation
              </List.Item>
              <List.Item>
                Improved code efficiency and reliability by refactoring
                class-based components and implementing best practices
              </List.Item>
              <List.Item>
                Dockerized the application,resulting in improved efficiency and
                portability
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, Spring boot, React, MySQL, Docker, BitBucket, CI/CD,
              HTML, CSS, JS
            </Text>
          </Tabs.Panel>
          <Tabs.Panel value="WirelessCar" className={classes.tabInner}>
            <Title pb="xs">WirelessCar</Title>
            <Text pb="xs" size="sm" fs="italic">
              WirelessCar has been fulfilling the link between the automotive
              industry and the world of telecom technology, and create a one
              stop shop for mobile e-services for vehicles.
            </Text>
            <List pb="xs" size="lg">
              <List.Item>
                Designed and developed multiple serverless cloud microservices
                from the ground up to deliver a reliable solution
              </List.Item>
              <List.Item>
                Established a multi-stage CI/CD pipeline, leading to the
                successful deployment of the application to production
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, Micronaut, AWS, CI/CD, Git, JUnit, AssertJ, Maven
            </Text>
          </Tabs.Panel>
          <Tabs.Panel value="EstateGuru" className={classes.tabInner}>
            <Title pb="xs">EstateGuru</Title>
            <Text pb="xs" size="sm" fs="italic">
              EstateGuru is a European Real Estate Crowdfunding platform based
              in Estonia, that mainly funds property loans to businesses.
            </Text>
            <List pb="xs" size="lg">
              <List.Item>
                Led the migration of the core system’s user onboarding process
                to Authentication server and User service microservices
              </List.Item>
              <List.Item>
                Implemented an auto-create duty of disclosure feature,reducing
                the workload of loan managers by 30 percent
              </List.Item>
              <List.Item>
                Developed and launched a wholly redesigned statistics page,
                providing more robust and accurate data
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, Spring boot, Microservices, Grails, Groovy, AWS,
              HTML, CSS, JS
            </Text>
          </Tabs.Panel>
          <Tabs.Panel value="Golestan" className={classes.tabInner}>
            <Title pb="xs">Golestan University</Title>
            <Text pb="xs" size="sm" fs="italic">
              Golestan University is a major institute of higher education
              located in Gorgan, a large city bordering the Caspian Sea, in
              north-eastern Iran. They assign projects to some of their students
              or graduates in different fields of each faculty. Online
              scheduler, agriculture-related projects, programming contests web
              application, robotics-based projects and … are some examples of
              their projects.
            </Text>
            <List pb="xs" size="lg">
              <List.Item>
                Developed a week scheduler web application for five educational
                groups in the faculty, significantly increasing efficiency
                through a 60% reduction in rework
              </List.Item>
              <List.Item>
                Set up a server environment from the ground up to accommodate
                customer needs
              </List.Item>
              <List.Item>
                Enhanced educational agriculture applications by integrating
                customerinput into product features
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, Spring boot, Angular, JSF, MySQL, MongoDB, HTML,
              CSS, JS
            </Text>
          </Tabs.Panel>
          <Tabs.Panel value="Avihang" className={classes.tabInner}>
            <Title pb="xs">Avihang</Title>
            <Text pb="xs" size="sm" fs="italic">
              Avihang Co. started in 2013 with the aim of expanding its
              infrastructure and software systems in national projects, and has
              succeeded in making major strides in creating and deploying
              software systems throughout its operations. They have developed
              multiple national projects in insurance and social welfare in
              Iran.
            </Text>
            <List pb="xs" size="lg">
              <List.Item>
                Developed and maintained a Test Management System to streamline
                the testing process and ensured efficient test flow control
              </List.Item>
              <List.Item>
                Designed comprehensive test plans and wrote and executed
                automation scripts using Jmeterto validate system functionality
                and performance for 1.5 years when served as a test engineer on
                three national projects
              </List.Item>
            </List>

            <Text pb="xs" c="dimmed">
              Skills: Java, JSF, MySQL, Black/white Box testing, Jmeter, HTML,
              CSS, JS
            </Text>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}
