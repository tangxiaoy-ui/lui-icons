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
const iconNode = [["path", { "d": "M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM6.5 9.5H5.5V8H6.5V9.5ZM6 2.5C7.07931 2.50001 7.95386 3.37484 7.9541 4.4541C7.9541 5.33729 7.36869 6.08395 6.56445 6.32617L6.5 6.3418V7.5H5.5V5.40918H6C6.52717 5.40917 6.9541 4.98128 6.9541 4.4541C6.95386 3.92713 6.52703 3.50001 6 3.5C5.51062 3.5 5.10709 3.86825 5.05176 4.34277L5.0459 4.4541H4.0459C4.04614 3.37484 4.92068 2.5 6 2.5Z", "fill": "#666666" }]];
/**
 * @component @name Question
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTYuNSA5LjVINS41VjhINi41VjkuNVpNNiAyLjVDNy4wNzkzMSAyLjUwMDAxIDcuOTUzODYgMy4zNzQ4NCA3Ljk1NDEgNC40NTQxQzcuOTU0MSA1LjMzNzI5IDcuMzY4NjkgNi4wODM5NSA2LjU2NDQ1IDYuMzI2MTdMNi41IDYuMzQxOFY3LjVINS41VjUuNDA5MThINkM2LjUyNzE3IDUuNDA5MTcgNi45NTQxIDQuOTgxMjggNi45NTQxIDQuNDU0MUM2Ljk1Mzg2IDMuOTI3MTMgNi41MjcwMyAzLjUwMDAxIDYgMy41QzUuNTEwNjIgMy41IDUuMTA3MDkgMy44NjgyNSA1LjA1MTc2IDQuMzQyNzdMNS4wNDU5IDQuNDU0MUg0LjA0NTlDNC4wNDYxNCAzLjM3NDg0IDQuOTIwNjggMi41IDYgMi41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/question
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="question" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
