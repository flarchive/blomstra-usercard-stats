import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import UsercardStat from '../components/UsercardStat';

export default function extendUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items: ItemList<Mithril.Children>) {
    // Only required until https://github.com/flarum/framework/pull/3436
    // Remove 1.4
    if (items.has('lastSeen')) items.setPriority('lastSeen', 100);
    if (items.has('joined')) items.setPriority('joined', 90);

    // Required until the relevant extensions are updated to set priorities
    // fof/gamification
    if (items.has('points')) items.setPriority('points', 50);
    // fof/best-answer
    if (items.has('best-answer-count')) items.setPriority('best-answer-count', 55);

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
