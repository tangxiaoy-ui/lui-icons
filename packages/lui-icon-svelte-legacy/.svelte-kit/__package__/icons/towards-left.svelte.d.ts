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
export type TowardsLeftProps = typeof __propDef.props;
export type TowardsLeftEvents = typeof __propDef.events;
export type TowardsLeftSlots = typeof __propDef.slots;
export default class TowardsLeft extends SvelteComponentTyped<TowardsLeftProps, TowardsLeftEvents, TowardsLeftSlots> {
}
export {};
