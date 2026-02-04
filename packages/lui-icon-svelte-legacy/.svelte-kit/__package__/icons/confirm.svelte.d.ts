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
export type ConfirmProps = typeof __propDef.props;
export type ConfirmEvents = typeof __propDef.events;
export type ConfirmSlots = typeof __propDef.slots;
export default class Confirm extends SvelteComponentTyped<ConfirmProps, ConfirmEvents, ConfirmSlots> {
}
export {};
