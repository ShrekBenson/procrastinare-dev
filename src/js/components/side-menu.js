import { ShowModal } from "../utils";

const requireIcons = require.context('../../icons', false, /\.svg$/);
const icons = requireIcons.keys().map(requireIcons);
const menuOpts = {};

function setIcons() {
  icons.forEach((icon, index) => {
    const img = new Image();
    img.src = icon;
  
    const iconName = requireIcons.keys()[index].replace('./', '').replace('.svg', '');      
    const menuItem = document.querySelector(`.${iconName.trim()}`);
    menuOpts[iconName] = menuItem;

    if (menuItem) {
      menuItem.appendChild(img);
    }
  });
}

export default function sideMenu() {
  setIcons();
  menuOpts.add.addEventListener('click', () => {ShowModal(true)});
}