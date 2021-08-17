type Props = {
  addeventId?: string;
};

export default function AddCalendars({ addeventId }: Props) {
  if (!addeventId) {
    return null;
  }
  return (
    <>
      <p
        style={{
          margin: '0px 0px 10px 0px',
          textAlign: 'center',
          fontSize: '17px',
          lineHeight: '150%',
          color: '#000',
          fontWeight: 'bold'
        }}
      >
        Add event to calendar
      </p>
      <p style={{ margin: '0px 0px 10px 0px', textAlign: 'center', fontSize: '0px' }}>
        <>
          <a
            href="https://www.addevent.com/event/bj8167877+apple"
            title="Apple"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-apple-t1.png"
              alt="Apple"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/bj8167877+google"
            title="Google"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-google-t1.png"
              alt="Google"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/bj8167877+office365"
            title="Office 365"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-office365-t1.png"
              alt="Office 365"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/bj8167877+outlook"
            title="Outlook"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-outlook-t1.png"
              alt="Outlook"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>{' '}
          <a
            href="https://www.addevent.com/event/bj8167877+outlookcom"
            title="Outlook.com"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-outlookcom-t1.png"
              alt="Outlook.com"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/bj8167877+yahoo"
            title="Yahoo"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-yahoo-t1.png"
              alt="Yahoo"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>
        </>
      </p>
    </>
  );
}
