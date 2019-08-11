import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Libre Franklin",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Libre Franklin", "sans-serif"],
  bodyFontFamily: ["Georgia", "sans-serif"],
  blockMarginBottom: 0.7,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      background: `#D8D8D8`,
      color: `#333333`,
    },
    h1: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2rem",
      lineHeight: "1",
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1rem",
      lineHeight: "1",
      marginBottom: rhythm(1),
    },
    p: {
      marginBottom: rhythm(1),
    },
    blockquote: {
      fontSize: "1.5rem",
      fontStyle: "italic",
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
