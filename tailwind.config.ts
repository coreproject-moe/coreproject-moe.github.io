/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */
import type { Config } from "tailwindcss";

// Import plugins
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";
import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ["Kokoro", "sans-serif"],
        mono: ["Jetbrains Mono"]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    }
  },
  plugins: [
    /**
     * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
     * for forms. If you don't like it or have own styling for forms,
     * comment the line below to disable '@tailwindcss/forms'.
     */
    forms,
    typography,
    scrollbar,
    daisyui,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          delay: (value: string) => {
            return {
              "transition-delay": value,
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        kokoro: {
          primary: "#7569E1",
          secondary: "#03020C",
          accent: "#FFF7F8",
          neutral: "#1E2036",
          "base-100": "#070519",
          info: "#DCD9F7",
          success: "#6FCF97",
          warning: "#EDD68D",
          error: "#EB5757"
        }
      }
    ]
  }
} satisfies Config;
