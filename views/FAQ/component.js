import Link from 'next/link';
import { Tabs } from 'antd';
import { FormattedMessage } from 'react-intl';

import ROUTES from 'constants/routes';
import { FAQ_TABS, FAQ_TABS_QUESTIONS } from 'constants/landings';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import LandingPagesLayout from 'views/layouts/LandingPages';

import QuestionCard from './QuestionCard';

const { TabPane } = Tabs;

const FAQ = () => {
  const formattedOrRawMessage = useFormattedOrRawMessage();

  return (
    <section className="faq">
      <div className="faq__head pt-40 pt-md-80 pb-40 pb-md-80 text-align-center">
        <h1 className="faq__title mb-8">
          <FormattedMessage id="faq.title" />
        </h1>
        <p className="faq__description mb-0">
          <FormattedMessage id="faq.description" />
        </p>
      </div>
      <div className="faq__content question mt-32 mt-md-60 mb-40 mb-md-80">
        <Tabs defaultActiveKey="1" className="w-100">
          {FAQ_TABS.map(({ title, id, questions }) => (
            <TabPane tab={formattedOrRawMessage(title)} key={id}>
              <div className="question__content pt-16">
                <ul className="question__list mb-40">
                  {questions.map((questionKey) => (
                    <QuestionCard {...FAQ_TABS_QUESTIONS[questionKey]} key={questionKey} />
                  ))}
                </ul>
                <Link href="#">
                  <a className="main-btn main-btn--secondary min-width-160">
                    <FormattedMessage id="faq.browseAllTopics" />
                  </a>
                </Link>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
      <div className="faq__footer pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="faq__column">
          <h2 className="faq__subtitle mb-8">
            <FormattedMessage id="faq.notFindingWhatYouNeed" />
          </h2>
          <p className="faq__text mb-0">
            <FormattedMessage id="faq.findCategorySpecificContent" />
          </p>
        </div>
        <Link href={ROUTES.CONTACT_US.PATH}>
          <a className="main-btn main-btn--primary min-width-140">
            <FormattedMessage id="shared.contactUs" />
          </a>
        </Link>
      </div>
    </section>
  );
};

FAQ.Layout = LandingPagesLayout;

export default FAQ;
