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
export type ExchangeUdinvertedOrderProps = typeof __propDef.props;
export type ExchangeUdinvertedOrderEvents = typeof __propDef.events;
export type ExchangeUdinvertedOrderSlots = typeof __propDef.slots;
export default class ExchangeUdinvertedOrder extends SvelteComponentTyped<ExchangeUdinvertedOrderProps, ExchangeUdinvertedOrderEvents, ExchangeUdinvertedOrderSlots> {
}
export {};
