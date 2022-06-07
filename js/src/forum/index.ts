import app from 'flarum/forum/app';
import extendUserCard from './extend/extendUserCard';

app.initializers.add('blomstra/usercard-stats', () => {
  extendUserCard();
});
