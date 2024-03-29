export const CountExperience = (data: any) => {
  let lvl = {
    xpLeft: data,
    xpNeeded: 100,
    lvl: 1,
    wide: 0
  }

  while(Math.floor(lvl.xpLeft) >= Math.floor(lvl.xpNeeded)){
    lvl.xpLeft = Math.floor(lvl.xpLeft) - Math.floor(lvl.xpNeeded)
    lvl.xpNeeded += 150*((lvl.lvl/2)+1)
    lvl.lvl += 1
  }
  lvl.wide = (lvl.xpLeft/lvl.xpNeeded)*100
  return lvl
}