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
export type TowardsRightProps = typeof __propDef.props;
export type TowardsRightEvents = typeof __propDef.events;
export type TowardsRightSlots = typeof __propDef.slots;
export default class TowardsRight extends SvelteComponentTyped<TowardsRightProps, TowardsRightEvents, TowardsRightSlots> {
}
export {};
