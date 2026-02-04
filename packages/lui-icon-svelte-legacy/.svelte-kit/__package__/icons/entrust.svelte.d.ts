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
export type EntrustProps = typeof __propDef.props;
export type EntrustEvents = typeof __propDef.events;
export type EntrustSlots = typeof __propDef.slots;
export default class Entrust extends SvelteComponentTyped<EntrustProps, EntrustEvents, EntrustSlots> {
}
export {};
