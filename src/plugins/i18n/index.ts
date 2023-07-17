import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import.meta.glob<{ default: any }>('./locales/*.json', { eager: true }))
    .map(([key, value]) => [key.slice(10, -5), value.default]),
)

const numberFormats: any = {
  en: {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard',
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent', useGrouping: false,
    },
  },
}

const datetimeFormats: any = {
  en: {
    short: {
      year: 'numeric', month: 'short', day: 'numeric',
    },
    datetime: {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  numberFormats,
  messages,
  datetimeFormats,
})
