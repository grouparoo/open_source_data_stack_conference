import styles from './add-calendars.module.css';

type Props = {
  addeventId?: string;
};

export default function AddCalendars({ addeventId }: Props) {
  if (!addeventId) {
    return null;
  }
  return (
    <div className={styles.container}>
      <p className={styles.cta}>Add event to calendar</p>
      <p className={styles.buttons}>
        <>
          <a
            href={`https://www.addevent.com/event/${addeventId}+apple`}
            title="Apple"
            target="_blank"
            className={styles.buttonLink}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-apple-t1.png"
              alt="Apple"
              width="45"
              height="45"
              className={styles.buttonImage}
            />
          </a>
          <a
            href={`https://www.addevent.com/event/${addeventId}+google`}
            title="Google"
            target="_blank"
            className={styles.buttonLink}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-google-t1.png"
              alt="Google"
              width="45"
              height="45"
              className={styles.buttonImage}
            />
          </a>
          <a
            href={`https://www.addevent.com/event/${addeventId}+office365`}
            title="Office 365"
            target="_blank"
            className={styles.buttonLink}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-office365-t1.png"
              alt="Office 365"
              width="45"
              height="45"
              className={styles.buttonImage}
            />
          </a>
          <a
            href={`https://www.addevent.com/event/${addeventId}+outlook`}
            title="Outlook"
            target="_blank"
            className={styles.buttonLink}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-outlook-t1.png"
              alt="Outlook"
              width="45"
              height="45"
              className={styles.buttonImage}
            />
          </a>
          <a
            href={`https://www.addevent.com/event/${addeventId}+outlookcom`}
            title="Outlook.com"
            className={styles.buttonLink}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-outlookcom-t1.png"
              alt="Outlook.com"
              width="45"
              height="45"
              className={styles.buttonImage}
            />
          </a>
          <a
            href={`https://www.addevent.com/event/${addeventId}+yahoo`}
            title="Yahoo"
            target="_blank"
            className={styles.buttonLink}
          >
            <img
              src="https://www.addevent.com/gfx/icon-emd-share-yahoo-t1.png"
              alt="Yahoo"
              width="45"
              height="45"
              className={styles.buttonImage}
            />
          </a>
        </>
      </p>
    </div>
  );
}
