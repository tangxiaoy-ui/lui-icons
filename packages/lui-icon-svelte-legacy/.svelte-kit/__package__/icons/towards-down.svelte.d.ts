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
export type TowardsDownProps = typeof __propDef.props;
export type TowardsDownEvents = typeof __propDef.events;
export type TowardsDownSlots = typeof __propDef.slots;
export default class TowardsDown extends SvelteComponentTyped<TowardsDownProps, TowardsDownEvents, TowardsDownSlots> {
}
export {};
