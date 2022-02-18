module.exports = {
  content: ["./pug/**/*.{js,ts,jsx,tsx,pug}"],
  safelist: [
    {
      pattern: /.+/,
    },
    {
      pattern: /(bg|border|outline)-/,
      variants: ["active", "focus", "hover"],
    },
    {
      pattern: /(p|pt|pr|pb|pl|py|px|m|mt|mr|mb|ml|my|mx)-/,
      variants: ["sm"],
    },
    {
      pattern: /(hidden|inline|inline-block|block|grid-cols-)/,
      variants: ["sm"],
    },
  ],
  theme: {
    // BORDER RADIUS
    borderRadius: {
      none: "0",
      sm: "0.125rem", // 2px
      DEFAULT: "0.25rem", // 4px
      md: "0.375rem", // 6px
      lg: "0.5rem", // 8px
      xl: "0.75rem", // 12px
      "2xl": "1.75rem", // 20px
      full: "9999px",
    },

    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
      },
    },

    // COLORS
    colors: {
      //utility
      transparent: "transparent",
      current: "currentColor",

      // Practio DS colors
      sky: {
        lighter: "var(--sky-lighter)",
        light: "var(--sky-light)",
        DEFAULT: "var(--sky)",
        dark: "var(--sky-dark)",
      },
      ink: {
        lightest: "var(--ink-lightest)",
        lighter: "var(--ink-lighter)",
        light: "var(--ink-light)",
        DEFAULT: "var(--ink)",
      },
      blue: {
        lighter: "var(--blue-lighter)",
        light: "var(--blue-light)",
        DEFAULT: "var(--blue)",
        dark: "var(--blue-dark)",
        darker: "var(--blue-darker)",
      },
      green: {
        DEFAULT: "var(--green)",
      },
      red: {
        lighter: "var(--red-lighter)",
        light: "var(--red-light)",
        DEFAULT: "var(--red)",
        dark: "var(--red-dark)",
        darker: "var(--red-darker)",
      },
      yellow: {
        DEFAULT: "var(--yellow)",
      },
      // Interaction colors
      success: "var(--success)",
      warning: "var(--warning)",
      alert: "var(--alert)",

      // etc
      white: "var(--white)",
    },

    extend: {
      boxShadow: {
        sm: "0px 1px 2px rgba(25, 32, 41, 0.15)",
        DEFAULT:
          "0px 1px 3px rgba(25, 32, 41, 0.15), 0px 1px 2px rgba(25, 32, 41, 0.05)",
        md: "0px 2px 16px rgba(25, 32, 41, 0.08), 0px 1px 3px rgba(25, 32, 41, 0.1)",
        lg: "0px 31px 41px rgba(25, 32, 41, 0.1), 0px 2px 16px rgba(25, 32, 41, 0.08)",
        none: "none",
      },
      dropShadow: {
        sm: "0px 1px 2px rgba(25, 32, 41, 0.15)",
        DEFAULT:
          "0px 1px 3px rgba(25, 32, 41, 0.15), 0px 1px 2px rgba(50, 50, 51, 0.05)",
        md: "0px 2px 16px rgba(25, 32, 41, 0.08), 0px 1px 3px rgba(25, 32, 41, 0.1)",
        lg: "0px 31px 41px rgba(25, 32, 41, 0.1), 0px 2px 16px rgba(25, 32, 41, 0.08)",
        none: "none",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },

    // FONT FAMILY
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },

    // FONT SIZES
    fontSize: {
      "2xs": ["10px", "14px"],
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["20px", "28px"],
      lg: ["24px", "32px"],
      xl: ["32px", "40px"],
      "2xl": ["40px", "50px"],
    },

    // SPACING
    // The spacing scale is based on a 4-pixel grid.
    // TIP: To find the spacing matching 32px, divide by 4
    // ex.: 32px / 4 = 8
    spacing: {
      0: "0rem",
      px: "1px",
      "2px": "0.125rem", // 2px
      1: "0.25rem", // 4px
      2: "0.5rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "24px", // 24px
      8: "2rem", // 32px
      12: "3rem", // 48px
      16: "4rem", // 64px
      24: "6rem", // 96px
      32: "8rem", // 128px
      64: "16rem", // 256px
    },
  },
};
