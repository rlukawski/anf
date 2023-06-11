import "../src/styles/fonts.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Atoms', 'Molecules', 'Organisms', 'Lessons',
          'Account', 'Authorize Device', 'Change Limits', 'Exams',
          'Auth', 'Currency Exchange',
        ],
        method: 'numeric',
      },
    },
  },
};

export default preview;
