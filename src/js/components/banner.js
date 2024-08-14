import BannerIcon from '../../icons/banner/banner.svg';

export default function banner(type = 'task') {
  const banner = document.createElement('div');
  const bannerHeader = document.createElement('h2');
  const bannerText = document.createElement('p');
  const bannerIcon = new Image();
  
  if (type === 'task') {
    bannerHeader.textContent = 'Good! There is no task here';
    bannerText.textContent = 'Looks like you are free to do something else';
    bannerIcon.src = BannerIcon;
  } else {
    bannerHeader.textContent = 'You don\'t have any written notes here';
    bannerText.textContent = 'Why don\'t you write something to start with?';
    bannerIcon.src = BannerIcon;
  }

  banner.classList.add('banner');
  banner.appendChild(bannerHeader);
  banner.appendChild(bannerText);
  banner.appendChild(bannerIcon);

  return banner;
}