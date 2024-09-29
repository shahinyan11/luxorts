import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';

import ROUTES from 'constants/routes';
import { LISTING_PATH_BY_STATUS, LISTING_STATUS, LISTING_STEP_STATUS } from 'constants/listing';

import { createRoute } from 'utils/createRouteHelpers';

import useImmutableCallback from 'hooks/useImmutableCallback';
import useAntdDropdownVisible from 'hooks/useAntdDropdownVisible';

import { showModal } from 'state/modal/actions';

function useContainer({ id, status, stepStatus }) {
  const dispatch = useDispatch();
  const [visible, onVisibilityChangeHandler, setVisible] = useAntdDropdownVisible();

  const isFinished = stepStatus === LISTING_STEP_STATUS.FINISHED;
  const isFinishedDraft = isFinished && status === LISTING_STATUS.IN_DRAFT;

  /**
   * On unpublish menu item click handler
   */
  const onUnpublish = useImmutableCallback(() => {
    dispatch(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.unpublish.title' },
          subtitle: { id: 'listing.status.modal.unpublish.subtitle' },
          description: { id: 'listing.status.modal.unpublish.description' },
          confirmBtnText: { id: 'shared.unpublish' },
          id,
          status: LISTING_STATUS.UNPUBLISHED,
        },
      }),
    );

    setVisible(false);
  });

  /**
   * On publish menu item click handler
   */
  const onPublish = useCallback(() => {
    dispatch(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.publish.title' },
          subtitle: { id: 'listing.status.modal.publish.subtitle' },
          description: { id: 'listing.status.modal.publish.description' },
          confirmBtnText: { id: 'shared.publish' },
          id,
          status: isFinishedDraft ? LISTING_STATUS.ON_MODERATION : LISTING_STATUS.PUBLISHED,
        },
      }),
    );

    setVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinishedDraft]);

  /**
   * On republish menu item click handler
   */
  const onRepublish = useImmutableCallback(() => {
    dispatch(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.republish.title' },
          subtitle: { id: 'listing.status.modal.republish.subtitle' },
          description: { id: 'listing.status.modal.republish.description' },
          confirmBtnText: { id: 'shared.republish' },
          id,
          status: LISTING_STATUS.ON_MODERATION,
        },
      }),
    );

    setVisible(false);
  });

  /**
   * Calculate edit item
   * @type {{label, key: string}}
   */
  const editItem = useMemo(() => {
    const pathname = isFinished
      ? ROUTES.DASHBOARD.LISTINGS.PROPERTY_TYPE.PATH
      : LISTING_PATH_BY_STATUS[stepStatus];

    return {
      key: 'shared.edit',
      label: (
        <Link href={createRoute({ pathname, id })}>
          <a>
            {isFinished && <FormattedMessage id="shared.edit" />}
            {!isFinished && <FormattedMessage id="shared.finishYourListing" />}
          </a>
        </Link>
      ),
    };
  }, [id, isFinished, stepStatus]);

  /**
   * On remove menu item click handler
   */
  const onRemove = useImmutableCallback(() => {
    dispatch(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.remove.title' },
          subtitle: { id: 'listing.status.modal.remove.subtitle' },
          description: { id: 'listing.status.modal.remove.description' },
          confirmBtnText: { id: 'shared.remove' },
          confirmBtnProps: { variant: 'warning' },
          id,
          status: LISTING_STATUS.DELETED,
        },
      }),
    );

    setVisible(false);
  });

  // calculate available actions by status
  const actions = useMemo(() => {
    const items = [];

    if (status === LISTING_STATUS.BLOCKED) {
      items.push({
        key: 'shared.republish',
        label: <FormattedMessage id="shared.republish" />,
        onClick: onRepublish,
      });
    }

    if (status === LISTING_STATUS.PUBLISHED) {
      items.push({
        key: 'shared.unpublish',
        label: <FormattedMessage id="shared.unpublish" />,
        onClick: onUnpublish,
      });
    }

    if (status === LISTING_STATUS.UNPUBLISHED || isFinishedDraft) {
      items.push({
        key: 'shared.publish',
        label: <FormattedMessage id="shared.publish" />,
        onClick: onPublish,
      });
    }

    items.push(editItem);

    if (isFinished) {
      items.push({
        key: 'shared.viewCalendar',
        label: (
          <Link href={createRoute({ pathname: ROUTES.DASHBOARD.LISTINGS.AVAILABILITY.PATH, id })}>
            <a>
              <FormattedMessage id="shared.viewCalendar" />
            </a>
          </Link>
        ),
      });
    }

    items.push({
      key: 'shared.preview',
      label: (
        <Link href={createRoute({ pathname: ROUTES.LISTING.PATH, id })}>
          <a>
            <FormattedMessage id="shared.preview" />
          </a>
        </Link>
      ),
    });

    if (
      [
        LISTING_STATUS.UNPUBLISHED,
        LISTING_STATUS.IN_DRAFT,
        LISTING_STATUS.BLOCKED,
        LISTING_STATUS.ON_MODERATION,
      ].includes(status)
    ) {
      items.push({
        key: 'shared.remove',
        label: <FormattedMessage id="shared.remove" />,
        onClick: onRemove,
      });
    }

    return items;
  }, [
    editItem,
    id,
    isFinished,
    isFinishedDraft,
    onPublish,
    onRemove,
    onRepublish,
    onUnpublish,
    status,
  ]);

  return {
    visible,
    actions,
    onVisibilityChangeHandler,
    onPublish,
    onRepublish,
    onRemove,
    onUnpublish,
    setVisible,
  };
}

export default useContainer;
