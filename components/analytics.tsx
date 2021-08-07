/* eslint-disable @typescript-eslint/no-unsafe-call */
import { SITE_URL } from '@lib/constants';

const GoogleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

export function analyticsPageView(path: string) {
  const windowobj: any = globalThis;
  if (GoogleAnalyticsTrackingID && windowobj?.gtag) {
    windowobj.gtag('config', GoogleAnalyticsTrackingID, {
      page_path: path,
      page_location: `${SITE_URL}${path}`,
      page_title: window?.document?.title
    });
  }
}

export function analyticsRegistration(): void {
  const windowobj: any = globalThis;
  if (GoogleAnalyticsTrackingID && windowobj?.gtag) {
    windowobj.gtag('event', 'registration', {
      event_callback: () => {}
    });
  }
}

export function AnalyticsHead() {
  if (!GoogleAnalyticsTrackingID) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsTrackingID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GoogleAnalyticsTrackingID}', {
                      page_path: window.location.pathname
                    });
                  `
        }}
      />
    </>
  );
}
