import React from 'react';
import { FormattedMessage } from 'react-intl';

import LandingPagesLayout from 'views/layouts/LandingPages';

import useContainer, { getInitialProps } from './hook';

const Terms = () => {
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
            {titles.map(({ id, text, children }) => (
              <div key={id} className="terms__group">
                <h5 className="terms__group-title">{text}</h5>
                <ol className="terms__anchor-list">
                  {children.map((subtitle, index) => (
                    <li key={subtitle.id} className="terms__anchor-item">
                      <a href={`#${subtitle.id}`} className="terms__anchor-link">
                        {`${index + 1}. ${subtitle.text}`}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Terms.getInitialProps = getInitialProps;

Terms.Layout = LandingPagesLayout;

export default Terms;
