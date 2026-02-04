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
export type TranslationProps = typeof __propDef.props;
export type TranslationEvents = typeof __propDef.events;
export type TranslationSlots = typeof __propDef.slots;
export default class Translation extends SvelteComponentTyped<TranslationProps, TranslationEvents, TranslationSlots> {
}
export {};
