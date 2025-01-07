/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			spicy: [
  				'Spicy Rice',
  				'times new roman'
  			],
  			rethink: [
  				'Rethink Sans',
  				'ui-sans-serif'
  			]
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'main-1': '#3A140B',
  			'main-2': '#FFF8DB',
  			primary: '#DBD976',
  			secondary: '#77B09F',
  			tertiary: '#D76F2D',
  			'accent-1': '#F0047F',
  			'accent-2': '#A20F81',
  			'feedback-error': '#A11B04',
  			'feedback-succeed': '#99B836',
  			'feedback-disabled-1': '#646464',
  			'feedback-disabled-2': 'hsla(0 0% 39.2% / 0.2)'
  		},
  		textColor: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'main-1': '#3A140B',
  			'main-2': '#FFF8DB',
  			primary: '#DBD976',
  			secondary: '#77B09F',
  			tertiary: '#D76F2D',
  			'accent-1': '#F0047F',
  			'accent-2': '#A20F81',
  			'feedback-error': '#A11B04',
  			'feedback-succeed': '#99B836',
  			'feedback-disabled-1': '#646464',
  			'feedback-disabled-2': 'hsla(0 0% 39.2% / 0.2)'
  		},
  		borderRadius: {
  			'rounded-reg': '6px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		border: {
  			'border-thin': '2px',
  			'border-thick': '3px'
  		},
  		margin: {
  			desktop: '8rem',
  			mobile: '2rem'
  		},
  		boxShadow: {
  			custom: '9px 9px 0px #3A140B'
  		}
  	}
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".input": {
          color: theme("textColor.main-1"),
          fontSize: "7rem",
        },
        ".input2": {
          color: "green",
          fontSize: "5rem",
        },
      });
    },
      require("tailwindcss-animate")
],
};
