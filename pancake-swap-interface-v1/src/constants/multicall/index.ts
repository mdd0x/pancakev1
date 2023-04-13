import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xebaeee02756005d7C20eE70C1Ae364fA6f2922DA', // TODO
  [ChainId.BSCTESTNET]: '0xebaeee02756005d7C20eE70C1Ae364fA6f2922DA'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
