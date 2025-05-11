import type { Url } from "url";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [raidplanStrat, codcarStrat, healerOutStrat, idyllStrat, ziyanStrat],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged'; 
export type StartingArea = 'Tiles' | 'Platform';
export type Alignment = 'original' | 'truenorth' | 'addrelative';
export type Alliance = 'A' | 'B' | 'C';

export interface MechanicStrat {
    mechanic: string;
    description: string;
    imageUrl?: string;
    imageRotated?: string;
    mask?: string;
    transform?: string;
    alignmentTransforms?: Record<Alignment, string>;
    alignmentImages?: Record<Alignment, string>;
    alignmentMasks?: Record<Alignment, string>;
}

export interface PlayerStrats {
    alliance: Alliance;
    role: Role;
    party: number;
    notes: string;
    startingArea: StartingArea;
    strats: MechanicStrat[];
    activePivot?:MechanicStrat[];
    swapNote?: string;
    swapWarning?: string;
    swapStrats?: MechanicStrat[];
    anotherSwapNote?: string;
    anotherSwapWarning?: string;
    anotherSwapStrats?: MechanicStrat[];
    thirdSwapNote?: string;
    thirdSwapWarning?: string;
    thirdSwapStrats?: MechanicStrat[];
}

interface Strat {
    stratName: string;
    stratUrl: string | Record<string, string>;
    description: string;
    notes: string;
    strats: PlayerStrats[];
}

const raidplanStrat: Strat = {
    stratName: 'raidplan',
    stratUrl: 'https://raidplan.io/plan/o1ZfvSL3dCiqjwfJ',
    description: '来自Aurelia Netcash的Raidplan',
    notes: '',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: '左侧/西侧平台 拉BOSS朝向真北',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北侧\n和D1一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '正北',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 57.8% 19.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站小云妈脚下',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧北方',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 24% 26%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-east-idle.png',
                    mask: 'radial-gradient(circle at 30.8% 20.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 32% 79.5%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '十字路口格子上',
                    imageUrl: './strats/raidplan/tiles-east-wc.png',
                    mask: 'radial-gradient(circle at 48.8% 21.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 48% 80%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的\n以云妈为中心的逆时针方向\n(面向云妈右侧)',
                    imageUrl: './strats/raidplan/tiles-east-chasers.png',
                    mask: 'radial-gradient(circle at 28% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 52% 67%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口的格子上',
                    imageUrl: './strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口东侧的格子上',
                    imageUrl: './strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北侧\n和A队D1一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: '左侧/西侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 南侧\n和D2一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '南',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 58% 82%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 79% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧中间',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-east-idle.png',
                    mask: 'radial-gradient(circle at 78% 20.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 78% 78.5%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '凝缩',
                    description: '十字路口格子的东侧格子 靠近T!',
                    imageUrl: './strats/raidplan/tiles-east-wc.png',
                    mask: 'radial-gradient(circle at 67% 17.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 67% 82%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-east-chasers.png',
                    mask: 'radial-gradient(circle at 75% 20.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 75% 78.5%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 21% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 19% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 南侧\n和A队D2一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 57%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: '左侧/西侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北侧\n和T一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 18.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '西北偏北',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 38.8% 24.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场北侧的种子',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 60% 33%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的外侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧北方',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 24%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 北侧\n和T一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 22.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的外侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 57% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: '左侧/西侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 南侧\n和奶一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '西南偏南',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 37% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场南侧的种子',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 60% 61%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的外侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 39% 61%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧南方',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 南侧\n和奶一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的外侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 60% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: '左侧/西侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西侧\n和D4一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散',
                    description: '西北偏西',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 30% 43%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场北侧的种子',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 17% 35%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 33% 83%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧南方',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 22% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子北/南的格子',
                    imageUrl: './strats/raidplan/tiles-east-idle.png',
                    mask: 'radial-gradient(circle at 54% 9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 55% 91%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子北/南的格子 靠近T',
                    imageUrl: './strats/raidplan/tiles-east-wc.png',
                    mask: 'radial-gradient(circle at 57% 12%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 54% 87%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子北/南的格子',
                    imageUrl: './strats/raidplan/tiles-east-chasers.png',
                    mask: 'radial-gradient(circle at 51% 9.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 51% 90.5%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: '左侧/西侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 西侧\n和D3一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散',
                    description: '西南偏西',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 31% 63%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场南侧的种子',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 20% 55%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上北侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34% 15%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧中间',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 67% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标环外 东侧\n和内场换出来的DPS一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 70% 53%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上北侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 69% 15%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 79% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北侧\n和A队D1一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 54%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 18% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北侧\n和C队D1一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 21% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 20% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 南侧\n和A队D2一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 57%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 81% 54%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 南侧\n和C队D2一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 79% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        }, 
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 51% 24%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 51% 50%, black 26%, rgba(0, 0, 0, 0.4) 26%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapWarning: "你此时需要按照D3站位",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 东侧\n和A队D4一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65% 85%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 51% 26%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 50% 52%, black 26%, rgba(0, 0, 0, 0.4) 26%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapWarning: "你此时需要按照D3站位",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 西侧\n和C队D4一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 33% 83%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 50% 81%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 50% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapWarning: "你此时需要按照D3站位",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 东侧\n和A队D4一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65% 85%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 50% 81%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 50% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapWarning: "你此时需要按照D3站位",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 西侧\n和C队D4一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 33% 83%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: '左侧/西侧平台 拉BOSS朝向真北',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北侧\n和D1一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 36% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧北方',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 78% 32%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-west-idle.png',
                    mask: 'radial-gradient(circle at 75% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 77% 80%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子上',
                    imageUrl: './strats/raidplan/tiles-west-wc.png',
                    mask: 'radial-gradient(circle at 60% 24%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 60% 76%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的\n以云妈为中心的逆时针方向\n(面向云妈右侧)',
                    imageUrl: './strats/raidplan/tiles-west-chasers.png',
                    mask: 'radial-gradient(circle at 52% 33%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 77% 80%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 19% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北侧\n和C队D1一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: '右侧/东侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 南侧\n和D2一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '南',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 37% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 57%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧中间',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 78% 55%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-west-idle.png',
                    mask: 'radial-gradient(circle at 28% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 29% 80%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的西侧格子 靠近T!',
                    imageUrl: './strats/raidplan/tiles-west-wc.png',
                    mask: 'radial-gradient(circle at 36% 19%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 38% 82%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/raidplan/tiles-west-chasers.png',
                    mask: 'radial-gradient(circle at 29% 20.6%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 29% 79%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 78% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 南侧\n和C队D2一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 79% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        }, 
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: '右侧/东侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北侧\n和T一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 22.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '东北偏北',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 53% 21%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场北侧的种子',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 47% 41%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的外侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 57% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧北方',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 28%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 北侧\n和T一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 18.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的外侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: '右侧/东侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 南侧\n和奶一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '东南偏南',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 58% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场南侧的种子',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 50% 64%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的外侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 60% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧南方',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 79%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 南侧\n和奶一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的外侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 39% 61%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: '右侧/东侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 东侧\n和D4一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散',
                    description: '东北偏东',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 64% 40%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场北侧的种子',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 88% 44%, black 9%, rgba(0, 0, 0, 0.4) 9%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65% 85%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧南方',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 77% 79%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
            ],
            swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子北/南的格子',
                    imageUrl: './strats/raidplan/tiles-west-idle.png',
                    mask: 'radial-gradient(circle at 52% 9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 52% 92%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子北/南的格子 靠近T!',
                    imageUrl: './strats/raidplan/tiles-west-wc.png',
                    mask: 'radial-gradient(circle at 49% 14%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 49% 87%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子北/南的格子',
                    imageUrl: './strats/raidplan/tiles-west-chasers.png',
                    mask: 'radial-gradient(circle at 52% 9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 52% 92%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: '右侧/东侧平台，以真北为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标环外 东侧\n和D3一组',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 70% 53%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '东南偏东',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 65% 59%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场南侧的种子',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 86% 56%, black 9%, rgba(0, 0, 0, 0.4) 9%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上北侧',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 69% 15%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧中间',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 52%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 西侧\n和内场换出来的DPS一组',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上北侧',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34% 15%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
    ]
}

