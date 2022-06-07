import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import UsercardStat from '../components/UsercardStat';

export default function extendUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items: ItemList<Mithril.Children>) {

    const user = this.attrs.user;

    items.add(
      'discussion-count',
      <UsercardStat
        icon="fas fa-comment"
        displayText={app.translator.trans('blomstra-usercard-stats.forum.user.discussion-count', { count: user.discussionCount() })}
      />,
      70
    );

    items.add(
      'comment-count',
      <UsercardStat
        icon="fas fa-comments"
        displayText={app.translator.trans('blomstra-usercard-stats.forum.user.post-count', { count: user.commentCount() })}
      />,
      65
    );
  });
}
