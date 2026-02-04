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
export type TowardsUpProps = typeof __propDef.props;
export type TowardsUpEvents = typeof __propDef.events;
export type TowardsUpSlots = typeof __propDef.slots;
export default class TowardsUp extends SvelteComponentTyped<TowardsUpProps, TowardsUpEvents, TowardsUpSlots> {
}
export {};
