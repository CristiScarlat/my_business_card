import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="d-flex flex-wrap text-center">
        <div className="ms-3 mt-2">
          <h1>Cristian Scarlat</h1>
          <h3>Software developer </h3>
          <h4 className="text-secondary">Timişoara, Timiş, Romania</h4>
          <div>
            <a
              href="https://github.com/CristiScarlat"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                style={{ height: "1.5rem", width: "1.5rem" }}
                className="me-3"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-scarlat-6839a942"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin style={{ height: "1.5rem", width: "1.5rem" }} />
            </a>
          </div>
        </div>
        <img src="images/me.jpeg" alt="me" className={styles.photo} />
      </div>
      <hr />
      <section>
        <article>
          <h3 id="summary">Summary</h3>
          <p>
            I am a highly motivated web developer, with a background in
            software and electrical engineering. I am very much in love with
            software development and I love to be involved in any project that
            needs javascript, NodeJS knowledge and frontend specific work. I consider my
            self an experienced web developer trained in HTML5, CSS3, javascript,
            SASS, Webpack, ReactJs, Redux, Context API, Express. Web development is my
            hobby today, and it is a means to continue my love for
            microcontrollers programming in IoT projects, where my
            microcontroller knowledge and Web development knowledge are merged.
          </p>
        </article>
        <hr />
        <h3 id="experience">Experience</h3>
        <article className="mt-5">
          <div>
            <h4>Software Development Academy</h4>
            <h5>Javascript and React Trainner</h5>
            <h5 className="text-secondary">
              June 2021 - Present (1 year 7 months)
            </h5>
          </div>
          <p>
            My job is to teach Javascript and ReactJS in a live coding training,
            to lead students in building there own projects, debug together with
            them and to help them build there own portfolio.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>Ness Digital Engineering</h4>
            <h5>NodeJS, ReactJS developer</h5>
            <h5 className="text-secondary">July 2021 - June 2022 (1 year)</h5>
          </div>
          <p>
            Developing ui using React JS in a close communication with business
            owners and ui/ux designers.Helping with small tasks in backend, in
            an aws infrastucter.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>Everseen</h4>
            <h5>NodeJS, ReactJS developer</h5>
            <h5 className="text-secondary">
              April 2020 - June 2021 (1 year 3 months)
            </h5>
          </div>
          <p>
            Developing React apps for internal APIs, in close communication with
            the design team.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>Cognizant Softvision</h4>
            <h5>NodeJS, ReactJS developer</h5>
            <h5 className="text-secondary">
              October 2018 - April 2020 (1 year 7 months)
            </h5>
          </div>
          <p>
            Collaborate with back-end developers and web designers to improve
            usability, write functional requirement documents and guides and
            create quality mockups and prototypes. Help back-end developers with
            coding, troubleshooting and API definitions, ensure high quality
            graphic standards and brand consistency. Overseeing the activities
            of the less experienced team members or other colleagues and work
            closely with the software engineering team, Product Management and
            Technical Operations as well as business users and Senior
            Management, as required.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>3Pillar Global Romania</h4>
            <h5>NodeJS, ReactJS developer</h5>
            <h5 className="text-secondary">
              June 2017 - October 2018 (1 year 5 months)
            </h5>
          </div>
          <p>
            Developing frontend apps using React.JS and Redux for state
            management, in close communication with the design team. Participate
            in the entire application lifecycle, focusing on coding and
            debugging Write clean code to develop functional web applications
            Troubleshoot and debug applications Manage cutting-edge technologies
            to improve legacy applications Build reusable code and libraries for
            future use Liaise with developers, designers and system
            administrators to identify new features Follow emerging technologies
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>Meta Engineering Solutions</h4>
            <h5>Embedded Engineer</h5>
            <h5 className="text-secondary">
              December 2016 - June 2017 (7 months)
            </h5>
          </div>
          <p>Same job as He-Solutions.</p>
        </article>
        <article className="mt-5">
          <div>
            <h4>HE SOLUTIONS SRL</h4>
            <h5>Embedded Engineer</h5>
            <h5 className="text-secondary">
              June 2014 - November 2016 (2 years 6 months)
            </h5>
          </div>
          <p>
            The main job here was to develop full custom projects, beginning
            with hardware development, pcb layout and small programs using ANSI
            C for ATmega microcontrollers from ATMEL, using communications
            specific like I2C, SPI, UART . This was the perfect opportunity to
            develop my skills as a programmer and also, it was a good
            opportunity to write code for low level layer, working with hardware
            timers, interrupts and memory management directly. Also, most of the
            job required hardware knowledge, schematic and pcb read and
            understand or design/ modify.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>HELLA</h4>
            <h5>Automation Technician</h5>
            <h5 className="text-secondary">
              September 2013 - June 2014 (10 months)
            </h5>
          </div>
          <p>
            This was a short period of 6 month when I worked as automation
            specialist for Hella Timisoara. My job was to develop small SIEMENS
            TIA PORTAL S7 PLC programmes and Siemens Logo automation systems for
            different sections of production line.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>Fuji Machine Mfg. (Europe) GmbH</h4>
            <h5>Automation Technician</h5>
            <h5 className="text-secondary">
              January 2005 - September 2013 (8 years 9 months)
            </h5>
          </div>
          <p>
            Fuji Machine Mfg. (Europe) GmbH is one of the powerful industrial
            SMT robots manufacturer in the world. I was hired in this company in
            2005 and worked for it for 8 years. My job as a service engineer was
            to maintain a 24 h hotline technical customer support, service and
            maintenance. Support FujiTrax and FujiFlexa software, NXT 2 , SMT
            industrial Robot. Working for this company for a period of 8 years
            was a great opportunity to learn and understand the field of
            industrial robotics. I learn PLC programming, electro-mechanical
            systems, pneumatic systems and electronics. Also, during these 8
            years , I started working with Microchip 8bit microcontrollers,
            programming different embedded designs using ASM and ANSI C
            languages. At the end of this period I was familiar with the
            industrial automation and programming of the microcontrollers and
            started to be very interested in FIRMWARE design.
          </p>
        </article>
        <article className="mt-5">
          <div>
            <h4>Comandor.srl</h4>
            <h5>Electronic Technician</h5>
            <h5 className="text-secondary">
              November 1997 - January 2005 (7 years 3 months)
            </h5>
          </div>
          <p>
            This was my first job, I started working in this company in 1997 as
            an electronic technician. My job was to repair the electronic
            equipment, in the field. The company is a well known Romanian brand
            selling security and automation systems. As a field service
            technician I had the opportunity to learn how to debug the hardware
            and repair, in the field.
          </p>
        </article>
        <hr />
        <h3 id="education">Education</h3>
        <article className="mt-5">
          <div>
            <h4>Universitatea din Oradea</h4>
            <h5>{`Bachelor’s Degree (Univ. Tehinca Oradea), IT software`}</h5>
            <a href="https://ieti.uoradea.ro/ro/" target="_blank" rel="noreferrer">
              https://ieti.uoradea.ro/ro/
            </a>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
