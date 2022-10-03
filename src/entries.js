class Entries {
  status = false;
  #entries;
  constructor(newEntry) {
    this.#entries = newEntry;
  }
  getAddEntry() {
    return this.#entries;
  }

  setAddEntry(entry) {
    this.#entries += entry;
  }
  getEntries() {
    return this.#entries;
  }
}
module.exports = Entries;
