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
export type LevelParentProps = typeof __propDef.props;
export type LevelParentEvents = typeof __propDef.events;
export type LevelParentSlots = typeof __propDef.slots;
export default class LevelParent extends SvelteComponentTyped<LevelParentProps, LevelParentEvents, LevelParentSlots> {
}
export {};
