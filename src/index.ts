import resolveConfig from 'tailwindcss/src/public/resolve-config.js';
import { createContext } from 'tailwindcss/src/lib/setupContextUtils.js';

export const createTailwindcssContext = (userTailwindConfig = {}) => {
  return createContext(resolveConfig(userTailwindConfig));
}
