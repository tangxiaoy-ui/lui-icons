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
export type BtnPlayProps = typeof __propDef.props;
export type BtnPlayEvents = typeof __propDef.events;
export type BtnPlaySlots = typeof __propDef.slots;
export default class BtnPlay extends SvelteComponentTyped<BtnPlayProps, BtnPlayEvents, BtnPlaySlots> {
}
export {};
