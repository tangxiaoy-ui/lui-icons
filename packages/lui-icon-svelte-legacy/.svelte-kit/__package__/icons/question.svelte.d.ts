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
export type QuestionProps = typeof __propDef.props;
export type QuestionEvents = typeof __propDef.events;
export type QuestionSlots = typeof __propDef.slots;
export default class Question extends SvelteComponentTyped<QuestionProps, QuestionEvents, QuestionSlots> {
}
export {};
