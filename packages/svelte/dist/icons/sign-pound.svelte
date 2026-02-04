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
const iconNode = [["path", { "d": "M8.99414 1.07422L8.70508 3H10.5V4H8.55566L7.95508 8H10V9H7.80566L7.49414 11.0742L6.50586 10.9258L6.79492 9H3.80566L3.49414 11.0742L2.50586 10.9258L2.79492 9H1V8H2.94434L3.54492 4H1.5V3H3.69434L4.00586 0.925781L4.99414 1.07422L4.70508 3H7.69434L8.00586 0.925781L8.99414 1.07422ZM3.95508 8H6.94434L7.54492 4H4.55566L3.95508 8Z", "fill": "#666666" }]];
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
</script>

<Icon name="sign-pound" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
