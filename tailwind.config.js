/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          DEFAULT: '#527BFF',
          hover: '#3b65f5',
          light: '#EAF0FF',
          subtle: '#F4F7FF',
        },
        lavender: {
          DEFAULT: '#A78BFA',
          hover: '#906ffa',
          light: '#F0EAFF',
          subtle: '#F8F5FF',
        },
        coral: {
          DEFAULT: '#FF827A',
          hover: '#f8685f',
          light: '#FFF0EC',
          subtle: '#FFF7F5',
        },
        ivory: {
          DEFAULT: '#FAF9F6',
          muted: '#F4F2EC',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#20243A',
          muted: '#525875',
          light: '#888FA8',
          faint: '#D4D8E6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(32, 36, 58, 0.05)',
        'soft-lg': '0 12px 36px -4px rgba(32, 36, 58, 0.08)',
        'soft-xl': '0 20px 48px -6px rgba(82, 123, 255, 0.12)',
        'glow-blue': '0 0 30px -5px rgba(82, 123, 255, 0.35)',
        'glow-coral': '0 0 30px -5px rgba(255, 130, 122, 0.35)',
        'glow-lavender': '0 0 30px -5px rgba(167, 139, 250, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}

