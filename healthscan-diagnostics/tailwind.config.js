module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#102A43',
        teal: '#0D9488',
        ice: '#F0F9FF',
        soft: '#F5F7FA',
        slate: '#E2E8F0'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16, 42, 67, 0.08)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(13,148,136,0.12), transparent 35%), linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 100%)'
      }
    }
  },
  plugins: []
};
