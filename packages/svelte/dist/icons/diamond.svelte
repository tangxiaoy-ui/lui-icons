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
const iconNode = [["path", { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M3.26631 1H8.78068C9.11693 1 9.43066 1.16899 9.61568 1.44975L11.6988 4.61094C11.9549 4.99947 11.9091 5.51326 11.5884 5.8504L7.08683 10.5829C6.51588 11.1831 5.56642 11.2069 4.96618 10.6359L0.414213 5.85316C0.0911167 5.51349 0.0473492 4.99497 0.308938 4.60595L2.43647 1.44199C2.62225 1.1657 2.93336 1 3.26631 1ZM8.78068 2H3.26631L1.13878 5.16395L5.65539 9.91134C5.85547 10.1017 6.17195 10.0937 6.36227 9.89367L10.8638 5.16119L8.78068 2Z", "fill": "#666666" }]];
/**
 * @component @name Diamond
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMjY2MzEgMUg4Ljc4MDY4QzkuMTE2OTMgMSA5LjQzMDY2IDEuMTY4OTkgOS42MTU2OCAxLjQ0OTc1TDExLjY5ODggNC42MTA5NEMxMS45NTQ5IDQuOTk5NDcgMTEuOTA5MSA1LjUxMzI2IDExLjU4ODQgNS44NTA0TDcuMDg2ODMgMTAuNTgyOUM2LjUxNTg4IDExLjE4MzEgNS41NjY0MiAxMS4yMDY5IDQuOTY2MTggMTAuNjM1OUwwLjQxNDIxMyA1Ljg1MzE2QzAuMDkxMTE2NyA1LjUxMzQ5IDAuMDQ3MzQ5MiA0Ljk5NDk3IDAuMzA4OTM4IDQuNjA1OTVMMi40MzY0NyAxLjQ0MTk5QzIuNjIyMjUgMS4xNjU3IDIuOTMzMzYgMSAzLjI2NjMxIDFaTTguNzgwNjggMkgzLjI2NjMxTDEuMTM4NzggNS4xNjM5NUw1LjY1NTM5IDkuOTExMzRDNS44NTU0NyAxMC4xMDE3IDYuMTcxOTUgMTAuMDkzNyA2LjM2MjI3IDkuODkzNjdMMTAuODYzOCA1LjE2MTE5TDguNzgwNjggMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/diamond
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="diamond" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
