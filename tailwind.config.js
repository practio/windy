module.exports = {
  //mode: 'jit',
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx,pug}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // SPACING
    // The spacing scale is based on a 4-pixel grid.
    // TIP: To find the spacing matching 32px, divide by 4
    // ex.: 32px / 4 = 8
    spacing: {
      0: '0rem',
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      8: '2rem', // 32px
      12: '3rem', // 48px
      16: '4rem', // 64px
      24: '6rem', // 96px
      32: '8rem', // 128px
      64: '16rem', // 256px
    },

    // COLORS
    colors: {
      //utility
      transparent: 'transparent',
      current: 'currentColor',

      // Practio DS colors
      sky: {
        lighter: '#F9FAFB',
        light: '#F4F6F8',
        DEFAULT: '#DFE3E8',
        dark: '#C4CDD5',
      },
      ink: {
        lightest: '#919EAB',
        lighter: '#637381',
        light: '#3D4754',
        DEFAULT: '#192029',
      },
      blue: {
        lighter: '#E5EEFF',
        light: '#B2CDFF',
        DEFAULT: '#1161FB',
        dark: '#0439CC',
        darker: '#001640',
      },
      // Interaction colors
      success: '#27CC6A',
      warning: '#FDBA2C',
      alert: '#EF3136',

      // etc
      white: '#FFFFFF',
    },

    // FONT SIZES
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['20px', '28px'],
      lg: ['24px', '32px'],
      xl: ['32px', '40px'],
      '2xl': ['40px', '50px'],
    },

    // FONT FAMILY
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },

    // BORDER RADIUS
    borderRadius: {
      none: '0',
      sm: '0.125rem', // 2px
      DEFAULT: '0.25rem', // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1.75rem', // 20px
      full: '9999px',
    },

    // BOX SHADOWS
    boxShadows: {
      sm: '0px 1px 2px rgba(25, 32, 41, 0.15)',
      DEFAULT:
        '0px 1px 3px rgba(25, 32, 41, 0.15), 0px 1px 2px rgba(25, 32, 41, 0.05)',
      md: '0px 2px 16px rgba(25, 32, 41, 0.08), 0px 1px 3px rgba(25, 32, 41, 0.1)',
      lg: '0px 31px 41px rgba(25, 32, 41, 0.1), 0px 2px 16px rgba(25, 32, 41, 0.08)',
      none: 'none',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      cursor: ['disabled', 'hover', 'focus'],
      opacity: ['disabled'],
      fill: ['hover', 'focus', 'group-focus'],
      fontSize: ['hover', 'group-hover'],
      fontWeight: ['hover', 'group-hover'],
      textColor: ['hover', 'focus', 'disabled', 'active'],
      hueRotate: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};