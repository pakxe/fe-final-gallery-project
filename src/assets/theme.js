const colors = {
  white: '#ffffff',
  black: '#1B1313',
  gray: '#D3D3D3',
  blue: '#0679C0',
};

const font = {
  title: `
    size: 20px;
    font-weight: 700;
  `,
  largeTitle: `
    size: 24px;
    font-weight: 700;
  `,
  small: `
    size: 12px;
  `,
  sub: `
    color: ${colors.gray};
  `,
  submit: `
    color: ${colors.blue};
  `,
  bold: `
    font-weight: 600;
  `,
};

const theme = {
  colors,
  font,
};

export default theme;
