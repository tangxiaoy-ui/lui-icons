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
export type FunnelProps = typeof __propDef.props;
export type FunnelEvents = typeof __propDef.events;
export type FunnelSlots = typeof __propDef.slots;
export default class Funnel extends SvelteComponentTyped<FunnelProps, FunnelEvents, FunnelSlots> {
}
export {};
