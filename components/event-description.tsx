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
import styles from './event-description.module.css';

export default function LearnMore() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-sixth'], styles.container)}>
      <h3 className={cn(styles.header)}>About the Event</h3>
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
