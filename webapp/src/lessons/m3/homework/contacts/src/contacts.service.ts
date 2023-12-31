import { v4 as uuid } from 'uuid';

export interface Contact {
  id?: string;
  name?: string;
  details?: string;
}

export class ContactsService {

  constructor(
    private contacts: Contact[]
  ) {}

  async getContacts() {
    return this.contacts;
  }

  update(updateCb: (contacts: Contact[]) => void) {
    const clone = [...this.contacts];
    updateCb(clone);
    this.contacts = clone;
  }

  async saveContact(contact: Contact) {
    const index = this.contacts.findIndex(({ id }) => contact.id === id);

    if (index === -1) {
      contact.id = uuid();
      this.update((contacts) => contacts.push(contact));
    } else {
      this.update((contacts) => contacts.splice(index, 1, contact));
    }

    return contact;
  }
}
