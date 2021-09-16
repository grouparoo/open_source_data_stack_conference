/**
 * Status endpoint
 */

import { NextApiRequest, NextApiResponse } from 'next';
import redis from '@lib/redis';
import { getAllStages } from '@lib/cms-api';

export default async function getStatus(_: NextApiRequest, res: NextApiResponse) {
  try {
    await checkRedis();
    await checkCms();
    return res.status(200).json({ status: 200, success: true });
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e);

    return res.status(500).json({
      status: 500,
      success: false,
      failed: e.failed || 'other',
      error: e.message
    });
  }
}

async function checkRedis() {
  // make sure can connect to redis
  try {
    if (redis) {
      await redis.get('count');
    }
  } catch (e: any) {
    e.failed = 'redis';
    throw e;
  }
}

async function checkCms() {
  // make sure can connect to cms
  try {
    await getAllStages();
  } catch (e: any) {
    e.failed = 'cms';
    throw e;
  }
}
