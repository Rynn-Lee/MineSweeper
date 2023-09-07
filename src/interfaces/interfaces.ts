export namespace interfaces {
  export interface settings {
    particles?: boolean | null
    darkTheme?: boolean | null
    background?: boolean | null
    transparency?: boolean | null
    animations?: boolean | null
  }
  export interface userData {
    accountName?: string,
    experience?: number,
    xpNeeded?: number,
    xpLeft?: number,
    lvl?: number,
    image?: string
  }
  export interface windows {
    settings?: boolean | null
    account?: boolean | null
  }
  export interface gameSettings {
    width?: number | null
    height?: number | null
    multiplier?: number | null
    tossBombs?: boolean | null
  }
}

export const dummyData = {
  userData: {
    accountName: 'NewMineSweeper',
    experience: 0,
    xpNeeded: 100,
    xpLeft: 0,
    lvl: 1,
    image: ''
  }
}