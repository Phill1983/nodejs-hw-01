import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('⚠️ У базі немає контактів для видалення.');
    return;
  }

  const removed = contacts.pop(); // видаляємо останній
  await writeContacts(contacts);

  console.log('🗑️ Видалено останній контакт:');
  console.table([removed]);
};

removeLastContact();
