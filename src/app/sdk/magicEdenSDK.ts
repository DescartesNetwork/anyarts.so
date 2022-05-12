import axios from 'axios'
import { Net } from 'shared/runtime'
import Offset from './offset'

export const ENDPOINTS: Record<Net, string> = {
  devnet: 'https://api-devnet.magiceden.dev/v2',
  testnet: 'https://api-testnet.magiceden.dev/v2',
  mainnet: 'https://api-mainnet.magiceden.dev/v2',
}

export type MagicEdenCollection = {
  categories: string[]
  description: string
  discord: string
  image: string
  name: string
  symbol: string
  twitter: string
  website: string
}

export type MagicEdenListingNFT = {
  pdaAddress: string
  auctionHouse: string
  tokenAddress: string
  tokenMint: string
  seller: string
  tokenSize: number
  price: number
  rarity: any
  extra: {
    img: string
  }
}

class MagicEdenSDK extends Offset {
  public network: Net
  public endpoint: string

  constructor(network: Net) {
    super()
    this.network = network
    this.endpoint = ENDPOINTS[this.network]
  }

  getCollection = async (symbol: string) => {
    if (!symbol) throw new Error('Invalid symbol')
    const url = `${this.endpoint}/collections/${symbol}`
    const { data } = await axios.get(url)
    if (!data) throw new Error('Invalid symbol')
    return data as MagicEdenCollection
  }

  getCollections = async (offset = 0, limit = 200) => {
    const url = `${this.endpoint}/collections`
    const { data } = await axios.get(url, { params: { offset, limit } })
    return (data || []) as MagicEdenCollection[]
  }

  nextCollections = async (limit = 200) => {
    const offset = this.get('collections')
    const data = await this.getCollections(offset, limit)
    this.set('collections', offset + data.length)
    return data
  }

  getListingNFTs = async (symbol: string, offset = 0, limit = 20) => {
    const url = `${this.endpoint}/collections/${symbol}/listings`
    const { data } = await axios.get(url, { params: { offset, limit } })
    return (data || []) as MagicEdenListingNFT[]
  }

  nextListingNFTs = async (symbol: string, limit = 20) => {
    const offset = this.get(symbol)
    const data = await this.getListingNFTs(symbol, offset, limit)
    this.set(symbol, offset + data.length)
    return data
  }
}

export default MagicEdenSDK