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
export type ExchangeUdorderProps = typeof __propDef.props;
export type ExchangeUdorderEvents = typeof __propDef.events;
export type ExchangeUdorderSlots = typeof __propDef.slots;
export default class ExchangeUdorder extends SvelteComponentTyped<ExchangeUdorderProps, ExchangeUdorderEvents, ExchangeUdorderSlots> {
}
export {};
