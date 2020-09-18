import { useMediaQuery } from "react-responsive"

export const Size = {
  mobile: "481",
  tablet: "768",
  laptop: "1024",
  desktop: "2560",
}

export const Device = {
  smallOnly: `screen and (max-width: ${Number(Size.mobile) - 1}px )`,
  mobileOnly: `screen and (min-width: ${Size.mobile}px) and (max-width: ${
    Number(Size.tablet) - 1
  }px)`,
  tabletOnly: `screen and (min-width: ${Size.tablet}px)and (max-width: ${
    Number(Size.laptop) - 1
  }px)`,
  mobile: `screen and (min-width: ${Size.mobile}px)`,
  tablet: `screen and (min-width: ${Size.tablet}px)`,
  laptop: `screen and (min-width: ${Size.laptop}px)`,
  desktop: `screen and (min-width: ${Size.desktop}px)`,
}

export const SmallOnly = ({ children }) => {
  const isSmallOnly = useMediaQuery({ query: Device.smallOnly })
  return isSmallOnly ? children : null
}

export const MobileOnly = ({ children }) => {
  const isMobileOnly = useMediaQuery({ query: Device.mobileOnly })
  return isMobileOnly ? children : null
}

export const TabletOnly = ({ children }) => {
  const isTabletOnly = useMediaQuery({ query: Device.tabletOnly })
  return isTabletOnly ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ query: Device.mobile })
  return isMobile ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ query: Device.tablet })
  return isTablet ? children : null
}
