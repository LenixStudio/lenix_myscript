import { User } from './types';
import { createTopSection } from './sections/topSection';
import { createBottomSection } from './sections/bottomSection';

const user: User = {
  name: 'Trippler',
  image: 'https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png'
};

function init(): void {
  const body = document.body;
  body.className = 'flex flex-col h-screen justify-between bg-gray-500';

  body.appendChild(createTopSection(user));
  body.appendChild(createBottomSection());
}

document.addEventListener('DOMContentLoaded', init);