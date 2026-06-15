import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 45px rgba(25, 163, 255, 0.22)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 20% 20%, rgba(55, 173, 255, 0.18), transparent 25%), radial-gradient(circle at 80% 40%, rgba(94, 156, 255, 0.14), transparent 24%), radial-gradient(circle at 50% 80%, rgba(63, 133, 255, 0.12), transparent 20%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [forms],
};
