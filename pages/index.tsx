import { SkipNavContent } from '@reach/skip-nav';
import Page from '@components/page';
import EventContent from '@components/event';
import { META_DESCRIPTION, META_TITLE } from '@lib/constants';

export default function Conf() {
  const meta = {
    title: META_TITLE,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <EventContent />
    </Page>
  );
}
