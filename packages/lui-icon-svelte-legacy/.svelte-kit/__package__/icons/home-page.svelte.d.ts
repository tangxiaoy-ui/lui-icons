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
export type HomePageProps = typeof __propDef.props;
export type HomePageEvents = typeof __propDef.events;
export type HomePageSlots = typeof __propDef.slots;
export default class HomePage extends SvelteComponentTyped<HomePageProps, HomePageEvents, HomePageSlots> {
}
export {};
