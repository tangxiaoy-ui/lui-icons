import { SvelteComponentTyped } from "svelte";
import type { IconProps } from '../types.js';
declare const __propDef: {
    props: IconProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LevelSameProps = typeof __propDef.props;
export type LevelSameEvents = typeof __propDef.events;
export type LevelSameSlots = typeof __propDef.slots;
export default class LevelSame extends SvelteComponentTyped<LevelSameProps, LevelSameEvents, LevelSameSlots> {
}
export {};
