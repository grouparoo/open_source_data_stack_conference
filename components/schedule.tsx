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
import { Stage, Talk } from '@lib/types';
import styles from './schedule.module.css';
import TalkCard from './talk-card';
import { scheduleForStageDays } from '@lib/schedule';

function getTimezone() {
  return new Date()
    .toLocaleDateString(undefined, { day: '2-digit', timeZoneName: 'long' })
    .substring(4);
}

function StageRow({ stage }: { stage: Stage }) {
  const dayTalks = scheduleForStageDays(stage);
  return (
    <div key={stage.name} className={styles.row}>
      <div>
        <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
          <span>{stage.name}</span>
        </h3>
        <p className={cn(styles['stage-zone'])}>
          Times are in your local timezone ({getTimezone()})
        </p>
      </div>
      <div className={cn(styles.days, styles[stage.slug])}>
        {dayTalks.map((talks: Talk[]) => (
          <div className={cn(styles.talks, styles[stage.slug])}>
            {talks.map((talk: Talk) => (
              <div key={['div', talk.title, talk.start].join(',')}>
                <TalkCard key={['card', talk.title, talk.start].join(',')} talk={talk} showTime />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allStages: Stage[];
};

export default function Schedule({ allStages }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.slug} stage={stage} />
        ))}
      </div>
    </div>
  );
}
