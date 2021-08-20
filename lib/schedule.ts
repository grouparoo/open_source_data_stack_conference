/* eslint-disable @typescript-eslint/no-unsafe-return */
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

import { Stage, Talk } from '@lib/types';
import { format, parseISO } from 'date-fns';

export function scheduleForStage(stage: Stage | undefined): Talk[] {
  // Group talks by the time block
  const schedule = stage?.schedule;
  if (!schedule) {
    return [];
  }
  const timeBlocks = schedule.reduce((allBlocks: any, talk) => {
    const date = parseISO(talk.start);
    const talkKey = date.getTime();
    allBlocks[talkKey] = [...(allBlocks[talkKey] || []), talk];
    return allBlocks;
  }, {});
  let out: Talk[] = [];

  Object.keys(timeBlocks)
    .sort()
    .forEach(key => {
      out = out.concat(timeBlocks[key]);
    });
  return out;
}

export function scheduleForStageDays(stage: Stage | undefined): Talk[][] {
  // Group talks by the day and time block
  const schedule = stage?.schedule;
  if (!schedule) {
    return [];
  }
  const dayBlocks = schedule.reduce((allBlocks: any, talk) => {
    const date = parseISO(talk.start);
    const dateKey = format(date, 'yyyyMMdd');
    const talkKey = date.getTime();
    allBlocks[dateKey] = allBlocks[dateKey] || [];
    allBlocks[dateKey][talkKey] = [...(allBlocks[dateKey][talkKey] || []), talk];
    return allBlocks;
  }, {});
  const days: Talk[][] = [];

  Object.keys(dayBlocks)
    .sort()
    .forEach(dKey => {
      const timeBlocks = dayBlocks[dKey];
      let out: Talk[] = [];
      Object.keys(timeBlocks)
        .sort()
        .forEach(tKey => {
          out = out.concat(timeBlocks[tKey]);
        });
      days.push(out);
    });
  return days;
}
