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
export type LevelChildrenProps = typeof __propDef.props;
export type LevelChildrenEvents = typeof __propDef.events;
export type LevelChildrenSlots = typeof __propDef.slots;
export default class LevelChildren extends SvelteComponentTyped<LevelChildrenProps, LevelChildrenEvents, LevelChildrenSlots> {
}
export {};
