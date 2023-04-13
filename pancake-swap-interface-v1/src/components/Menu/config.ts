import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Documentation',
    icon: 'MoreIcon',
    href: 'https://docs.alphabetnetwork.org',
  },
  {
    label: 'Visit ALT Chart',
    icon: 'InfoIcon',
    href: 'https://www.dextools.io/app/en/bnb/pair-explorer/0x31ad3c721784a356cf6e44ee9361eea3e1bbe5ef',
  }
]

export default config
