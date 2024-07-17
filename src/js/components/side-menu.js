export default function icons() {
  const requireIcons = require.context('../../icons', false, /\.svg$/);

  const icons = requireIcons.keys().map(requireIcons);
  icons.forEach((icon, index) => {
    const img = new Image();
    img.src = icon;
  
    const iconName = requireIcons.keys()[index].replace('./', '').replace('.svg', '');
      
    const menuItem = document.querySelector(iconName);
    if (menuItem) {
      menuItem.appendChild(img);
    }
  });  
}