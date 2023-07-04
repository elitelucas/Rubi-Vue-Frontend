import type { VuetifyOptions } from 'vuetify'
import { resolveVuetifyTheme } from '@core/utils/vuetify'
import { themeConfig } from '@themeConfig'

export const staticPrimaryColor = '#48B5FF'

const theme: VuetifyOptions['theme'] = {
  defaultTheme: resolveVuetifyTheme(),
  themes: {
    light: {
      dark: false,
      colors: {
        'primary': '#48B5FF',
        'on-primary': '#fff',
        'secondary': '#82868B',
        'on-secondary': '#fff',
        'success': '#28C76F',
        'on-success': '#fff',
        'info': '#00CFE8',
        'on-info': '#fff',
        'warning': '#FF9F43',
        'on-warning': '#fff',
        'error': '#EA5455',
        'background': '#F8F7FA',
        'on-background': '#2F2B3D',
        'on-surface': '#2F2B3D',
        'grey-8': '#f1f0f2',
        'grey-50': '#FAFAFA',
        'grey-100': '#F5F5F5',
        'grey-200': '#EEEEEE',
        'grey-300': '#E0E0E0',
        'grey-400': '#BDBDBD',
        'grey-500': '#9E9E9E',
        'grey-600': '#757575',
        'grey-700': '#616161',
        'grey-800': '#424242',
        'grey-900': '#212121',
        'perfect-scrollbar-thumb': '#DBDADE',
        'skin-bordered-background': '#fff',
        'skin-bordered-surface': '#fff',
        'rubi-red': '#E8004C',
        'text-color-heading': '#434344',
        'text-color-body': '#434344',
        'text-color-muted': '#4B465C',
        'muted': '#a5a2ad',
        'text-color-placeholder': '#4B465C',
        'white': '#f8f7fa',
        'background-body': '#F8F7FA',
        'background-card': '#FFFFFF',
        'solid-color-extra' : '#D7D8DE',
        'solid-color-extra-table-striped': '#4B465C05',
      },

      variables: {
        'code-color': '#d400ff',
        'overlay-scrim-background': '#4C4E64',
        'tooltip-background': '#FFFFFF',
        'overlay-scrim-opacity': 0.5,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.06,
        'activated-opacity': 0.16,
        'pressed-opacity': 0.14,
        'dragged-opacity': 0.1,
        'disabled-opacity': 0.42,
        'border-color': '#2F2B3D',
        'border-opacity': 0.16,
        'high-emphasis-opacity': 0.78,
        'medium-emphasis-opacity': 0.68,
        'switch-opacity': 0.2,
        'switch-disabled-track-opacity': 0.3,
        'switch-disabled-thumb-opacity': 0.4,
        'switch-checked-disabled-opacity': 0.3,

        // Shadows
        'shadow-key-umbra-color': '#2F2B3D',
        'shadow-link': 'rgba(115, 103, 240, 0.48)',
      },
    },
    dark: {
      dark: true,
      colors: {
        'primary': localStorage.getItem(`${themeConfig.app.title}-darkThemePrimaryColor`) || staticPrimaryColor,
        'on-primary': '#fff',
        'secondary': '#A8AAAE',
        'on-secondary': '#fff',
        'success': '#28C76F',
        'on-success': '#fff',
        'info': '#00CFE8',
        'on-info': '#fff',
        'warning': '#FF9F43',
        'on-warning': '#fff',
        'error': '#EA5455',
        'background': '#3a3a3e',
        'background-header': '#313132',
        'on-background': '#D0D4F1',
        'surface': '#313132',
        'on-surface': '#8692D0',
        'grey-8': '#38393f',
        'grey-50': '#26293A',
        'grey-100': '#2F3349',
        'grey-200': '#26293A',
        'grey-300': '#4A5072',
        'grey-400': '#5E6692',
        'grey-500': '#7983BB',
        'grey-600': '#AAB3DE',
        'grey-700': '#B6BEE3',
        'grey-800': '#CFD3EC',
        'grey-900': '#E7E9F6',
        'perfect-scrollbar-thumb': '#4A5072',
        'skin-bordered-background': '#2f3349',
        'skin-bordered-surface': '#2f3349',
        'rubi-red': '#E8004C',
        'text-color-heading': '#8692D0',
        'text-color-body': '#8692D0',
        'text-color-muted': '#8692D0',
        'muted': '#8692D0',
        'text-color-placeholder': '#8692D0',
        'white': '#f8f7fa',
        'background-body': '#3A3A3E',
        'background-card': '#313132',
        'solid-color-extra' : '#4B4B4B',
        'solid-color-extra-table-striped': '#8692D005',
      },
      variables: {
        'code-color': '#d400ff',
        'overlay-scrim-background': '#101121',
        'tooltip-background': '#313132',
        'overlay-scrim-opacity': 0.6,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.06,
        'activated-opacity': 0.16,
        'pressed-opacity': 0.14,
        'dragged-opacity': 0.1,
        'disabled-opacity': 0.42,
        'border-color': '#D0D4F1',
        'border-opacity': 0.16,
        'high-emphasis-opacity': 0.78,
        'medium-emphasis-opacity': 0.68,
        'switch-opacity': 0.4,
        'switch-disabled-track-opacity': 0.4,
        'switch-disabled-thumb-opacity': 0.8,
        'switch-checked-disabled-opacity': 0.3,


        // Shadows
        'shadow-key-umbra-color': '#0F1422',
        'shadow-link': 'rgba(115, 103, 240, 0.48)',
      },
    },
  },
}

export default theme
