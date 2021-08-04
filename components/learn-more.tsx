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
import styleUtils from './utils.module.css';
import styles from './contact.module.css';
import { CODE_OF_CONDUCT } from '@lib/constants';

export default function LearnMore() {
  // copy here to learn more or put below the hero if necessary.
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      {CODE_OF_CONDUCT && (
        <>
          By registering, you agree to our{' '}
          <a href={CODE_OF_CONDUCT} target="_blank" rel="noopener noreferrer">
            terms and code of conduct.
          </a>
        </>
      )}
    </div>
  );
}
