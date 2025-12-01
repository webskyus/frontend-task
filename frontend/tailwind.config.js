/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
    },

    extend: {
      colors: {
        background: '#111013',
        foreground: '#ffffff',

        muted: '#1A191D',
        card: '#1A191D',
        popover: '#1A191D',

        border: '#242226',
        input: '#1C1B1F',
        ring: 'var(--ring)',

        accent: {
          DEFAULT: '#C5FF42',
          foreground: '#000000',
        },

        status: {
          pending: 'var(--status-pending)',
          pendingAdmin: 'var(--status-pendingAdmin)',
          inReview: 'var(--status-inReview)',
          rejected: 'var(--status-rejected)',
          approved: 'var(--status-approved)',
        },

        mutedForeground: '#989898',

        chip: {
          bg: '#1F1D22',
          link: '#9BD5FF',
        },
      },

      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '6px',
      },

      boxShadow: {
        card: '0px 4px 18px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
