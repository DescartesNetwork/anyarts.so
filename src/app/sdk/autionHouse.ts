/**
 * References
 * - https://docs.rs/mpl-auction-house/latest/mpl_auction_house/
 * - https://www.npmjs.com/package/@metaplex-foundation/mpl-auction-house
 */

import { PublicKey } from '@solana/web3.js'
import { Net } from 'shared/runtime'

class AuctionHouseSDK {
  public network: Net
  constructor(network: Net) {
    this.network = network
  }

  static programId = new PublicKey(
    'hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk',
  )
}

export default AuctionHouseSDK
