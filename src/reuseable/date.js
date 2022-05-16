class Day {
  constructor(date = null, lang = 'default') {
    date = date ?? new Date()
    this.Date = date
    this.date = date.getDate()
    this.dayLong = date.toLocaleString(lang, { weekday: 'long'})
    this.dayShort = date.toLocaleString(lang, { weekday: 'short'})
  }

  get today() {
    return this.getToday()
  }
  
  getToday() {
    return this.Date;
  }
}
var day = new Day(null, 'my')
console.log(day)