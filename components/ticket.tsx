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

import cn from 'classnames';
import Tilt from 'vanilla-tilt';
import { useRef, useEffect, useState } from 'react';
import { UserData } from '@lib/hooks/use-conf-data';
import { TicketGenerationState } from '@lib/constants';
import isMobileOrTablet from '@lib/is-mobile-or-tablet';
import { scrollTo } from '@lib/smooth-scroll';
import styles from './ticket.module.css';
import formStyles from './form.module.css';
import styleUtils from './utils.module.css';
import TicketForm from './ticket-form';
import TicketVisual from './ticket-visual';
import TicketActions from './ticket-actions';
import TicketCopy from './ticket-copy';
import { DATE, SITE_NAME, ARCHIVE } from '@lib/constants';
import Form from './form';

type Props = {
  username: UserData['username'];
  ticketNumber: UserData['ticketNumber'];
  name: UserData['name'];
  sharePage?: boolean;
};

function ongoingStage() {
  if (ARCHIVE) {
    return true;
  }
  const now = Date.now();

  const monStart = Date.parse('Mon Sep 28 2021 08:46:00 GMT-0700 (Pacific Daylight Time)');
  const monEnd = Date.parse('Mon Sep 28 2021 11:00:00 GMT-0700 (Pacific Daylight Time)');

  const tuesStart = Date.parse('Tues Sep 29 2021 08:46:00 GMT-0700 (Pacific Daylight Time)');
  const tuesEnd = Date.parse('Tues Sep 29 2021 11:00:00 GMT-0700 (Pacific Daylight Time)');

  const wedStart = Date.parse('Tues Sep 30 2021 08:46:00 GMT-0700 (Pacific Daylight Time)');
  const wedEnd = Date.parse('Tues Sep 30 2021 10:30:00 GMT-0700 (Pacific Daylight Time)');

  if (now >= monStart && now <= monEnd) return true;
  if (now >= tuesStart && now <= tuesEnd) return true;
  if (now >= wedStart && now <= wedEnd) return true;
  return false;
}

export default function Ticket({ username, name, ticketNumber, sharePage }: Props) {
  const ticketRef = useRef<HTMLDivElement>(null);
  const [ticketGenerationState, setTicketGenerationState] = useState<TicketGenerationState>(
    'default'
  );
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ticketRef.current && !window.matchMedia('(pointer: coarse)').matches) {
      Tilt.init(ticketRef.current, {
        glare: true,
        max: 5,
        'max-glare': 0.16,
        'full-page-listening': true
      });
    }
  }, [ticketRef]);

  useEffect(() => {
    if (!sharePage && divRef && divRef.current && isMobileOrTablet()) {
      scrollTo(divRef.current, -30);
    }
  }, [divRef, sharePage]);

  const showStage = ongoingStage();

  return (
    <div
      className={cn(styles['ticket-layout'], {
        [styles['ticket-share-layout']]: sharePage
      })}
    >
      <div ref={divRef}>
        <div className={styles['ticket-text']}>
          <h2 className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}>
            {sharePage ? (
              name ? (
                <>{name}???s Ticket</>
              ) : (
                <>{SITE_NAME}</>
              )
            ) : ARCHIVE ? (
              <>See you then.</>
            ) : showStage ? (
              <>Welcome.</>
            ) : (
              <>
                You're in. <br /> Make it unique.
              </>
            )}
          </h2>
          <p className={cn(styles.description, styleUtils.appear, styleUtils['appear-second'])}>
            {sharePage ? (
              <>
                Join {name ?? 'them'} on {DATE}.
              </>
            ) : ARCHIVE ? (
              <>
                We will let you know. <br />
                For now, want to watch something?
              </>
            ) : showStage ? (
              <>
                Come on in. <br />
                We are glad you are here.
              </>
            ) : (
              <>
                Generate a unique ticket image with <br className={styleUtils['hide-on-mobile']} />
                your GitHub profile.
              </>
            )}
          </p>
        </div>
        <div className={cn(styleUtils.appear, styleUtils['appear-third'])}>
          {!sharePage ? (
            showStage ? (
              <a
                href="/stage/events"
                type="button"
                className={cn(formStyles.submit, styles['stage'])}
              >
                {ARCHIVE ? 'See the replay' : 'Go to the stage'}
              </a>
            ) : (
              <TicketForm
                defaultUsername={username}
                setTicketGenerationState={setTicketGenerationState}
              />
            )
          ) : (
            <Form sharePage />
          )}
        </div>
      </div>
      {!ARCHIVE && (
        <div className={styles['ticket-visual-wrapper']}>
          <div
            ref={ticketRef}
            className={cn(styles['ticket-visual'], styleUtils.appear, styleUtils['appear-fourth'])}
          >
            <TicketVisual
              username={username}
              name={name}
              ticketNumber={ticketNumber}
              ticketGenerationState={ticketGenerationState}
            />
          </div>
          {!sharePage && (
            <>
              {username ? (
                <div>
                  <div className={styles['ticket-actions']}>
                    <TicketActions username={username} />
                  </div>
                  <div className={styles['ticket-copy']}>
                    <TicketCopy username={username} />
                  </div>
                </div>
              ) : (
                <div className={styles['ticket-actions-placeholder']} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