const codcarStrat: Strat = {
    stratName: 'codcar',
    stratUrl: 'https://docs.google.com/presentation/d/1SM88CrlJC1cF1gSbNRjn1v26QmDbmKV2yyGJZaGLRnE/preview?slide=id.g321eb6ebf82_10_0',
    description: '来自RADAR的CODCAR打法',
    notes: 'All platform add-related mechanics are Wall/Add Relative',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: '左侧/西侧平台，拉boss朝向场外',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: "目标圈内 北 和A对的奶一组",
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 49.8% 41.6%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 44% 60%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(90deg)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 左',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 66% 59%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 41% 67%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧中间',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 19%, rgba(0, 0, 0, 0.4) 19%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: '右侧/东侧平台，拉boss朝向场外',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和A队的奶一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 49.8% 41.6%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 44% 60%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 右',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 60% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧中间',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 72% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: '左侧/西侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和A队的T一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 50% 25%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东北',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 75% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外面环上靠右的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧靠左',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 15% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37% 14%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧靠右',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 27% 24%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: '右侧/东侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和A对的T一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 50% 25%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东北',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 75% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外面环上靠右的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧靠左',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 81% 39%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 40% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧靠右',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 72% 72%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: '左侧/西侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西南 和A队的D3一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 40% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西北',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 52% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠右',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 73% 41%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 59% 73%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧靠左',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 27% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: '右侧/东侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西南 和A队的D4一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 40% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西北',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 52% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠左',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32% 41%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 40% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧 靠左',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 73% 26%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: '左侧/西侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 西南 和A队D1一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 31% 74%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外面环上靠左的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 65%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠右',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 21% 38%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62% 21%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧 靠左',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 77%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: '右侧/东侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 西南 和A队D2一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 31% 74%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外面环上靠左的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 65%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(90deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠右',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 87% 63%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 64% 13%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧 靠左',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 22%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 71% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了右侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和B队的奶一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 82% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 76% 38%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了东侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和B队的奶一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 56% 39%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 48% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了东侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和B队的T一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '东北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 59% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了东侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和B队的T一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '东北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        }, 
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/codcar/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 45% 27%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "我被换到了东侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西南和A队的远程一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '西北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 49% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/codcar/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 49% 67%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "我被换到了东侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西南和A队的远程一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '西北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: '左侧/西侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 东南 和B队的远程一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '南',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '内侧靠左的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 72% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外面环上 靠右',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 30% 14%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 86% 30%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧中间',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 50%, black 18%, rgba(0, 0, 0, 0.4) 18%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: '左侧/西侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 东南和B队的远程一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 71% 74%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '内侧靠右的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 75% 37%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外面环上 靠左',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32% 84%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 16% 32%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '内侧靠右的种子',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 69% 22%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 31% 52%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了西侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和C队的奶一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 20% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 26% 39%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了西侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和C队的奶一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 83% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 45% 41%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 48% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了西侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和C队的T一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '东北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 44% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "我被换到了西侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和C队的T一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '东北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        }, 
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/codcar/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 56% 27%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "我被换到了西侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西南和A队的远程一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '西北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 49% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/codcar/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 55% 68%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '换线',
                    description: '十字路口格子上',
                    imageUrl: './strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "我被换到了侧平台！现在该怎么办？",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西南和A队的远程一组',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: '分散',
                    description: '西北',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '北/东',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: '右侧/东侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 东南和C队的远程一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '南',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '平台内侧靠左的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 72% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外面环上 靠右',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 73% 85%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 85% 27%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧中间',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 48%, black 18%, rgba(0, 0, 0, 0.4) 18%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: '右侧/东侧平台，以场外为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 东南和C队的远程一组',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 71% 74%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/西',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '平台内侧靠右的种子',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 75% 37%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外面环上靠左',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 72% 13%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 13% 27%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧靠左',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 73%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
    ]
}

const healerOutStrat: Strat = {
    stratName: 'healerout',
    stratUrl: 'https://docs.google.com/presentation/d/1TRqF03mJQNoYTibS0X1tURwyZTjghTUWnoF8c_r_tEA',
    description: "来自Jake Hale的HealerOut打法",
    notes: '',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: '左侧/西侧平台, 拉小云妈朝向场内，以场内位12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n北侧\n和B队的奶一组',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 71.0% 49.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '北（朝场内）',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 85.8% 50.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的内侧',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 76% 37%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/healerout/postswap-a-tiles-east.png',
                    mask: 'radial-gradient(circle at 36.5% 21.3%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 34.5% 77.7%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你是优先级最高的人!\n所有机制你都最先动!",
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的\n以云妈为中心的逆时针方向\n(面向云妈右侧)',
                    imageUrl: './strats/healerout/tiles-east-chasers.png',
                    mask: 'radial-gradient(circle at 36.4% 21.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 60.3% 68.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/healerout/tiles-southwest.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你是优先级最高的人!\n所有机制你都最先动!",
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n北侧\n和B队的奶一组',
                    imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 30.7% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的内侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: '左侧/西侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n西南\n和远程一组',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 24.0% 22.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '南（朝场外）',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 20.1% 50.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场真北侧的种子',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 55.6% 35.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的外侧',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 37.1% 63.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n东南\n和远程一组',
                    imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 84.7% 20.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 31% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的外侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 61.9% 62.3%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: '左侧/西侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n东南\n和近战一组',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 24.2% 79.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '东(真南)',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 55.7% 79.7%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场真北侧的种子',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 16.8% 34.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 29.4% 87.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n西南\n和近战一组',
                    imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 81% 74.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 31% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上南侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 67.9% 86.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: '左侧/西侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n东南\n和H2一组',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 35.3% 68.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '东南',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 21.7% 76.2%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的内侧',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 77.3% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '华容道的东北或者东南角的突起',
                    imageUrl: './strats/healerout/postswap-a-tiles-east.png',
                    mask: 'radial-gradient(circle at 58.9% 9.7%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 58.9% 90.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "次优先级!\n让T先移动",
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '华容道的东北或者东南角的突起',
                    imageUrl: './strats/healerout/tiles-east-chasers.png',
                    mask: 'radial-gradient(circle at 59.8% 6.3%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 59.8% 93.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/healerout/tiles-southwest.png',
                    mask: 'radial-gradient(circle at 49.7% 76.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "次优先级!\n让T先移动",
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n西南\n 和H2一组',
                    imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 67.5% 64.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的内侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: '左侧/西侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n西南\n和H1一组',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 35.7% 35.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '西南',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 20.8% 24.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场真南侧的种子',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 54.9% 62.9%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的外侧',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34.8% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '华容道的东北或者东南角的突起',
                    imageUrl: './strats/healerout/postswap-a-tiles-east.png',
                    mask: 'radial-gradient(circle at 81.5% 20.5%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 82.7% 78.2%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你的优先级最低\n让T和近战先动",
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/healerout/tiles-east-chasers.png',
                    mask: 'radial-gradient(circle at 80.6% 23.8%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 88.5% 79.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/healerout/tiles-southwest.png',
                    mask: 'radial-gradient(circle at 19.7% 48.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你的优先级最低\n让T和近战先动",
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n东南\n和H1一组',
                    imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 70.5% 29.9%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的外侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/healerout/tiles-northwest.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你是优先级最高的人!\n所有机制你都最先动!",
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n北侧\n和B队的奶一组',
                    imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 30.7% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/healerout/tiles-northeast.png',
                    mask: 'radial-gradient(circle at 24.9% 51.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你是优先级最高的人!\n所有机制你都最先动!",
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n北侧\n和B队的奶一组',
                    imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 71.9% 48%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: '左侧/西侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n靠北\n和T一组',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 87.4% 49.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '西',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 56.6% 12.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场真南侧的种子',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 17.1% 55%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上真北侧',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32.2% 15.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n靠北\n和T一组',
                    imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 13.7% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 31% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上真北侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70% 18.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: '右侧/东侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n靠北\n和T一组',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 12.6% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '分散',
                    description: '东',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 39% 17%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场真南侧的种子',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 88% 58.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上真北侧',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70% 18.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n靠北\n和T一组',
                    imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 89.9% 49.2%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 70% 78.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上北侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 33% 15.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/healerout/tiles-northwest.png',
                    mask: 'radial-gradient(circle at 49.1% 19.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "次优先级!\n让T先移动",
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n西南\n 和A队H2一组',
                    imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 69.2% 65.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 50% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 69% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的内侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的北侧格子',
                    imageUrl: './strats/healerout/tiles-northeast.png',
                    mask: 'radial-gradient(circle at 52% 20%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "次优先级!\n让T先移动",
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n东南\n和C队H2一组',
                    imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 34.9% 66.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的内侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: '华容道西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/healerout/tiles-northwest.png',
                    mask: 'radial-gradient(circle at 19.8% 48.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你的优先级最低\n让T和近战先动",
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n东南\n和A队H1一组',
                    imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 71.9% 30.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 50% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 69% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的外侧',
                    imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/healerout/tiles-northeast.png',
                    mask: 'radial-gradient(circle at 81.5% 49.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你的优先级最低\n让T和近战先动",
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n西南\n和C队H1一组',
                    imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 36.1% 34.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的外侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 36% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: '右侧/东侧平台, 拉小云妈朝向场内，以场内位12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n北侧\n和B队的奶一组',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 31% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '分散',
                    description: '北',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 11.2% 50.3%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62.7% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的内侧',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/healerout/postswap-c-tiles-west.png',
                    mask: 'radial-gradient(circle at 75.3% 21.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 76.1% 79.9%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你是优先级最高的人!\n所有机制你都最先动!",
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '十字路口格子的\n以云妈为中心的逆时针方向\n(面向云妈右侧)',
                    imageUrl: './strats/healerout/tiles-west-chasers.png',
                    mask: 'radial-gradient(circle at 41.2% 32.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 62.8% 78.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的西侧格子',
                    imageUrl: './strats/healerout/tiles-southeast.png',
                    mask: 'radial-gradient(circle at 21% 48%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你是优先级最高的人!\n所有机制你都最先动!",
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n北侧\n和B队的奶一组',
                    imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 72% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31.5% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠北的内侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 76% 37%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: '右侧/东侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n东南\n和远程一组',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 87.1% 19.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '南',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 75.5% 48.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场真北侧的种子',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 47.7% 40.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的外侧',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 61.9% 62.3%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n西南\n和远程一组',
                    imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 26.7% 22.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 70% 78.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠南的外侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38% 63.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: '右侧/东侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n西南\n 和近战一组',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 82% 75.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散',
                    description: '西',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 40% 83.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '引导种子',
                    description: '外场真北侧的种子',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 89.5% 41.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上真南侧',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 67.9% 86.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外\n东南\n和近战一组',
                    imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 27.1% 79.1%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真南/靠内场',
                    imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 70% 78.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外边环上真南侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 30% 87.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: '右侧/东侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n西南\n和H2一组',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 69.1% 64.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '分散',
                    description: '西南',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 75.6% 73.9%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62.7% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的内侧',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '华容道西北角或西南角的突起',
                    imageUrl: './strats/healerout/postswap-c-tiles-west.png',
                    mask: 'radial-gradient(circle at 49.5% 8.8%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 49.5% 91.1%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "次优先级!\n让T先移动",
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '华容道西北角或西南角的突起',
                    imageUrl: './strats/healerout/tiles-west-chasers.png',
                    mask: 'radial-gradient(circle at 40.5% 6.2%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 40.9% 93.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的南侧格子',
                    imageUrl: './strats/healerout/tiles-southeast.png',
                    mask: 'radial-gradient(circle at 49.6% 80.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "次优先级!\n让T先移动",
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n东南\n和H2一组',
                    imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 36% 68%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50.4% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真南的内侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: '右侧/东侧平台, 以场内为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n东南\n和H1一组',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 72.1% 30.4%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '分散',
                    description: '东南',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 71.2% 26.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: '引导种子',
                    description: '内场真南侧的种子',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 46.5% 68.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的外侧',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ],
            swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '基础站位',
                    description: '华容道的西北或者西南角的突起',
                    imageUrl: './strats/healerout/postswap-c-tiles-west.png',
                    mask: 'radial-gradient(circle at 23.1% 20.9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 23.6% 79.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你的优先级最低\n让T和近战先动",
                },
                {
                    mechanic: '潜地炮预站位',
                    description: '华容道的西北或者西南角的突起',
                    imageUrl: './strats/healerout/tiles-west-chasers.png',
                    mask: 'radial-gradient(circle at 13.3% 20.7%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 13.5% 78.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '十字路口格子的东侧格子',
                    imageUrl: './strats/healerout/tiles-southeast.png',
                    mask: 'radial-gradient(circle at 79.2% 49.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: '优先级：T>近战>远程',
                    description: "你的优先级最低\n让T和近战先动",
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内\n西南\n和H1一组',
                    imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 36.1% 34.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: '踩塔',
                    description: '靠真北/靠场外',
                    imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50.4% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台靠真北的外侧',
                    imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 36% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
            ],
        },
    ]
}

