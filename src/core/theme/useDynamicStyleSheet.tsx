import Themes from './Themes';
const useDynamicStyleSheet = (dynamicStyleSheet: any, theme: any) => {
  const defaultMode = Themes.lightTheme;
  const mode = theme || defaultMode;
  return dynamicStyleSheet[mode] || dynamicStyleSheet[defaultMode];
};

export default useDynamicStyleSheet;
