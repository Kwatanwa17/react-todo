import "styled-components"
import theme from "../themes/Theme"

type Theme = typeof theme

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // suggestion for theme
  export interface DefaultTheme extends Theme {}
}
