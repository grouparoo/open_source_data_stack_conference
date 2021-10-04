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

export const SITE_URL = 'https://www.opensourcedatastack.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = null; // 'twitterusername';
export const BRAND_NAME = 'Open Source Data Stack';
export const SITE_NAME_MULTILINE = ['Open Source', 'Data Stack'];
export const SITE_NAME = 'Open Source Data Stack Conference';
export const META_TITLE = SITE_NAME;
export const META_DESCRIPTION =
  'Building the modern stack with open source data solutions | Sept. 28 - 30';
export const SITE_DESCRIPTION = 'Building the modern stack with open source data solutions.';
export const DATE = 'Sept. 28 - 30 2021';
export const SHORT_DATE = 'Sept. 28 - 30';
export const FULL_DATE = SHORT_DATE; // not used?
export const TWEET_TEXT = `${SITE_DESCRIPTION} #opensourcedatastackconference`;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = ''; // 'https://legalurl';
export const COPYRIGHT_HOLDER = null;

// the conference is over. until next year...
export const ARCHIVE = true;

export const CODE_OF_CONDUCT = 'https://www.opensourcedatastack.com/OSDSConfCodeofConduct.html';
export const REPO = 'https://github.com/grouparoo/open_source_data_stack_conference';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: ARCHIVE ? 'Replay' : 'Stage',
    route: '/stage/events'
  },
  // {
  //   name: 'Schedule',
  //   route: '/schedule'
  // },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Partners',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
