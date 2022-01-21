import Layout from './layout';
import ConfContainer from './conf-container';

import cn from 'classnames';
import styleUtils from './utils.module.css';
import heroStyles from './hero.module.css';
import descStyles from './event-description.module.css';
import formStyles from './form.module.css';
import archiveStyles from './archive-cta.module.css';

// details of the event
const EVENT_DATE = 'Feb. 16, 2022 10am PST';
const EVENT_TITLE = 'Tapestry Data Pipeline Case Study';
const EVENT_PRESENTER = 'Katherine Beck, Leah Garrison, and Adam Peterson';
const EVENT_LINK = 'https://us02web.zoom.us/webinar/register/WN_YGY7eaTFSdOcBbgSMpP6-Q';

export default function Event() {
  return (
    <Layout>
      <ConfContainer>
        <>
          <Hero />
          <Cta />
          <EventDescription />
        </>
      </ConfContainer>
    </Layout>
  );
}

function Hero() {
  return (
    <div className={heroStyles.wrapper}>
      <Subtitle mobile="show-on-mobile" />
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], heroStyles.hero)}>
        {EVENT_TITLE}
      </h1>

      <Subtitle mobile="hide-on-mobile" />
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], heroStyles.info)}>
        <p>{EVENT_DATE}</p>
        <div className={heroStyles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </div>
  );
}

function Subtitle({ mobile }: { mobile: string }) {
  return (
    <h2
      className={cn(
        styleUtils.appear,
        styleUtils['appear-third'],
        styleUtils[mobile],
        heroStyles.description
      )}
    >
      <>
        An Open Stack Data Stack Event
        <br />
        by {EVENT_PRESENTER}
      </>
    </h2>
  );
}

function Cta() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], archiveStyles.container)}>
      <a href={EVENT_LINK} type="button" className={cn(formStyles.submit, archiveStyles.button)}>
        Register now
      </a>
    </div>
  );
}

function EventDescription() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-sixth'], descStyles.container)}>
      <h3 className={cn(descStyles.header)}>About the Event</h3>
      <p>
        The Open Source Data Stack Conference is excited to invite you to its first community event.
        We’d like to experiment with shorter, focused events in between our major, likely annual
        conferences.
      </p>
      <p>
        For our first event, the team behind the{' '}
        <a
          href="https://tapestry-pipeline.github.io/case-study"
          target="_blank"
          style={{ textDecoration: 'underline' }}
        >
          Tapestry Pipeline
        </a>{' '}
        will be presenting their case study. Tapestry is an open-source orchestration framework for
        the deployment of user entity data pipelines.
      </p>
    </div>
  );
}
