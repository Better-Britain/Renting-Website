enum Areas {
  'Sunderland' = 'Sunderland (Tyne and Wear)',
  'Newcastle' = 'Newcastle-Upon-Tyne'
}

enum Agents {
  'Gentoo' = 'Gentoo'
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
  agent: string | Agents;
  purchaseValue: number;
  repairs: number;
  monthlyRentalIncome: number;
}

export const properties: Property[] = [
  // {
  //   area: Areas.Sunderland,
  //   agent: Agents.Gentoo,
  //   purchaseValue: 100000,
  //   monthlyRentalIncome: 450,
  //   repairs: 0
  // },
  // {
  //   area: Areas.Sunderland,
  //   agent: 'Agent 2',
  //   purchaseValue: 5000,
  //   monthlyRentalIncome: 350,
  //   repairs: 0
  // },
  // {
  //   area: Areas.Newcastle,
  //   agent: 'Agent3',
  //   purchaseValue: 500,
  //   monthlyRentalIncome: 350,
  //   repairs: 0
  // }
]

const areaSummaryObj: {[key: string]: RegionalAssetSummary} = {}

export const areaSummary: RegionalAssetSummary[] = []

export const areaSummaryTotals = {
  purchaseValue: 0,
  repairsValue: 0,
  monthlyRentalIncome: 0,
  properties: 0,
}

properties.forEach(property => {
  if (!areaSummaryObj.hasOwnProperty(property.area)) {
    areaSummaryObj[property.area] = {
      name: property.area,
      properties: 0,
      agents: [],
      purchaseValue: 0,
      repairsValue: 0,
      monthlyRentalIncome: 0,
    }
  }

  const summary = areaSummaryObj[property.area as unknown as string]

  if (!summary.agents.includes(property.agent)) {
    summary.agents.push(property.agent)
  }
  summary.properties += 1
  summary.purchaseValue += property.purchaseValue
  summary.repairsValue += property.repairs
  summary.monthlyRentalIncome += property.monthlyRentalIncome
  areaSummaryObj[property.area] = summary

  areaSummaryTotals.properties += 1
  areaSummaryTotals.purchaseValue += property.purchaseValue
  areaSummaryTotals.repairsValue += property.repairs
  areaSummaryTotals.monthlyRentalIncome += property.monthlyRentalIncome
})

Object.keys(areaSummaryObj).map(key => {
  areaSummary.push(areaSummaryObj[key])
})

export default areaSummary
