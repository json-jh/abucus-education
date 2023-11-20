declare interface NavigateLink {
  to?: RouteLocationRaw
  target?: '_blank' | '_self'
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  children?: NavigateLink[]
}