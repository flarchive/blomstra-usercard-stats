import type Mithril from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import extract from 'flarum/common/utils/extract';
import icon from 'flarum/common/helpers/icon';

export interface UsercardStatAttrs extends ComponentAttrs {
  icon: string;
  displayText: string;
}

export default class UsercardStat<T extends UsercardStatAttrs = UsercardStatAttrs> extends Component<T> {
  view(vnode: Mithril.Vnode) {
    const attrs = Object.assign({}, this.attrs);

    const iconClass = extract(attrs, 'icon');
    const displayText = extract(attrs, 'displayText');

    return (
      <div className="userStat">
        {icon(iconClass)}
        {displayText}
      </div>
    );
  }
}
