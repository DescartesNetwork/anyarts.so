import { PublicKey } from '@solana/web3.js'
import { Net } from 'shared/runtime'

class AuctionHouseSDK {
  public network: Net
  constructor(network: Net) {
    this.network = network
  }

  static programId = new PublicKey(
    'M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K',
  )
}

export default AuctionHouseSDK
