import React from 'react';
import { FormattedMessage } from 'react-intl';

import LandingPagesLayout from 'views/layouts/LandingPages';

import useContainer, { getInitialProps } from './hook';

const PrivacyPolicy = () => {
  const { htmlString, titles } = useContainer();

  return (
    <section className="terms">
      <div className="terms__container">
        <div className="terms__content">
          <div className="terms__column" dangerouslySetInnerHTML={{ __html: htmlString }} />
          <div className="terms__navigation">
            <h3 className="terms__item-title mb-24 mt-76">
              <FormattedMessage id="shared.tableOfContents" />
            </h3>
            <div className="terms__group">
              <ol className="terms__anchor-list">
                {titles.map(({ id, text }, index) => (
                  <li key={id} className="terms__anchor-item">
                    <a href={`#${id}`} className="terms__anchor-link">
                      {`${index + 1}. ${text}`}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PrivacyPolicy.getInitialProps = getInitialProps;

PrivacyPolicy.Layout = LandingPagesLayout;

export default PrivacyPolicy;
