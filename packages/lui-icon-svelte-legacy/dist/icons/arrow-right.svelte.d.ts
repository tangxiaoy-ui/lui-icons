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
export type ArrowRightProps = typeof __propDef.props;
export type ArrowRightEvents = typeof __propDef.events;
export type ArrowRightSlots = typeof __propDef.slots;
/**
 * @component @name ArrowRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC4zNTM1NSAxLjY0NjQ1TDcuNjQ2NDUgNC45MzkzNEM4LjE5NTYyIDUuNDg4NTEgOC4yMjk5NCA2LjM1NzU4IDcuNzQ5NDIgNi45NDY3NEw3LjY0NjQ1IDcuMDYwNjZMNC4zNTM1NSAxMC4zNTM2TDMuNjQ2NDUgOS42NDY0NUw2LjkzOTM0IDYuMzUzNTVDNy4xMTI5MSA2LjE3OTk5IDcuMTMyMTkgNS45MTA1NiA2Ljk5NzIgNS43MTU2OUw2LjkzOTM0IDUuNjQ2NDVMMy42NDY0NSAyLjM1MzU1TDQuMzUzNTUgMS42NDY0NVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-right
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class ArrowRight extends SvelteComponentTyped<ArrowRightProps, ArrowRightEvents, ArrowRightSlots> {
}
export {};