const idyllStrat: Strat = {
    stratName: 'idyll',
    stratUrl: {
        kanatan: 'http://kanatan.info/archives/38822195.html',
        raidplan: 'https://raidplan.io/plan/BBhK6qoMdxoGX_0C',
    },
    description: 'Taken from the post by @idyllshireinfo',
    notes: 'All platform add-related mechanics are wall relative; THD is not applicable for seed placement on tiles',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: 'Left/West platform, Face boss Outside/Relative North | MT',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ H2',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    mask: 'radial-gradient(circle at 48% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative NNW',
                    imageUrl: './strats/idyll/spread.png',
                    mask: 'radial-gradient(circle at 33% 53.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 56% 40%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/looming-chaos-w.png',
                    mask: 'radial-gradient(circle at 27% 48%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the NE or SE tiles! Now what?",
            swapStrats: [
                {
                    mechanic: 'idle',
                    description: 'Both 2 tiles west to NE/SE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 61% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 62% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'wild charge',
                    description: '1 tile west to NE/SE corner tile',
                    imageUrl: './strats/idyll/wild-charge-tiles.png',
                    mask: 'radial-gradient(circle at 73.8% 21.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 73% 80%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'chaser',
                    description: 'CCW of corner tile',
                    imageUrl: './strats/idyll/chaser.png',
                    mask: 'radial-gradient(circle at 67% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 79% 67%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Center of Idle Tiles',
                    imageUrl: './strats/idyll/begone-with-you.png',
                    mask: 'radial-gradient(circle at 53.8% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 54% 78%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: 'East of NW corner tile | ST',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'East of NW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 41% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(1,-1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: '1 tile east to NW corner tile',
                    imageUrl: './strats/idyll/wild-charge-nw.png',
                    mask: 'radial-gradient(circle at 77.8% 55.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Center of Idle Tiles',
                    imageUrl: './strats/idyll/begone-with-you-nw.png',
                    mask: 'radial-gradient(circle at 67% 32%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Lead the Corner Team if chased\nor go into horizontal end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 78% 10%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 9% 60.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'East of NW corner tile',
                    imageUrl: './strats/idyll/looming-chaos-tilew.png',
                    mask: 'radial-gradient(circle at 65% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ D3(R1)\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 43% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: 'North of NW corner tile',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'North of NW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 30% 13%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(1,-1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'North tile from NW corner',
                    imageUrl: './strats/idyll/wild-charge-nw.png',
                    mask: 'radial-gradient(circle at 50.8% 24.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-nw.png',
                    mask: 'radial-gradient(circle at 41% 11%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Follow the tank of the Corner Team if chased\nor go into vertical end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 67% 10%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 21% 54.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW corner tile',
                    imageUrl: './strats/idyll/looming-chaos-tilew.png',
                    mask: 'radial-gradient(circle at 40% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative West\nw/ D2(M2) from B\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SW',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 43% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: 'Left/West platform',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ MT',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    mask: 'radial-gradient(circle at 32% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative NNE',
                    imageUrl: './strats/idyll/spread.png',
                    mask: 'radial-gradient(circle at 33% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    mask: 'radial-gradient(circle at 74.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative NE',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 23% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SW',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 58% 59%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/looming-chaos-w.png',
                    mask: 'radial-gradient(circle at 27% 55%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the NE or SE tiles! Now what?",
            swapStrats: [
                {
                    mechanic: 'idle',
                    description: 'North from NE/SE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 68% 17%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 68% 60%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'See image',
                    imageUrl: './strats/idyll/wild-charge-tiles.png',
                    mask: 'radial-gradient(circle at 82.8% 11.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 82% 82%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'chaser',
                    description: 'See image\nStick to left side of the tile facing boss',
                    imageUrl: './strats/idyll/chaser.png',
                    mask: 'radial-gradient(circle at 79% 11%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 89% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'See image',
                    imageUrl: './strats/idyll/begone-with-you.png',
                    mask: 'radial-gradient(circle at 64.8% 9.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 64% 61%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: 'Left/West platform | D1',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative West\nw/ D3(R1)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    mask: 'radial-gradient(circle at 60% 55%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative West',
                    imageUrl: './strats/idyll/spread.png',
                    mask: 'radial-gradient(circle at 61% 69.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 20% 39%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/looming-chaos-w.png',
                    mask: 'radial-gradient(circle at 27% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the NE or SE tiles! Now what?",
            swapStrats: [
                {
                    mechanic: 'idle',
                    description: 'South from NE/SE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 68% 38%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 68% 82%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'See image',
                    imageUrl: './strats/idyll/wild-charge-tiles.png',
                    mask: 'radial-gradient(circle at 82.8% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 82% 92%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'chaser',
                    description: 'See image\nStick to left side of the tile facing boss',
                    imageUrl: './strats/idyll/chaser.png',
                    mask: 'radial-gradient(circle at 89% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 79% 89%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'See image',
                    imageUrl: './strats/idyll/begone-with-you.png',
                    mask: 'radial-gradient(circle at 64.8% 34.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 64% 87%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: 'Left/West platform | D2',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative East\nw/ D4(R2)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    mask: 'radial-gradient(circle at 60% 35%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative East',
                    imageUrl: './strats/idyll/spread.png',
                    mask: 'radial-gradient(circle at 56% 19.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative SE',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 58% 28%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NW',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 20% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative South',
                    imageUrl: './strats/idyll/looming-chaos-w.png',
                    mask: 'radial-gradient(circle at 65% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 43.2% 72%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 23% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative West\nw/ Healer from tiles\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 56% 71%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 74% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform | D3',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative West\nw/ D1(M1)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    mask: 'radial-gradient(circle at 60% 68%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative WNW',
                    imageUrl: './strats/idyll/spread.png',
                    mask: 'radial-gradient(circle at 41% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative SW',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 58% 42%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative East',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 33% 20%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative South',
                    imageUrl: './strats/idyll/looming-chaos-w.png',
                    mask: 'radial-gradient(circle at 65% 46%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 43.2% 72%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 23% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from tiles\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 40% 55%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative East',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 60% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: 'Left/West platform | D4',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative East\nw/ D2(M2)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    mask: 'radial-gradient(circle at 62% 22%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative ENE',
                    imageUrl: './strats/idyll/spread.png',
                    mask: 'radial-gradient(circle at 41% 23.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative NW',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 24% 53%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative West',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 33% 80%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative South',
                    imageUrl: './strats/idyll/looming-chaos-w.png',
                    mask: 'radial-gradient(circle at 65% 53%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 43.2% 72%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 23% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative East\nw/ DPS from tiles\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 57% 36%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative West',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 63% 22%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: 'East of SW corner tile | MT',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'East of SW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 41% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: '1 tile east to SW corner tile',
                    imageUrl: './strats/idyll/wild-charge-sw.png',
                    mask: 'radial-gradient(circle at 60.8% 33.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Center of Idle Tiles',
                    imageUrl: './strats/idyll/begone-with-you-sw.png',
                    mask: 'radial-gradient(circle at 67% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Lead the Corner Team if chased\nor go into horizontal end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 11% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 79% 89.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'East of SW corner tile',
                    imageUrl: './strats/idyll/looming-chaos-tilew.png',
                    mask: 'radial-gradient(circle at 65% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ D3(R1)\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 43% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: 'West of SE corner tile | ST',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'West of SE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 57% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: '1 tile east to SE corner tile',
                    imageUrl: './strats/idyll/wild-charge-sw.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 60.8% 33.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Center of Idle Tiles',
                    imageUrl: './strats/idyll/begone-with-you-se.png',
                    mask: 'radial-gradient(circle at 31% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Lead the Corner Team if chased\nor go into horizontal end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 22% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 92% 89.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'West of SE corner tile',
                    imageUrl: './strats/idyll/looming-chaos-tilee.png',
                    mask: 'radial-gradient(circle at 38% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ D3(R1)\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 55% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: 'North of SW corner tile',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'North of SW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 29% 61%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SW corner tile',
                    imageUrl: './strats/idyll/wild-charge-sw.png',
                    mask: 'radial-gradient(circle at 50.8% 40.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-sw.png',
                    mask: 'radial-gradient(circle at 42% 33%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Follow the tank of the Corner Team if chased\nLead if not',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 20% 34%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 69% 89.7%, black 5%, rgba(0, 0, 0, 0.2) 5%)'
                },
                {
                    mechanic: 'swap',
                    description: 'North tile of SW corner',
                    imageUrl: './strats/idyll/looming-chaos-tilew.png',
                    mask: 'radial-gradient(circle at 40% 68%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative West\nw/ D2(M2) from B\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SW',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 43% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: 'North of SE corner tile',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'North of SE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 68% 61%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SE corner tile',
                    imageUrl: './strats/idyll/wild-charge-sw.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 50.8% 40.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-se.png',
                    mask: 'radial-gradient(circle at 54% 34%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Follow the tank of the Corner Team if chased\nLead if not',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 32% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 79% 84.7%, black 5%, rgba(0, 0, 0, 0.2) 5%)'
                },
                {
                    mechanic: 'swap',
                    description: 'North tile of SE corner',
                    imageUrl: './strats/idyll/looming-chaos-tilee.png',
                    mask: 'radial-gradient(circle at 59% 68%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative West\nw/ D2(M2) from B\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SW',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 57% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: 'South of NW corner tile | D1',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'South of NW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 30% 37%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(1,-1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NW corner tile',
                    imageUrl: './strats/idyll/wild-charge-nw.png',
                    mask: 'radial-gradient(circle at 50.8% 50.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-nw.png',
                    mask: 'radial-gradient(circle at 43% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'First or last person to follow the train',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 55% 10%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 22% 65.7%, black 6%, rgba(0, 0, 0, 0.2) 6%)'
                },
                {
                    mechanic: 'swap',
                    description: 'South tile from NW corner',
                    imageUrl: './strats/idyll/looming-chaos-tilew.png',
                    mask: 'radial-gradient(circle at 40% 31%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative East\nw/ D4(R2) from A\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 56% 44%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 75% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: 'South of NE corner tile | D2',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'South of NE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 68% 37%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NE corner tile',
                    imageUrl: './strats/idyll/wild-charge-nw.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 50.8% 50.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-ne.png',
                    mask: 'radial-gradient(circle at 63% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'First or last person to follow the train',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 78% 13%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 46% 60.7%, black 6%, rgba(0, 0, 0, 0.2) 6%)'
                },
                {
                    mechanic: 'swap',
                    description: 'South tile from NE corner',
                    imageUrl: './strats/idyll/looming-chaos-tilee.png',
                    mask: 'radial-gradient(circle at 59% 31%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative East\nw/ D4(R2) from A\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 57% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 18% 39%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: 'South of SW corner tile | D3',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'South of SW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 30% 85%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SW corner tile',
                    imageUrl: './strats/idyll/wild-charge-sw.png',
                    mask: 'radial-gradient(circle at 38.8% 59.6%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-sw.png',
                    mask: 'radial-gradient(circle at 43% 84%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Last of the train if chased; otherwise vertical dead end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 20% 47%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 57% 89.7%, black 5%, rgba(0, 0, 0, 0.2) 5%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW corner',
                    imageUrl: './strats/idyll/looming-chaos-tilew.png',
                    mask: 'radial-gradient(circle at 40% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-e.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative East\nw/ D4(R2) from A\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 56% 44%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 75% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: 'South of SE corner tile | D4',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'South of SE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 68% 88%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SE corner tile',
                    transform: 'scale(-1,1)',
                    imageUrl: './strats/idyll/wild-charge-sw.png',
                    mask: 'radial-gradient(circle at 38.8% 59.6%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-se.png',
                    mask: 'radial-gradient(circle at 57% 82%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Last of the train if chased; otherwise vertical dead end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 45% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 78% 95.7%, black 4%, rgba(0, 0, 0, 0.2) 4%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE corner',
                    imageUrl: './strats/idyll/looming-chaos-tilee.png',
                    mask: 'radial-gradient(circle at 60% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative East\nw/ D4(R2) from A\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 57% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 18% 39%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: 'Right/East platform, Face boss Outside/Relative North | MT',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ H2',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 48% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative NNW',
                    imageUrl: './strats/idyll/spread.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 33% 53.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 43% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/looming-chaos-e.png',
                    mask: 'radial-gradient(circle at 72% 48%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the NW or SW tiles! Now what?",
            swapStrats: [
                {
                    mechanic: 'idle',
                    description: 'Both 2 tiles east to NW/SW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 40% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 40% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'wild charge',
                    description: '1 tile east to NW/SW corner tile',
                    imageUrl: './strats/idyll/wild-charge-tiles.png',
                    mask: 'radial-gradient(circle at 27.8% 21.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 29% 82%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'chaser',
                    description: 'CCW of corner tile',
                    imageUrl: './strats/idyll/chaser.png',
                    mask: 'radial-gradient(circle at 21% 33%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 33% 79%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Center of Idle Tiles',
                    imageUrl: './strats/idyll/begone-with-you.png',
                    mask: 'radial-gradient(circle at 39.8% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 40% 78%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: 'East of NE corner tile | ST',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'West of NE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 58% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(-1,-1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: '1 tile west to NE corner tile',
                    imageUrl: './strats/idyll/wild-charge-nw.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 77.8% 55.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Center of Idle Tiles',
                    imageUrl: './strats/idyll/begone-with-you-ne.png',
                    mask: 'radial-gradient(circle at 37% 32%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Lead the Corner Team if chased\nor go into horizontal end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 89% 10%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 22% 60.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'West of NE corner tile',
                    imageUrl: './strats/idyll/looming-chaos-tilee.png',
                    mask: 'radial-gradient(circle at 38% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the east platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ D3(R1)\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 57% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: 'North of NE corner tile',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'North of NE corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 68% 13%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'seed placement',
                    description: 'H > D > T',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'North tile from NE corner',
                    imageUrl: './strats/idyll/wild-charge-nw.png',
                    transform: 'scale(-1,1)',
                    mask: 'radial-gradient(circle at 50.8% 24.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Idle tile',
                    imageUrl: './strats/idyll/begone-with-you-ne.png',
                    mask: 'radial-gradient(circle at 63% 11%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'spinny',
                    description: 'Follow the tank of the Corner Team if chased\nor go into vertical end',
                    imageUrl: './strats/idyll/spinny.png',
                    mask: 'radial-gradient(circle at 77% 4%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 33% 60.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE corner tile',
                    imageUrl: './strats/idyll/looming-chaos-tilee.png',
                    mask: 'radial-gradient(circle at 60% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative West\nw/ D2(M2) from B\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SW',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 58% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: 'Right/East platform',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ MT',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 32% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative NNE',
                    imageUrl: './strats/idyll/spread.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 33% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 74.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative NE',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 23% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform Inside\nRelative SW',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 43% 40%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/looming-chaos-e.png',
                    mask: 'radial-gradient(circle at 73% 51%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
            swapNote: "I got a clean swap to the NW or SW tiles! Now what?",
            swapStrats: [
                {
                    mechanic: 'idle',
                    description: 'North from NW/SW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 29% 17%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 29% 60%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'See image',
                    imageUrl: './strats/idyll/wild-charge-tiles.png',
                    mask: 'radial-gradient(circle at 18.8% 10.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 19% 83%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'chaser',
                    description: 'See image\nStick to left side of the tile facing boss',
                    imageUrl: './strats/idyll/chaser.png',
                    mask: 'radial-gradient(circle at 22% 11%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 9% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'See image',
                    imageUrl: './strats/idyll/begone-with-you.png',
                    mask: 'radial-gradient(circle at 29.8% 9.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 30% 61%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: 'Right/East platform | D1',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative West\nw/ D3(R1)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 60% 55%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative West',
                    imageUrl: './strats/idyll/spread.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 61% 69.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NE',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 74% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/looming-chaos-e.png',
                    mask: 'radial-gradient(circle at 71% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
            ],
            swapNote: "I got a clean swap to the NW or SW tiles! Now what?",
            swapStrats: [
                {
                    mechanic: 'idle',
                    description: 'South from NW/SW corner tile',
                    imageUrl: './strats/idyll/overall.png',
                    mask: 'radial-gradient(circle at 28% 38%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 28% 82%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'See image',
                    imageUrl: './strats/idyll/wild-charge-tiles.png',
                    mask: 'radial-gradient(circle at 18% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 18% 92%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: 'chaser',
                    description: 'See image\nStick to left side of the tile facing boss',
                    imageUrl: './strats/idyll/chaser.png',
                    mask: 'radial-gradient(circle at 11% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 21% 89%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'See image',
                    imageUrl: './strats/idyll/begone-with-you.png',
                    mask: 'radial-gradient(circle at 29.8% 34.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 30% 87%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: 'Right/East platform | D2',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative East\nw/ D4(R2)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 60% 35%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative East',
                    imageUrl: './strats/idyll/spread.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 56% 19.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative SE',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 58% 28%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative NW',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 75% 40%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative South',
                    imageUrl: './strats/idyll/looming-chaos-e.png',
                    mask: 'radial-gradient(circle at 36% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 79.2% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 62% 29.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative West\nw/ Healer from tiles\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 56% 71%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Platform\nRelative SE',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 20% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: 'Right/East platform | D3',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative West\nw/ D1(M1)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 60% 68%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative WNW',
                    imageUrl: './strats/idyll/spread.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 41% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/West',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative SW',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 58% 42%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative East',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 62% 82%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative South',
                    imageUrl: './strats/idyll/looming-chaos-e.png',
                    mask: 'radial-gradient(circle at 36% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 79.2% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 62% 29.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative West\nw/ Tank from tiles\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 40% 55%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative East',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 33% 20%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform | D4',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative East\nw/ D2(M2)',
                    imageUrl: './strats/idyll/pair-stack-pre-swap.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 62% 22%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative ENE',
                    imageUrl: './strats/idyll/spread.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 41% 23.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-pre-swap-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Relative North',
                    imageUrl: './strats/idyll/brambles-w.png',
                    transform: 'rotate(180deg)',
                    mask: 'radial-gradient(circle at 24% 53%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative West',
                    imageUrl: './strats/idyll/begone-with-you-e.png',
                    mask: 'radial-gradient(circle at 64% 21%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: 'swap',
                    description: 'Relative South',
                    imageUrl: './strats/idyll/looming-chaos-e.png',
                    mask: 'radial-gradient(circle at 36% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
            ],
            swapNote: "I got a clean swap to the west platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'towers',
                    description: 'Relative South/East',
                    imageUrl: './strats/idyll/towers-post-swap-w.png',
                    mask: 'radial-gradient(circle at 79.2% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 62% 29.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
                },
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative East\nw/ DPS from tiles\nDOUBLE CHECK MACROS IF USED',
                    imageUrl: './strats/idyll/pair-stack-post-swap.png',
                    mask: 'radial-gradient(circle at 57% 36%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'begone with you',
                    description: 'Ring\nRelative West',
                    imageUrl: './strats/idyll/begone-with-you-w.png',
                    mask: 'radial-gradient(circle at 32% 80%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
    ]
};

// const idyllStrat: Strat = {
//     stratName: 'idyll',
//     stratUrl: {
//         kanatan: 'http://kanatan.info/archives/38822195.html',
//         raidplan: 'https://raidplan.io/plan/BBhK6qoMdxoGX_0C',
//     },
//     description: '来自@idyllshireinfo的打法',
//     notes: '东西平台都是以场外为12点; THD的顺序不适用于华容道内的放种子',
//     strats: [
//         {
//             alliance: 'A',
//             role: 'Tank',
//             party: 1,
//             notes: '左侧/西侧平台上，拉boss朝场外，以场外作为12点| MT',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内 靠北 和H2一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     mask: 'radial-gradient(circle at 48% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '西北偏北',
//                     imageUrl: './strats/idyll/spread.png',
//                     mask: 'radial-gradient(circle at 33% 53.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '不引导，站在小云妈脚下',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 56% 40%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台外侧',
//                     imageUrl: './strats/idyll/looming-chaos-w.png',
//                     mask: 'radial-gradient(circle at 27% 48%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子西侧的两个格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 61% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 62% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子西侧的格子',
//                     imageUrl: './strats/idyll/wild-charge-tiles.png',
//                     mask: 'radial-gradient(circle at 73.8% 21.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 73% 80%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '潜地炮预站位',
//                     description: '十字路口格子的\n以云妈为中心的逆时针方向\n(面向云妈右侧)',
//                     imageUrl: './strats/idyll/chaser.png',
//                     mask: 'radial-gradient(circle at 67% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 79% 67%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基本站位的最中间',
//                     imageUrl: './strats/idyll/begone-with-you.png',
//                     mask: 'radial-gradient(circle at 53.8% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 54% 78%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Tank',
//             party: 2,
//             notes: '华容道的西北角 | ST',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '华容道的西北角东侧的两个格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 41% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(1,-1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的东侧格子',
//                     imageUrl: './strats/idyll/wild-charge-nw.png',
//                     mask: 'radial-gradient(circle at 77.8% 55.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基本站位的最中间',
//                     imageUrl: './strats/idyll/begone-with-you-nw.png',
//                     mask: 'radial-gradient(circle at 67% 32%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最高往安全区走\n如果在安全区则去水平方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 78% 10%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 9% 60.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的东侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilew.png',
//                     mask: 'radial-gradient(circle at 65% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内 北 和D3一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 43% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Healer',
//             party: 1,
//             notes: '华容道的西北角',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 30% 13%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(1,-1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/wild-charge-nw.png',
//                     mask: 'radial-gradient(circle at 50.8% 24.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-nw.png',
//                     mask: 'radial-gradient(circle at 41% 11%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级次于T往安全区走\n如果在安全区则去垂直方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 67% 10%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 21% 54.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子上',
//                     imageUrl: './strats/idyll/looming-chaos-tilew.png',
//                     mask: 'radial-gradient(circle at 40% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内西\n和B队D2一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 43% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Healer',
//             party: 2,
//             notes: '左侧/西侧平台',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外 北 和MT一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     mask: 'radial-gradient(circle at 32% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '东北偏北',
//                     imageUrl: './strats/idyll/spread.png',
//                     mask: 'radial-gradient(circle at 33% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     mask: 'radial-gradient(circle at 74.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '外侧靠东的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 23% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 58% 59%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台外侧',
//                     imageUrl: './strats/idyll/looming-chaos-w.png',
//                     mask: 'radial-gradient(circle at 27% 55%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 68% 17%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 68% 60%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '看图',
//                     imageUrl: './strats/idyll/wild-charge-tiles.png',
//                     mask: 'radial-gradient(circle at 82.8% 11.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 82% 82%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '潜地炮预站位',
//                     description: '看图',
//                     imageUrl: './strats/idyll/chaser.png',
//                     mask: 'radial-gradient(circle at 79% 11%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 89% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '看图',
//                     imageUrl: './strats/idyll/begone-with-you.png',
//                     mask: 'radial-gradient(circle at 64.8% 9.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 64% 61%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Melee',
//             party: 1,
//             notes: '左侧/西侧平台 | D1',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内西\n和D3一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     mask: 'radial-gradient(circle at 60% 55%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '西',
//                     imageUrl: './strats/idyll/spread.png',
//                     mask: 'radial-gradient(circle at 61% 69.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '不引导，站在小云妈脚下',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 20% 39%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台外侧',
//                     imageUrl: './strats/idyll/looming-chaos-w.png',
//                     mask: 'radial-gradient(circle at 27% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了华容道的东北或者东南角！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 68% 38%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 68% 82%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '看图',
//                     imageUrl: './strats/idyll/wild-charge-tiles.png',
//                     mask: 'radial-gradient(circle at 82.8% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 82% 92%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '潜地炮预站位',
//                     description: '看图',
//                     imageUrl: './strats/idyll/chaser.png',
//                     mask: 'radial-gradient(circle at 89% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 79% 89%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '看图',
//                     imageUrl: './strats/idyll/begone-with-you.png',
//                     mask: 'radial-gradient(circle at 64.8% 34.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 64% 87%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Melee',
//             party: 2,
//             notes: '左侧/西侧平台 | D2',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内东\n和D4一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     mask: 'radial-gradient(circle at 60% 35%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '东',
//                     imageUrl: './strats/idyll/spread.png',
//                     mask: 'radial-gradient(circle at 56% 19.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '内侧靠东的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 58% 28%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 20% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台内侧',
//                     imageUrl: './strats/idyll/looming-chaos-w.png',
//                     mask: 'radial-gradient(circle at 65% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 43.2% 72%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 23% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外西\n 和原内场的奶一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 56% 71%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 74% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Ranged',
//             party: 1,
//             notes: '左侧/西侧平台 | D3',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外西\n和D1一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     mask: 'radial-gradient(circle at 60% 68%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '西北偏西',
//                     imageUrl: './strats/idyll/spread.png',
//                     mask: 'radial-gradient(circle at 41% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '平台内侧靠西的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 58% 42%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 东侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 33% 20%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台内侧',
//                     imageUrl: './strats/idyll/looming-chaos-w.png',
//                     mask: 'radial-gradient(circle at 65% 46%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 43.2% 72%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 23% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外 北 和原内场T一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 40% 55%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 东侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 60% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'A',
//             role: 'Ranged',
//             party: 2,
//             notes: '左侧/西侧平台 | D4',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外东\n和D2一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     mask: 'radial-gradient(circle at 62% 22%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '东北偏东',
//                     imageUrl: './strats/idyll/spread.png',
//                     mask: 'radial-gradient(circle at 41% 23.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '外侧靠西的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 24% 53%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 西侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 33% 80%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台内侧',
//                     imageUrl: './strats/idyll/looming-chaos-w.png',
//                     mask: 'radial-gradient(circle at 65% 53%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 43.2% 72%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 23% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外东\n和原内场DPS一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 57% 36%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 西侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 63% 22%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Tank',
//             party: 1,
//             notes: '华容道西南角 | MT',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的东侧格子的两个格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 41% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的东侧格子',
//                     imageUrl: './strats/idyll/wild-charge-sw.png',
//                     mask: 'radial-gradient(circle at 60.8% 33.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基本站位的最中间',
//                     imageUrl: './strats/idyll/begone-with-you-sw.png',
//                     mask: 'radial-gradient(circle at 67% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最高往安全区走\n如果在安全区则去水平方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 11% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 79% 89.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的东侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilew.png',
//                     mask: 'radial-gradient(circle at 65% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内 北 和D3一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 43% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Tank',
//             party: 2,
//             notes: '华容道东南角 | ST',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子西侧的两个格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 57% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的西侧格子',
//                     imageUrl: './strats/idyll/wild-charge-sw.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 60.8% 33.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基本站位的最中间',
//                     imageUrl: './strats/idyll/begone-with-you-se.png',
//                     mask: 'radial-gradient(circle at 31% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最高往安全区走\n如果在安全区则去水平方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 22% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 92% 89.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的西侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilee.png',
//                     mask: 'radial-gradient(circle at 38% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内 北 和D3一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 55% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Healer',
//             party: 1,
//             notes: '华容道西南角',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 29% 61%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子上',
//                     imageUrl: './strats/idyll/wild-charge-sw.png',
//                     mask: 'radial-gradient(circle at 50.8% 40.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-sw.png',
//                     mask: 'radial-gradient(circle at 42% 33%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级次于T往安全区走\n如果在安全区则去十字路口北侧的格子跟随激光移动',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 20% 34%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 69% 89.7%, black 5%, rgba(0, 0, 0, 0.2) 5%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilew.png',
//                     mask: 'radial-gradient(circle at 40% 68%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内西\n和B队D2一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 43% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Healer',
//             party: 2,
//             notes: '华容道东南角',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 68% 61%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子上',
//                     imageUrl: './strats/idyll/wild-charge-sw.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 50.8% 40.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-se.png',
//                     mask: 'radial-gradient(circle at 54% 34%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级次于T往安全区走\n如果在安全区则去十字路口北侧的格子跟随激光移动',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 32% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 79% 84.7%, black 5%, rgba(0, 0, 0, 0.2) 5%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilee.png',
//                     mask: 'radial-gradient(circle at 59% 68%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内西\n和B队D2一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 57% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Melee',
//             party: 1,
//             notes: '华容道的西北角 | D1',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 30% 37%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(1,-1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '华容道的西北角',
//                     imageUrl: './strats/idyll/wild-charge-nw.png',
//                     mask: 'radial-gradient(circle at 50.8% 50.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-nw.png',
//                     mask: 'radial-gradient(circle at 43% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最低往安全区走\n如果在安全区则去十字路口南侧的格子跟随激光移动',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 55% 10%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 22% 65.7%, black 6%, rgba(0, 0, 0, 0.2) 6%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilew.png',
//                     mask: 'radial-gradient(circle at 40% 31%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内东\n和A队的D4一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 56% 44%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 75% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Melee',
//             party: 2,
//             notes: '华容道东北角 | D2',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 68% 37%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子上',
//                     imageUrl: './strats/idyll/wild-charge-nw.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 50.8% 50.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-ne.png',
//                     mask: 'radial-gradient(circle at 63% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最低往安全区走\n如果在安全区则去十字路口南侧的格子跟随激光移动',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 78% 13%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 46% 60.7%, black 6%, rgba(0, 0, 0, 0.2) 6%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilee.png',
//                     mask: 'radial-gradient(circle at 59% 31%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内东\n和A队的D4一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 57% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 18% 39%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Ranged',
//             party: 1,
//             notes: '华容道西南角 | D3',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 30% 85%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '华容道西南角',
//                     imageUrl: './strats/idyll/wild-charge-sw.png',
//                     mask: 'radial-gradient(circle at 38.8% 59.6%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-sw.png',
//                     mask: 'radial-gradient(circle at 43% 84%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最低往安全区走\n如果在安全区则去垂直方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 20% 47%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 57% 89.7%, black 5%, rgba(0, 0, 0, 0.2) 5%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子上',
//                     imageUrl: './strats/idyll/looming-chaos-tilew.png',
//                     mask: 'radial-gradient(circle at 40% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了东侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-e.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内东\n和A队的D4一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 56% 44%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 75% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'B',
//             role: 'Ranged',
//             party: 2,
//             notes: '华容道东南角 | D4',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的南侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 68% 88%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '华容道东南角',
//                     transform: 'scale(-1,1)',
//                     imageUrl: './strats/idyll/wild-charge-sw.png',
//                     mask: 'radial-gradient(circle at 38.8% 59.6%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-se.png',
//                     mask: 'radial-gradient(circle at 57% 82%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最低往安全区走\n如果在安全区则去垂直方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 45% 39%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 78% 95.7%, black 4%, rgba(0, 0, 0, 0.2) 4%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子上',
//                     imageUrl: './strats/idyll/looming-chaos-tilee.png',
//                     mask: 'radial-gradient(circle at 60% 81%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内东\n和A队的D4一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 57% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 18% 39%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Tank',
//             party: 1,
//             notes: '右侧/东侧平台，拉BOSS朝场外，以场外作为12点 | MT',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内 北 和H2一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 48% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '西北偏北',
//                     imageUrl: './strats/idyll/spread.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 33% 53.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '不引导，站在小云妈脚下',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 43% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台外侧',
//                     imageUrl: './strats/idyll/looming-chaos-e.png',
//                     mask: 'radial-gradient(circle at 72% 48%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口东侧的两个格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 40% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 40% 77%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的东侧格子',
//                     imageUrl: './strats/idyll/wild-charge-tiles.png',
//                     mask: 'radial-gradient(circle at 27.8% 21.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 29% 82%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '潜地炮预站位',
//                     description: '十字路口格子的\n以云妈为中心的逆时针方向\n(面向云妈右侧)',
//                     imageUrl: './strats/idyll/chaser.png',
//                     mask: 'radial-gradient(circle at 21% 33%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 33% 79%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基本站位的最中间',
//                     imageUrl: './strats/idyll/begone-with-you.png',
//                     mask: 'radial-gradient(circle at 39.8% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 40% 78%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Tank',
//             party: 2,
//             notes: '华容道东北角 | ST',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口西侧的两个格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 58% 22%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(-1,-1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的西侧格子',
//                     imageUrl: './strats/idyll/wild-charge-nw.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 77.8% 55.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基本站位的最中间',
//                     imageUrl: './strats/idyll/begone-with-you-ne.png',
//                     mask: 'radial-gradient(circle at 37% 32%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级最高往安全区走\n如果在安全区则去水平方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 89% 10%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 22% 60.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '十字路口格子的西侧格子',
//                     imageUrl: './strats/idyll/looming-chaos-tilee.png',
//                     mask: 'radial-gradient(circle at 38% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 47.2% 46%, black 20%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 67% 71.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内 北 和D3一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 48% 54%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 57% 41%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Healer',
//             party: 1,
//             notes: '华容道东北角',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 68% 13%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '种子弹放置',
//                     description: '优先级: H > D > T',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 69% 18%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 69% 51%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '凝缩式波动炮',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/wild-charge-nw.png',
//                     transform: 'scale(-1,1)',
//                     mask: 'radial-gradient(circle at 50.8% 24.6%, black 20%, rgba(0, 0, 0, 0.2) 20%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '基础站位上',
//                     imageUrl: './strats/idyll/begone-with-you-ne.png',
//                     mask: 'radial-gradient(circle at 63% 11%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//                 {
//                     mechanic: '回旋式波动炮',
//                     description: '如果在危险区则优先级次于T往安全区走\n如果在安全区则去垂直方向的突起',
//                     imageUrl: './strats/idyll/spinny.png',
//                     mask: 'radial-gradient(circle at 77% 4%, black 5%, rgba(0, 0, 0, 0.2) 5%), radial-gradient(circle at 33% 60.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '华容道东北角',
//                     imageUrl: './strats/idyll/looming-chaos-tilee.png',
//                     mask: 'radial-gradient(circle at 60% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 42.2% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 66% 50.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内西\n和B队D2一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 56% 62%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 58% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Healer',
//             party: 2,
//             notes: '右侧/东侧平台',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外 北 和MT一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 32% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '东北偏北',
//                     imageUrl: './strats/idyll/spread.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 33% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 74.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '外侧靠东的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 23% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 43% 40%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台外侧',
//                     imageUrl: './strats/idyll/looming-chaos-e.png',
//                     mask: 'radial-gradient(circle at 73% 51%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '基础站位',
//                     description: '十字路口格子的北侧格子',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 29% 17%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 29% 60%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '看图',
//                     imageUrl: './strats/idyll/wild-charge-tiles.png',
//                     mask: 'radial-gradient(circle at 18.8% 10.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 19% 83%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '潜地炮预站位',
//                     description: '看图',
//                     imageUrl: './strats/idyll/chaser.png',
//                     mask: 'radial-gradient(circle at 22% 11%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 9% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '看图',
//                     imageUrl: './strats/idyll/begone-with-you.png',
//                     mask: 'radial-gradient(circle at 29.8% 9.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 30% 61%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Melee',
//             party: 1,
//             notes: '右侧/东侧平台 | D1',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内西\n 和D3一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 60% 55%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '西',
//                     imageUrl: './strats/idyll/spread.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 61% 69.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '不引导，站在小云妈脚下',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 23% 35%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 74% 61%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台外侧',
//                     imageUrl: './strats/idyll/looming-chaos-e.png',
//                     mask: 'radial-gradient(circle at 71% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了华容道的西北或者西南角！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '基础站位',
//                     description: 'South from 十字路口格子上',
//                     imageUrl: './strats/idyll/overall.png',
//                     mask: 'radial-gradient(circle at 28% 38%, black 8%, rgba(0, 0, 0, 0.2) 8%), radial-gradient(circle at 28% 82%, black 8%, rgba(0, 0, 0, 0.2) 8%)'
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '看图',
//                     imageUrl: './strats/idyll/wild-charge-tiles.png',
//                     mask: 'radial-gradient(circle at 18% 19.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 18% 92%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
//                 },
//                 {
//                     mechanic: '潜地炮预站位',
//                     description: '看图',
//                     imageUrl: './strats/idyll/chaser.png',
//                     mask: 'radial-gradient(circle at 11% 21%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 21% 89%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '看图',
//                     imageUrl: './strats/idyll/begone-with-you.png',
//                     mask: 'radial-gradient(circle at 29.8% 34.6%, black 7%, rgba(0, 0, 0, 0.2) 7%), radial-gradient(circle at 30% 87%, black 7%, rgba(0, 0, 0, 0.2) 7%)',
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Melee',
//             party: 2,
//             notes: '右侧/东侧平台 | D2',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈内东\n和D4一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 60% 35%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '东',
//                     imageUrl: './strats/idyll/spread.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 56% 19.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '内侧靠东的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 58% 28%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台外侧 靠西',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 75% 40%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台内侧',
//                     imageUrl: './strats/idyll/looming-chaos-e.png',
//                     mask: 'radial-gradient(circle at 36% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 79.2% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 62% 29.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外西\n 和原内场的奶一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 56% 71%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '平台内侧 靠东',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 20% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Ranged',
//             party: 1,
//             notes: '右侧/东侧平台 | D3',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外西\n和D1一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 60% 68%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '西北偏西',
//                     imageUrl: './strats/idyll/spread.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 41% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '北/西',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 30.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 70.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '内侧靠西的种子',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 58% 42%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 东侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 62% 82%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台内侧',
//                     imageUrl: './strats/idyll/looming-chaos-e.png',
//                     mask: 'radial-gradient(circle at 36% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 79.2% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 62% 29.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外西\n 和原内场T一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 40% 55%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 东侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 33% 20%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//         {
//             alliance: 'C',
//             role: 'Ranged',
//             party: 2,
//             notes: '右侧/东侧平台 | D4',
//             startingArea: 'Platform',
//             strats: [
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外东\n和D2一组',
//                     imageUrl: './strats/idyll/pair-stack-pre-swap.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 62% 22%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散',
//                     description: '东北偏东',
//                     imageUrl: './strats/idyll/spread.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 41% 23.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-pre-swap-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 76.2% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 53% 28.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '引导种子',
//                     description: '北',
//                     imageUrl: './strats/idyll/brambles-w.png',
//                     transform: 'rotate(180deg)',
//                     mask: 'radial-gradient(circle at 24% 53%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 西侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-e.png',
//                     mask: 'radial-gradient(circle at 64% 21%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//                 {
//                     mechanic: '换线',
//                     description: '平台内侧',
//                     imageUrl: './strats/idyll/looming-chaos-e.png',
//                     mask: 'radial-gradient(circle at 36% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(270deg)',
//                     }
//                 },
//             ],
//             swapNote: "我换到了西侧的平台上！现在怎么站?",
//             swapStrats: [
//                 {
//                     mechanic: '踩塔',
//                     description: '南/东',
//                     imageUrl: './strats/idyll/towers-post-swap-w.png',
//                     mask: 'radial-gradient(circle at 79.2% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%), radial-gradient(circle at 62% 29.7%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分摊',
//                     description: '目标圈外东\n和原内场DPS一组',
//                     imageUrl: './strats/idyll/pair-stack-post-swap.png',
//                     mask: 'radial-gradient(circle at 57% 36%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//                 {
//                     mechanic: '分散式波动炮',
//                     description: '外环上 西侧塔附近',
//                     imageUrl: './strats/idyll/begone-with-you-w.png',
//                     mask: 'radial-gradient(circle at 32% 80%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
//                     alignmentTransforms: {
//                         'original': '',
//                         'truenorth': '',
//                         'addrelative': 'rotate(90deg)',
//                     }
//                 },
//             ]
//         },
//     ]
// };

const ziyanStrat: Strat = {
    stratName: 'ziyan',
    stratUrl: {
        bilibili: 'https://www.bilibili.com/video/BV1KMPVeSEbr',
        kanatan: 'http://kanatan.info/archives/38822195.html',
        raidplan: 'https://raidplan.io/plan/BBhK6qoMdxoGX_0C',
    },
    description: '子言+MMW视频内提到的イディル改（田园郡改@idyllshireinfo）打法',
    notes: '东西平台都是以场外为12点',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: '左侧/西侧平台上，拉boss朝场外，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 靠北 和H2一组',
                    imageUrl: './strats/ziyan/platform-pairs-west.png',
                    mask: 'radial-gradient(circle at 50% 33%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西北偏北',
                    imageUrl: './strats/ziyan/platform-spread-west.png',
                    mask: 'radial-gradient(circle at 40% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/platform-towers-west.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/ziyan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 14.3% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠东',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 80% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/ziyan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 18% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 35.9% 39.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 20.5% 64.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.9% 49.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 59.7% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 19.8% 34.7%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.2% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: '华容道的西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-brambles-pre.png',
                    mask: 'radial-gradient(circle at 65% 38%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 84% 72.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 63% 42.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-swap.png',
                mask: 'radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在危险区： 优先级最高往安全区走',
                    imageUrl: './strats/ziyan/tiles-north-cw.png',
                    mask: 'radial-gradient(circle at 81.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在安全区： 去水平方向的突起',
                    imageUrl: './strats/ziyan/tiles-north-ccw.png',
                    mask: 'radial-gradient(circle at 6.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapWarning:"请迅速挑衅重新建立仇恨，T需要拉BOSS朝场外",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和D3一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠东',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 35.9% 39.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 20.5% 64.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.9% 49.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 59.7% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 19.8% 34.7%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.2% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: '华容道的西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-brambles-pre.png',
                    mask: 'radial-gradient(circle at 41.1% 17.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 49.2% 35.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 37.2% 24.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-swap.png',
                mask: 'radial-gradient(circle at 52.7% 51.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在危险区： 优先级次于T往安全区走',
                    imageUrl: './strats/ziyan/tiles-north-cw.png',
                    mask: 'radial-gradient(circle at 68.7% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在安全区： 去垂直方向的突起',
                    imageUrl: './strats/ziyan/tiles-north-ccw.png',
                    mask: 'radial-gradient(circle at 18.7% 16.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 西 和D2一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠西',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: '左侧/西侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和MT一组',
                    imageUrl: './strats/ziyan/platform-pairs-west.png',
                    mask: 'radial-gradient(circle at 50% 16%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东北偏北',
                    imageUrl: './strats/ziyan/platform-spread-west.png',
                    mask: 'radial-gradient(circle at 65% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/platform-towers-west.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外侧靠东的种子',
                    imageUrl: './strats/ziyan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 30% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠西',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 80% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/ziyan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 18% 77%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: '左侧/西侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西 和D3一组',
                    imageUrl: './strats/ziyan/platform-pairs-west.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西',
                    imageUrl: './strats/ziyan/platform-spread-west.png',
                    mask: 'radial-gradient(circle at 6.6% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/platform-towers-west.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/ziyan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 14.3% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠东',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34.5% 37.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/ziyan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 18% 15.4%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: '左侧/西侧平台,以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 东 和D4一组',
                    imageUrl: './strats/ziyan/platform-pairs-west.png',
                    mask: 'radial-gradient(circle at 72% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东',
                    imageUrl: './strats/ziyan/platform-spread-west.png',
                    mask: 'radial-gradient(circle at 91% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/platform-towers-west.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '内侧靠东的种子',
                    imageUrl: './strats/ziyan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 74.6% 33.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠西',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 40% 35%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/ziyan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 87.7% 18.0%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 西\n和原内场的奶一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 17.9% 46.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠西',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 67.5% 38.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 38.1% 32.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: '左侧/西侧平台,以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 西 和D1一组',
                    imageUrl: './strats/ziyan/platform-pairs-west.png',
                    mask: 'radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西北偏西',
                    imageUrl: './strats/ziyan/platform-spread-west.png',
                    mask: 'radial-gradient(circle at 15% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/platform-towers-west.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '平台内侧靠西的种子',
                    imageUrl: './strats/ziyan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 74.1% 66.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 东侧塔附近',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.8% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 83.3% 31.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/ziyan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 87.7% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和原内场T一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 50.0% 10.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 东侧塔附近',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 71.5% 83.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 83.6% 28.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: '左侧/西侧平台,以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 东 和D2一组',
                    imageUrl: './strats/ziyan/platform-pairs-west.png',
                    mask: 'radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东北偏东',
                    imageUrl: './strats/ziyan/platform-spread-west.png',
                    mask: 'radial-gradient(circle at 86.8% 22.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/platform-towers-west.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外侧靠西的种子',
                    imageUrl: './strats/ziyan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 28.3% 65.4%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 西侧塔附近',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 29.1% 83.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 16.1% 29.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/ziyan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 87.7% 82%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 东\n和原内场DPS一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 84.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 西侧塔附近',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 72.5% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 16.7% 27.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-brambles-pre.png',
                    mask: 'radial-gradient(circle at 65% 62%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 82.7% 27.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 63.5% 50%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-swap.png',
                mask: 'radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot: [
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在安全区： 去水平方向的突起',
                    imageUrl: './strats/ziyan/tiles-south-cw.png',
                    mask: 'radial-gradient(circle at 6.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在危险区： 优先级最高往安全区走',
                    imageUrl: './strats/ziyan/tiles-south-ccw.png',
                    mask: 'radial-gradient(circle at 81.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapWarning:"请迅速挑衅重新建立仇恨，T需要拉BOSS朝场外",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和D3一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠东',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 35.9% 39.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 20.5% 64.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.9% 49.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 59.7% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 19.8% 34.7%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.2% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-brambles-pre.png',
                    mask: 'radial-gradient(circle at 35% 62%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 16% 27.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 37% 50%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-swap.png',
                mask: 'radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot: [
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在危险区： 优先级最高往安全区走',
                    imageUrl: './strats/ziyan/tiles-south-cw.png',
                    mask: 'radial-gradient(circle at 19.2% 48.9%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在安全区： 去水平方向的突起',
                    imageUrl: './strats/ziyan/tiles-south-ccw.png',
                    mask: 'radial-gradient(circle at 93.6% 49.1%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapWarning:"请迅速挑衅重新建立仇恨，T需要拉BOSS朝场外",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和D3一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠东',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 80% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 40.9% 62.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 78.6% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70.0% 49.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 64.3% 58.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 79.2% 33.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70.1% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-brambles-pre.png',
                    mask: 'radial-gradient(circle at 15.6% 59.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 66.2% 43.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 36.4% 29.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-swap.png',
                mask: 'radial-gradient(circle at 52.7% 17.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot: [
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在安全区： 去十字路口北侧的格子准备领跑；激光开动后跟着激光往前走一个格子',
                    imageUrl: './strats/ziyan/tiles-south-cw.png',
                    mask: 'radial-gradient(circle at 18.5% 21.2%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在危险区： 优先级次于T往安全区走',
                    imageUrl: './strats/ziyan/tiles-south-ccw.png',
                    mask: 'radial-gradient(circle at 68.8% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },

            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 西 和D2一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠西',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-brambles-pre.png',
                    mask: 'radial-gradient(circle at 84.4% 59.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 33.9% 42.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 61.7% 29.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-swap.png',
                mask: 'radial-gradient(circle at 47.3% 17.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在危险区： 优先级次于T往安全区走',
                    imageUrl: './strats/ziyan/tiles-south-cw.png',
                    mask: 'radial-gradient(circle at 31.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在安全区： 去十字路口北侧的格子准备领跑；激光开动后跟着激光往前走一个格子',
                    imageUrl: './strats/ziyan/tiles-south-ccw.png',
                    mask: 'radial-gradient(circle at 81.5% 21.2%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 西 和D2一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠西',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 80% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: '华容道的西北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-brambles-pre.png',
                    mask: 'radial-gradient(circle at 16.5% 37.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 66.9% 55.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38.0% 64.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 52.1% 82.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[                
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在危险区： 优先级最后往安全区走',
                    imageUrl: './strats/ziyan/tiles-north-cw.png',
                    mask: 'radial-gradient(circle at 59.4% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在安全区： 去十字路口南侧的格子准备领跑；激光开动后跟着激光往前走一个格子',
                    imageUrl: './strats/ziyan/tiles-north-ccw.png',
                    mask: 'radial-gradient(circle at 18.7% 80.9%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内东\n和A队的D4一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠东',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65.5% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-brambles-pre.png',
                    mask: 'radial-gradient(circle at 83.5% 37.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 33.1% 55.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 62.0% 64.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 49.9% 82.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在安全区： 去十字路口南侧的格子准备领跑；激光开动后跟着激光往前走一个格子',
                    imageUrl: './strats/ziyan/tiles-north-cw.png',
                    mask: 'radial-gradient(circle at 81.3% 80.9%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在危险区： 优先级最后往安全区走',
                    imageUrl: './strats/ziyan/tiles-north-ccw.png',
                    mask: 'radial-gradient(circle at 39.6% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内东\n和C队的D4一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠东',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34.5% 37.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: '华容道西南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-brambles-pre.png',
                    mask: 'radial-gradient(circle at 41.1% 82.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 48.9% 62.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38.1% 72.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-swap.png',
                mask: 'radial-gradient(circle at 52.7% 48.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在安全区： 去垂直方向的突起',
                    imageUrl: './strats/ziyan/tiles-south-cw.png',
                    mask: 'radial-gradient(circle at 18.7% 83.3%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在危险区： 优先级最低往安全区走',
                    imageUrl: './strats/ziyan/tiles-south-ccw.png',
                    mask: 'radial-gradient(circle at 59.4% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了东侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内东\n和A队的D4一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠东',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65.5% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的东北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的东南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-chaser-pre.png',
                    mask: 'radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: '华容道东南角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-brambles-pre.png',
                    mask: 'radial-gradient(circle at 58.9% 82.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 51.1% 62.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 61.9% 72.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southeast-swap.png',
                mask: 'radial-gradient(circle at 47.3% 48.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在危险区： 优先级最低往安全区走',
                    imageUrl: './strats/ziyan/tiles-south-cw.png',
                    mask: 'radial-gradient(circle at 40.6% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在安全区： 去垂直方向的突起',
                    imageUrl: './strats/ziyan/tiles-south-ccw.png',
                    mask: 'radial-gradient(circle at 81.3% 83.3%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内东\n和C队的D4一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠东',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34.5% 37.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: '右侧/东侧平台，拉BOSS朝场外，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和H2一组',
                    imageUrl: './strats/ziyan/platform-pairs-east.png',
                    mask: 'radial-gradient(circle at 50% 33%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西北偏北',
                    imageUrl: './strats/ziyan/platform-spread-east.png',
                    mask: 'radial-gradient(circle at 40% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/platform-towers-east.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/ziyan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 85.7% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠东',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/ziyan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 82% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 40.9% 62.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 78.6% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70.0% 49.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 64.3% 58.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 79.2% 33.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70.1% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-brambles-pre.png',
                    mask: 'radial-gradient(circle at 35% 38%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 16% 72.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 37% 42.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-swap.png',
                mask: 'radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在安全区： 去水平方向的突起',
                    imageUrl: './strats/ziyan/tiles-north-cw.png',
                    mask: 'radial-gradient(circle at 93.8% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在危险区： 优先级最高往安全区走',
                    imageUrl: './strats/ziyan/tiles-north-ccw.png',
                    mask: 'radial-gradient(circle at 18.8% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapWarning:"请迅速挑衅重新建立仇恨，T需要拉BOSS朝场外，",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 北 和D3一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠东',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 80% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            anotherSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 40.9% 62.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 78.6% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70.0% 49.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
            thirdSwapStrats: [
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 64.3% 58.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 79.2% 33.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70.1% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: '华容道东北角',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: '基础站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-idle.png',
                },
                {
                    mechanic: '种子弹预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-brambles-pre.png',
                    mask: 'radial-gradient(circle at 58.9% 17.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '种子弹放置',
                    description: '\n\n优先级: H > D > T',
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 49.8% 35.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-aoe-spread.png',
                    mask: 'radial-gradient(circle at 61.9% 24.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
                {
                    mechanic: '换线',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northeast-swap.png',
                mask: 'radial-gradient(circle at 47.3% 51.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
            ],
            activePivot:[
                {
                    mechanic: '回旋式波动炮-顺时针',
                    description: '你在安全区： 去垂直方向的突起',
                    imageUrl: './strats/ziyan/tiles-north-cw.png',
                    mask: 'radial-gradient(circle at 81.3% 16.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
                {
                    mechanic: '回旋式波动炮-逆时针',
                    description: '你在危险区： 优先级次于T往安全区走',
                    imageUrl: './strats/ziyan/tiles-north-ccw.png',
                    mask: 'radial-gradient(circle at 31.3% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)'
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈内 西 和D2一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠西',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 80% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: '右侧/东侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和MT一组',
                    imageUrl: './strats/ziyan/platform-pairs-east.png',
                    mask: 'radial-gradient(circle at 50% 16%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东北偏北',
                    imageUrl: './strats/ziyan/platform-spread-east.png',
                    mask: 'radial-gradient(circle at 65% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/platform-towers-east.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外侧靠东的种子',
                    imageUrl: './strats/ziyan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 73.2% 66.5%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台内侧 靠西',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/ziyan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 82% 77%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: '右侧/东侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 西 和D3一组',
                    imageUrl: './strats/ziyan/platform-pairs-east.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西',
                    imageUrl: './strats/ziyan/platform-spread-east.png',
                    mask: 'radial-gradient(circle at 6.6% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/platform-towers-east.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '不引导，站在小云妈脚下',
                    imageUrl: './strats/ziyan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 85.7% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠东',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65.5% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台外侧',
                    imageUrl: './strats/ziyan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 82% 15.4%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ],
            anotherSwapNote: "我换到了华容道的西北角！现在怎么站?",
            anotherSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            anotherSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-northwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-northwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
            thirdSwapNote: "我换到了华容道的西南角！现在怎么站?",
            thirdSwapWarning:"请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
            thirdSwapStrats:[
                {
                    mechanic: '潜地炮预站位',
                    description: '',
                    imageUrl: './strats/ziyan/tiles-southwest-chaser-pre.png',
                    mask: 'radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '凝缩式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)'
                },
                {
                    mechanic: '分散式波动炮',
                    description: '',
                    imageUrl: './strats/ziyan/postswap-tiles-southwest-aoe-spread.png',
                    mask: 'radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: '右侧/东侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈内 东 和D4一组',
                    imageUrl: './strats/ziyan/platform-pairs-east.png',
                    mask: 'radial-gradient(circle at 72% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东',
                    imageUrl: './strats/ziyan/platform-spread-east.png',
                    mask: 'radial-gradient(circle at 91% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/platform-towers-east.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '内侧靠东的种子',
                    imageUrl: './strats/ziyan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 25.6% 68.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠西',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 67.5% 38.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 38.1% 32.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/ziyan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 12.3% 18.0%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 西\n和原内场的奶一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 17.9% 46.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '平台外侧 靠西',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 40% 35%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: '右侧/东侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 西 和D1一组',
                    imageUrl: './strats/ziyan/platform-pairs-east.png',
                    mask: 'radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '西北偏西',
                    imageUrl: './strats/ziyan/platform-spread-east.png',
                    mask: 'radial-gradient(circle at 15% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '北/西',
                    imageUrl: './strats/ziyan/platform-towers-east.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '内侧靠西的种子',
                    imageUrl: './strats/ziyan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 23.4% 30.6%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 东侧塔附近',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 71.5% 83.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 83.6% 28.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/ziyan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 12.3% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 北 和原内场T一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 50.0% 10.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 东侧塔附近',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 31.8% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 83.3% 31.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: '右侧/东侧平台，以场外作为12点',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: '分摊',
                    description: '目标圈外 东 和D2一组',
                    imageUrl: './strats/ziyan/platform-pairs-east.png',
                    mask: 'radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散',
                    description: '东北偏东',
                    imageUrl: './strats/ziyan/platform-spread-east.png',
                    mask: 'radial-gradient(circle at 86.8% 22.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/platform-towers-east.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '引导种子',
                    description: '外侧靠西的种子',
                    imageUrl: './strats/ziyan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 71.3% 26.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 西侧塔附近',
                    imageUrl: './strats/ziyan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 72.5% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 16.7% 27.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: '换线',
                    description: '平台内侧',
                    imageUrl: './strats/ziyan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 12.3% 82%, black 15%, rgba(0, 0, 0, 0.2) 15%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ],
            swapNote: "我换到了西侧的平台上！现在怎么站?",
            swapStrats: [
                {
                    mechanic: '踩塔',
                    description: '南/东',
                    imageUrl: './strats/ziyan/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分摊',
                    description: '目标圈外 东\n和原内场DPS一组',
                    imageUrl: './strats/ziyan/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 84.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: '分散式波动炮',
                    description: '外环上 西侧塔附近',
                    imageUrl: './strats/ziyan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 29.1% 83.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/ziyan/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 16.1% 29.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
            ]
        },
    ]
};