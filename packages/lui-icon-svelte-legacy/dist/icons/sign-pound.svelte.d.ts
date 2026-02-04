/**
 * @license lui-icon-svelte-legacy v0.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2024, Tubiao Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
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
export type SignPoundProps = typeof __propDef.props;
export type SignPoundEvents = typeof __propDef.events;
export type SignPoundSlots = typeof __propDef.slots;
/**
 * @component @name SignPound
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC45OTQxNCAxLjA3NDIyTDguNzA1MDggM0gxMC41VjRIOC41NTU2Nkw3Ljk1NTA4IDhIMTBWOUg3LjgwNTY2TDcuNDk0MTQgMTEuMDc0Mkw2LjUwNTg2IDEwLjkyNThMNi43OTQ5MiA5SDMuODA1NjZMMy40OTQxNCAxMS4wNzQyTDIuNTA1ODYgMTAuOTI1OEwyLjc5NDkyIDlIMVY4SDIuOTQ0MzRMMy41NDQ5MiA0SDEuNVYzSDMuNjk0MzRMNC4wMDU4NiAwLjkyNTc4MUw0Ljk5NDE0IDEuMDc0MjJMNC43MDUwOCAzSDcuNjk0MzRMOC4wMDU4NiAwLjkyNTc4MUw4Ljk5NDE0IDEuMDc0MjJaTTMuOTU1MDggOEg2Ljk0NDM0TDcuNTQ0OTIgNEg0LjU1NTY2TDMuOTU1MDggOFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-pound
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class SignPound extends SvelteComponentTyped<SignPoundProps, SignPoundEvents, SignPoundSlots> {
}
export {};
