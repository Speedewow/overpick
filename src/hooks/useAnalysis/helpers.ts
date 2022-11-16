// import { borders } from 'src/data/stats';

export const statsSum = (arr: any) => {
  let stats = {
    earlyGame: 0,
    middleGame: 0,
    lateGame: 0,
    laning: 0,
    push: 0,
    roshan: 0,
    fight: 0,
    vision: 0,
    initiation: 0,
    soloControl: 0,
    bkbControl: 0,
    massControl: 0,
    magicDamage: 0,
    physicalDamage: 0,
    burstDamage: 0,
    heal: 0,
    save: 0,
    buff: 0,
    durability: 0,
    escape: 0,
    mobility: 0,
    meta: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    stats.earlyGame += arr[i].earlyGame;
    stats.middleGame += arr[i].middleGame;
    stats.lateGame += arr[i].lateGame;
    stats.laning += arr[i].laning;
    stats.push += arr[i].push;
    stats.roshan += arr[i].roshan;
    stats.fight += arr[i].fight;
    stats.vision += arr[i].vision;
    stats.initiation += arr[i].initiation;
    stats.soloControl += arr[i].soloControl;
    stats.bkbControl += arr[i].bkbControl;
    stats.massControl += arr[i].massControl;
    stats.magicDamage += arr[i].magicDamage;
    stats.physicalDamage += arr[i].physicalDamage;
    stats.burstDamage += arr[i].burstDamage;
    stats.heal += arr[i].heal;
    stats.save += arr[i].save;
    stats.buff += arr[i].buff;
    stats.durability += arr[i].durability;
    stats.escape += arr[i].escape;
    stats.mobility += arr[i].mobility;
    stats.meta += arr[i].meta;
  }
  return stats;
};

export const pointS = (value : number, min : number, max : number) => {
  const point = (max-min) - (max-min)/value
  return point
}



export const bordersTransform = (obj: any) => {
  let transformed = {}
  Object.keys(obj).map((key) =>  key:1)
};
