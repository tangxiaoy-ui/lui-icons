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
export type QuoteSmallProps = typeof __propDef.props;
export type QuoteSmallEvents = typeof __propDef.events;
export type QuoteSmallSlots = typeof __propDef.slots;
export default class QuoteSmall extends SvelteComponentTyped<QuoteSmallProps, QuoteSmallEvents, QuoteSmallSlots> {
}
export {};
