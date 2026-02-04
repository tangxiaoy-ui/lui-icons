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
export type UseProps = typeof __propDef.props;
export type UseEvents = typeof __propDef.events;
export type UseSlots = typeof __propDef.slots;
/**
 * @component @name Use
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA5LjVDMiA5Ljc0NTQ2IDIuMTc2OTEgOS45NDk4NSAyLjQxMDE2IDkuOTkyMTlMMi41IDEwSDRWMTFIMi41QzEuNzIwMzMgMTEgMS4wNzk1NSAxMC40MDUyIDEuMDA2ODQgOS42NDQ1M0wxIDkuNVY4SDJWOS41Wk0xMSA5LjVDMTEgMTAuMjc5NyAxMC40MDUyIDEwLjkyMDQgOS42NDQ1MyAxMC45OTMyTDkuNSAxMUg4VjEwSDkuNUM5Ljc0NTQ2IDEwIDkuOTQ5ODUgOS44MjMwOSA5Ljk5MjE5IDkuNTg5ODRMMTAgOS41VjhIMTFWOS41Wk05LjM1MzUyIDQuMzUzNTJMNS43MDcwMyA4QzUuMzQ2NTQgOC4zNjA0MyA0Ljc3ODk5IDguMzg4MDIgNC4zODY3MiA4LjA4MzAxTDQuMjkyOTcgOEwyLjY0NjQ4IDYuMzUzNTJMMy4zNTM1MiA1LjY0NjQ4TDUgNy4yOTI5N0w4LjY0NjQ4IDMuNjQ2NDhMOS4zNTM1MiA0LjM1MzUyWk00IDJIMi41QzIuMjU0NTQgMiAyLjA1MDE1IDIuMTc2OTEgMi4wMDc4MSAyLjQxMDE2TDIgMi41VjRIMVYyLjVDMSAxLjcyMDMzIDEuNTk0ODUgMS4wNzk1NSAyLjM1NTQ3IDEuMDA2ODRMMi41IDFINFYyWk05LjUgMUMxMC4yNzk3IDEgMTAuOTIwNCAxLjU5NDg1IDEwLjk5MzIgMi4zNTU0N0wxMSAyLjVWNEgxMFYyLjVDMTAgMi4yNTQ1NCA5LjgyMzA5IDIuMDUwMTUgOS41ODk4NCAyLjAwNzgxTDkuNSAySDhWMUg5LjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/use
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Use extends SvelteComponentTyped<UseProps, UseEvents, UseSlots> {
}
export {};
