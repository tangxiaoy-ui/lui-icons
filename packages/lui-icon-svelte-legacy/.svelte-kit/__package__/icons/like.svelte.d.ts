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
export type LikeProps = typeof __propDef.props;
export type LikeEvents = typeof __propDef.events;
export type LikeSlots = typeof __propDef.slots;
export default class Like extends SvelteComponentTyped<LikeProps, LikeEvents, LikeSlots> {
}
export {};
