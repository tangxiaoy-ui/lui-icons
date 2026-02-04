<script lang="ts">/**
 * @license @lui-icon/svelte v0.1.0 - ISC
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
import Icon from '../Icon.svelte';
let props = $props();
const iconNode = [["path", { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M3.5 0H8.5C10.433 0 12 1.567 12 3.5V8.5C12 10.433 10.433 12 8.5 12H3.5C1.567 12 0 10.433 0 8.5V3.5C0 1.567 1.567 0 3.5 0ZM8.5 1H3.5C2.11929 1 1 2.11929 1 3.5V8.5C1 9.88071 2.11929 11 3.5 11H8.5C9.88071 11 11 9.88071 11 8.5V3.5C11 2.11929 9.88071 1 8.5 1Z", "fill": "#666666" }], ["circle", { "cx": "6", "cy": "6", "r": "2", "fill": "#666666" }]];
/**
 * @component @name BtnChange
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAwSDguNUMxMC40MzMgMCAxMiAxLjU2NyAxMiAzLjVWOC41QzEyIDEwLjQzMyAxMC40MzMgMTIgOC41IDEySDMuNUMxLjU2NyAxMiAwIDEwLjQzMyAwIDguNVYzLjVDMCAxLjU2NyAxLjU2NyAwIDMuNSAwWk04LjUgMUgzLjVDMi4xMTkyOSAxIDEgMi4xMTkyOSAxIDMuNVY4LjVDMSA5Ljg4MDcxIDIuMTE5MjkgMTEgMy41IDExSDguNUM5Ljg4MDcxIDExIDExIDkuODgwNzEgMTEgOC41VjMuNUMxMSAyLjExOTI5IDkuODgwNzEgMSA4LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjIiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/btn-change
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="btn-change" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
