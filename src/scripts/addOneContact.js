import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const oldContacts = await readContacts();
  const newContact = createFakeContact();
  const updatedContacts = [...oldContacts, newContact];
  await writeContacts(updatedContacts);
};

addOneContact();
