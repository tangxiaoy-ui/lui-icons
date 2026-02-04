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
export type ExchangeUdProps = typeof __propDef.props;
export type ExchangeUdEvents = typeof __propDef.events;
export type ExchangeUdSlots = typeof __propDef.slots;
export default class ExchangeUd extends SvelteComponentTyped<ExchangeUdProps, ExchangeUdEvents, ExchangeUdSlots> {
}
export {};
