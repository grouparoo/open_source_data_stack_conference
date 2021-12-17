import Layout from './layout';
import ConfContainer from './conf-container';

import cn from 'classnames';
import styleUtils from './utils.module.css';
import heroStyles from './hero.module.css';
import descStyles from './event-description.module.css';
import formStyles from './form.module.css';
import archiveStyles from './archive-cta.module.css';
import { BRAND_NAME } from '@lib/constants';

// details of the event
const EVENT_DATE = 'Jan. 28, 2021 6pm PST';
const EVENT_TITLE = 'Data Stacks For Fun & Nonprofit';
const EVENT_PRESENTER = 'Andrew Stewart';
const EVENT_LINK = 'https://www.zoom.com/';

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

/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
        The emergence of the modern data stack has seen a rapid spike in the number of data tools an
        organization can use to drive better decision making. Each tool has become highly
        specialized in its portion of the data lifecycle, plus tools that are open source are a
        powerful way for technology buyers to reduce exposure to vendor lock-in.
      </p>
      <p>
        Open-source software helps you to control the end-to-end flow of customer data throughout
        your organization:
      </p>
      <ul>
        <li>To guarantee data auditability</li>
        <li>To allow data governance</li>
        <li>To support consumer data privacy</li>
        <li>To enable productive engineer workflows</li>
      </ul>
      <p>
        By taking ownership and control over your data pipeline through open source, you can reduce
        the “trust surface area” for your customer data.
      </p>
      <p>
        Join us at the first ever conference dedicated to building a modern data stack using open
        source data solutions.
      </p>
      <p>
        We are bringing together the building blocks of the open source data stack to demonstrate
        how teams can build a data stack that reflects their needs.
      </p>
    </div>
  );
}
