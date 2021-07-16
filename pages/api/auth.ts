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

import { NextApiRequest, NextApiResponse } from 'next';
import { COOKIE } from '@lib/constants';
import redis from '@lib/redis';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const id = req.cookies[COOKIE];
  if (!id) {
    return res.status(401).json({
      error: {
        code: 'missing_cookie',
        message: 'Missing cookie'
      }
    });
  }

  if (redis) {
    const ticketNumberString = await redis.hget(`id:${id}`, 'ticketNumber');

    if (!ticketNumberString) {
      return res.status(401).json({
        error: {
          code: 'not_registered',
          message: 'This user is not registered'
        }
      });
    }
  }

  return res.status(200).json({ loggedIn: true });
}
