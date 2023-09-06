import moment from 'moment'

const build = (number, short, long) => {
  return { number, short, long: `${long}${number === 1 ? '' : 's'}` }
}

const inParts = (date) => {
  const diff = parseInt(Math.abs((Date.now() - new Date(date)) / 1000), 10)

  switch (true) {
    case diff < 60 /* 1 minute */:
      return build(diff, 's', 'second')
    case diff < 3600 /* 1 hour */:
      return build(Math.floor(diff / 60), 'm', 'minute')
    case diff < 86400 /* 1 day */:
      return build(Math.floor(diff / 3600), 'h', 'hour')
    case diff < 2592000 /* 1 month */:
      return build(Math.floor(diff / 86400), 'd', 'day')
    case diff < 31557600 /* 1 year */:
      return build(Math.floor(diff / 2592000), 'mo', 'month')
    default:
      return build(Math.floor(diff / 31557600), 'y', 'year')
  }
}

const lessThanOneDayAgo = (date) => {
  return moment(date) > moment().subtract(1, 'day')
}

export default (date) => {
  const parts = inParts(date)

  if (parts.short === 's') {
    return 'just now'
  }

  if (lessThanOneDayAgo(date)) {
    return `${parts.number}${parts.short} ago`
  }

  return ''
}
