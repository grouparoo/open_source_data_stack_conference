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
export const TWITTER_USER_NAME = 'TODO';
export const BRAND_NAME = 'Open Source Data Stack';
export const SITE_NAME_MULTILINE = ['Open Source', 'Data Stack'];
export const SITE_NAME = 'Open Source Data Stack Conference';
export const META_DESCRIPTION =
  'A week of talks about leading open source data solutions | Sept. 27 - Oct. 1';
export const SITE_DESCRIPTION = 'A week of talks about leading open source data solutions.';
export const DATE = 'Sept. 27 - Oct. 1';
export const SHORT_DATE = 'Sept. 27 - Oct. 1 @ 10:00am PST';
export const FULL_DATE = SHORT_DATE; // not used?
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = null; // 'https://legalurl';
export const COPYRIGHT_HOLDER = null;

export const CODE_OF_CONDUCT = null; //'https://codeofconducturl';
export const REPO = 'https://github.com/grouparoo/open_source_data_stack_conference';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Stage A',
    route: '/stage/a'
  },
  {
    name: 'Stage C',
    route: '/stage/c'
  },
  {
    name: 'Stage E',
    route: '/stage/e'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
