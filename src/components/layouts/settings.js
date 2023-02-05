import { themes } from 'components/theme/initThemes';
import layout1Settings from './Layout1/Layout1Settings';

// UPDATE BELOW CODE
// DOC http://demos.ui-lib.com/matx-react-doc/layout.html
const LayoutSettings = {
  activeLayout: 'layout1', // layout1, layout2
  activeTheme: 'blue', // View all valid theme colors inside MatxTheme/themeColors.js
  perfectScrollbar: false,

  themes: themes,
  layout1Settings, // open Layout1/Layout1Settings.js
  // Footer options
  footer: {
    show: false,
    fixed: false,
    theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
  },
};
export default LayoutSettings