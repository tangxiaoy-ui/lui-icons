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
export type TranslationOkProps = typeof __propDef.props;
export type TranslationOkEvents = typeof __propDef.events;
export type TranslationOkSlots = typeof __propDef.slots;
export default class TranslationOk extends SvelteComponentTyped<TranslationOkProps, TranslationOkEvents, TranslationOkSlots> {
}
export {};
