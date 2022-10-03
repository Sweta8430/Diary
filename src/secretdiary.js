class SecretDiary {
  #entries;
  status = true;
  constructor(entries) {
    this.entries = entries;
  }
  getAddEntry() {
    return `Diary is Locked can not make an Entry`;
  }
  getEntries() {
    return `Diary is Locked can not see an Entry`;
  }
}

module.exports = SecretDiary;
