enum Areas {
  'Sunderland',
  'Newcastle-Upon-Tyne'
}

export interface RegionalAssetSummary {
  name: Areas;
  properties: number;
  agents: string[];
  purchaseValue: number;
  repairsValue: number;
  monthlyRentalIncome: number;
}

export interface Property {
  area: Areas;
  agent: string;
  purchaseValue: number;
  repairs: number;
  monthlyRentalIncome: number;
}

export const properties: Property[] = [
  // {
  //   area: Areas.Sunderland,
  //   agent: 'Gentoo',
  //   purchaseValue: 1000,
  //   monthlyRentalIncome: 350,
  //   repairs: 0
  // },
  // {
  //   area: Areas.Sunderland,
  //   agent: 'Agent2',
  //   purchaseValue: 500,
  //   monthlyRentalIncome: 350,
  //   repairs: 0
  // }
]

const areaSummaryObj: {[key: string]: RegionalAssetSummary} = {}

export const areaSummary: RegionalAssetSummary[] = []

properties.forEach(property => {
  const summary = areaSummaryObj[property.area as unknown as string]
  if (!areaSummaryObj.hasOwnProperty(property.area)) {
    areaSummaryObj[property.area] = {
      name: property.area,
      properties: 1,
      agents: [property.agent],
      purchaseValue: property.purchaseValue,
      repairsValue: property.repairs,
      monthlyRentalIncome: property.monthlyRentalIncome,
    }
  } else {
    if (!summary.agents.includes(property.agent)) {
      summary.agents.push(property.agent)
    }
    summary.purchaseValue += property.purchaseValue
    summary.repairsValue += property.repairs
    summary.monthlyRentalIncome += property.monthlyRentalIncome
    areaSummaryObj[property.area] = summary
    // areaSummaryObj[property.area].agents.push
    
    // = {
    //   properties: 1,
    //   agents: [property.agent],
    //   purchaseValue: property.purchaseValue,
    //   repairsValue: property.repairs,
    //   monthlyRentalIncome: property.monthlyRentalIncome,
    // }
  }
})

Object.keys(areaSummaryObj).map(key => {
  areaSummary.push(areaSummaryObj[key])
})

// const regionalAssets: RegionalAssetSummary[] = [
//   {
//     area: 'Sunderland',
//     properties: 0,
//     agents: [],
//     purchaseValue: 0,
//     repairsValue: 0,
//     monthlyRentalIncome: 0,
//   },
//   {
//     area: 'Newcastle-Upon-Tyne',
//     properties: 0,
//     agents: [],
//     purchaseValue: 0,
//     repairsValue: 0,
//     monthlyRentalIncome: 0,
//   },
// ]

// regionalAssets.forEach((asset: RegionalAssetSummary) => {
//   const assetKeys = ['properties', 'purchaseValue', 'repairsValue', 'monthlyRentalIncome', 'annualYield']
//   assetKeys.forEach((key: string) => { 
//   })
// })

export default areaSummary
