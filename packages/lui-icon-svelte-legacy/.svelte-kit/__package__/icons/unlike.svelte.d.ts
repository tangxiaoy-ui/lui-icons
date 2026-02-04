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
export type UnlikeProps = typeof __propDef.props;
export type UnlikeEvents = typeof __propDef.events;
export type UnlikeSlots = typeof __propDef.slots;
export default class Unlike extends SvelteComponentTyped<UnlikeProps, UnlikeEvents, UnlikeSlots> {
}
export {};
