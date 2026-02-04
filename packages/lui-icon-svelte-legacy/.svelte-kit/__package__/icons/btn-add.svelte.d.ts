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
export type BtnAddProps = typeof __propDef.props;
export type BtnAddEvents = typeof __propDef.events;
export type BtnAddSlots = typeof __propDef.slots;
export default class BtnAdd extends SvelteComponentTyped<BtnAddProps, BtnAddEvents, BtnAddSlots> {
}
export {};
