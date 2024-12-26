import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration
const eslintConfig = [
  // Extending recommended Next.js and Prettier configurations
  ...compat.extends(
    'next/core-web-vitals', // Next.js best practices
    'next/typescript',
    'prettier', // Disables conflicting formatting rules
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Include JavaScript and TypeScript files
    rules: {
      // Override or extend default rules
      'react/react-in-jsx-scope': 'off', // React auto-import in Next.js
      'react/prop-types': 'off', // Disable prop-types for TypeScript usage
      '@next/next/no-html-link-for-pages': 'error', // Enforce <Link> for internal routing
    },
  },
];

export default eslintConfig;
