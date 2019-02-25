exports.newDateObj = date => ({
  year: parseInt(date.format('YYYY'), 10),
  month: parseInt(date.format('MM'), 10),
  day: parseInt(date.format('DD'), 10)
})
