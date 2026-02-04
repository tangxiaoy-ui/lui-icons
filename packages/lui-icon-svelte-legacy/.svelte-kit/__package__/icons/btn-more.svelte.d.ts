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
export type BtnMoreProps = typeof __propDef.props;
export type BtnMoreEvents = typeof __propDef.events;
export type BtnMoreSlots = typeof __propDef.slots;
export default class BtnMore extends SvelteComponentTyped<BtnMoreProps, BtnMoreEvents, BtnMoreSlots> {
}
export {};
