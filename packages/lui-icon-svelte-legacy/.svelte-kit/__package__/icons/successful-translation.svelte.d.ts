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
export type SuccessfulTranslationProps = typeof __propDef.props;
export type SuccessfulTranslationEvents = typeof __propDef.events;
export type SuccessfulTranslationSlots = typeof __propDef.slots;
export default class SuccessfulTranslation extends SvelteComponentTyped<SuccessfulTranslationProps, SuccessfulTranslationEvents, SuccessfulTranslationSlots> {
}
export {};
