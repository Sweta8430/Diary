class SecretDiary {
  #totalEntries;
  #status;
  constructor(status) {
    this.#totalEntries = [];
    this.#status = status;
  }
  getAddEntry(entry) {
    if (this.#status === true) {
      return "Diary is locked can not add anything.";
    } else {
      this.#totalEntries.push(entry);
    }
  }
  getEntries() {
    if (this.#status === true) {
      return "Diary is Locked can not see an Entry.";
    } else {
      return this.#totalEntries;
    }
  }
}

module.exports = SecretDiary;
