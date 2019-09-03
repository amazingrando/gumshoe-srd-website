import Typography from "typography"
import color from "../utils/colors"

const typography = new Typography({
  googleFonts: [
    {
      name: "Noto Sans TC",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Noto Sans TC", "sans-serif"],
  bodyFontFamily: ["Noto Sans TC", "sans-serif"],
  blockMarginBottom: 0.7,

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      background: color.yellow,
      color: color.text,
    },
    h1: {
      color: color.red,
      fontSize: "2.5rem",
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
    },
    h2: {
      fontSize: "1.75rem",
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
    },
    p: {
      marginBottom: rhythm(0.5),
    },
    blockquote: {
      fontSize: "1.5rem",
      fontStyle: "italic",
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
