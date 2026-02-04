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
export type PlayProps = typeof __propDef.props;
export type PlayEvents = typeof __propDef.events;
export type PlaySlots = typeof __propDef.slots;
export default class Play extends SvelteComponentTyped<PlayProps, PlayEvents, PlaySlots> {
}
export {};
