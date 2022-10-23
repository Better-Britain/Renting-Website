export interface RegionalAssetSummary {
  area: string;
  properties: number;
  agents: string[];
  purchaseValue: number;
  repairsValue: number;
  monthlyRentalIncome: number;
}

export interface Asset {
  agent: string;
  purchaseValue: number;
  repairs: number;
  monthlyRentalIncome: number;
}

const sunderlandAssets = [
  {}
]

const regionalAssets: RegionalAssetSummary[] = [
  {
    area: 'Sunderland',
    properties: 0,
    agents: ['Gentoo'],
    purchaseValue: 5000,
    repairsValue: 0,
    monthlyRentalIncome: 250,
  },
  {
    area: 'Newcastle-Upon-Tyne',
    properties: 0,
    agents: [],
    purchaseValue: 1000,
    repairsValue: 0,
    monthlyRentalIncome: 0,
  },
]

export const assetsSummary: RegionalAssetSummary = {
  area: '', // StableFund
  properties: 0,
  agents: [],
  purchaseValue: 0,
  repairsValue: 0,
  monthlyRentalIncome: 0,
}

regionalAssets.forEach((asset: RegionalAssetSummary) => {
  const assetKeys = ['properties', 'purchaseValue', 'repairsValue', 'monthlyRentalIncome', 'annualYield']
  assetKeys.forEach((key: string) => {
    
  })
})

export default regionalAssets
