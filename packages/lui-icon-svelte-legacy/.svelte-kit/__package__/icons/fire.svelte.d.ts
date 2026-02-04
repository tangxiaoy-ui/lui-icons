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
export type FireProps = typeof __propDef.props;
export type FireEvents = typeof __propDef.events;
export type FireSlots = typeof __propDef.slots;
export default class Fire extends SvelteComponentTyped<FireProps, FireEvents, FireSlots> {
}
export {};
