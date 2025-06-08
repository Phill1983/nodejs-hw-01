import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log('ВСІ КОНТАКТИ:');
  console.table(contacts);
};

getAllContacts();

