import Themes from './Themes';
class DynamicValue {
  constructor(light: any, dark: any) {
    this[Themes.lightTheme] = light;
    this[Themes.darkTheme] = dark;
  }
}
export default DynamicValue;
