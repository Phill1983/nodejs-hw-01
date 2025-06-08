import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const TOTAL_CONTACTS = 5;

export const generateContacts = async () => {
  const oldContacts = await readContacts();
  const newContacts = Array.from({ length: TOTAL_CONTACTS }, createFakeContact);
  const updatedContacts = [...oldContacts, ...newContacts];
  await writeContacts(updatedContacts);
};

generateContacts();
