"use client"
import { useState } from "react";
import Button from '@components/Button/Button';
import styles from './page.module.scss';
import { useTranslation } from '@app/i18n';
import clsx from 'clsx';
import { Trans } from 'react-i18next/TransWithoutContext'
import { useRouter } from 'next/navigation';

function DepartmentManagerDataWrapper() {
  const [departmentManagerData, setDepartmentManagerData] = useState({
    departmentManagerName: "",
    departmentManagerRole: "",
  });
  fetch("http://localhost:1337/api/projects/1")
    .then((response) => response.json())
    .then((responseJSON) => {
      setDepartmentManagerData({
        departmentManagerName:
          responseJSON.data?.attributes?.departmentManagerName,
        departmentManagerRole:
          responseJSON.data?.attributes?.departmentManagerRole,
      });

    });
  return (
    <div>
      <div>{`${departmentManagerData?.departmentManagerName}`}</div>
      <div>{`${departmentManagerData?.departmentManagerRole}`}</div>
    </div>
  );
}

const Page = async ({ params: { lng } }) => {
    const router = useRouter()
    const { t } = await useTranslation(lng);

    const titleClasses = clsx(styles.header, 'title');
    const conatainerClasses = clsx(styles.container, 'container');
    const handleRoute = () => {
        router.push('/questionaire')
    }
    return (
      <div className={conatainerClasses}>
        <h2 className={titleClasses}>{t("pages.before.hello")}</h2>
        <div className={styles.info}>
          <p>
            <Trans i18nKey="pages.before.paragraph_first" t={t}>
              Switch from <strong>{{ lng }}</strong> to {""}
            </Trans>
          </p>
          <p>{t("pages.before.paragraph_second")}</p>
          <p>{t("pages.before.paragraph_three")}</p>
        </div>

        <div className={styles.list}>
          <p>{t("pages.before.paragraph_four")}</p>
          <ul>
            <li>{t("pages.before.ulOne")}</li>
            <li>{t("pages.before.ulTwo")}</li>
            <li>{t("pages.before.ulThree")}</li>
            <li>{t("pages.before.ulFour")}</li>
          </ul>
        </div>

        <div className={styles.end}>
          <p>{t("pages.before.textFive")}</p>
          <p>{t("pages.before.textSix")}</p>
          <p>{t("pages.before.textEight")}</p>
        </div>

        <div className={styles.manager}>
          <div className={styles.sideImage} />
          <DepartmentManagerDataWrapper />
          <Button mode="tertiary" onClick={handleRoute}>
            {t("global.start")}
          </Button>
        </div>
      </div>
    );
}

export default Page;