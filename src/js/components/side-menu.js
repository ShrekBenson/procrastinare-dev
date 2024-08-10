import { SetNotes, SetTaskList, ShowModal } from "../utils";

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

function addHandler() {
  ShowModal(true);
}

function inboxHandler() {
  SetTaskList();
}

function todayHandler() {
  SetTaskList('today');
}

function nextWeekHandler() {
  SetTaskList('next-week');
}

function notesHandler() {  
  SetNotes();
}

export default function sideMenu() {
  setIcons();
  menuOpts['add'].removeEventListener('click', addHandler);
  menuOpts['inbox'].removeEventListener('click', inboxHandler);
  menuOpts['today'].removeEventListener('click', todayHandler);
  menuOpts['next-week'].removeEventListener('click', nextWeekHandler);
  menuOpts['notes'].removeEventListener('click', notesHandler);

  menuOpts['add'].addEventListener('click', addHandler);
  menuOpts['inbox'].addEventListener('click', inboxHandler);
  menuOpts['today'].addEventListener('click', todayHandler);
  menuOpts['next-week'].addEventListener('click', nextWeekHandler);
  menuOpts['notes'].addEventListener('click', notesHandler);
}