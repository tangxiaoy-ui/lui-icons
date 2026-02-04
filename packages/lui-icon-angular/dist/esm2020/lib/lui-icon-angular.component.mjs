import { ChangeDetectorRef, Component, ElementRef, Inject, Input, Renderer2, } from '@angular/core';
import defaultAttributes from '../icons/constants/default-attributes';
import { LUCIDE_ICONS } from './lui-icon-icon.provider';
import { LucideIconConfig } from './lui-icon-icon.config';
import { hasA11yProp } from '../utils/hasA11yProp';
import * as i0 from "@angular/core";
import * as i1 from "./lui-icon-icon.config";
export function formatFixed(number, decimals = 3) {
    return parseFloat(number.toFixed(decimals)).toString(10);
}
export class LucideAngularComponent {
    constructor(elem, renderer, changeDetector, iconProviders, iconConfig) {
        this.elem = elem;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.iconProviders = iconProviders;
        this.iconConfig = iconConfig;
        this.absoluteStrokeWidth = false;
        this.defaultSize = defaultAttributes.height;
    }
    get size() {
        return this._size ?? this.iconConfig.size;
    }
    set size(value) {
        if (value) {
            this._size = this.parseNumber(value);
        }
        else {
            delete this._size;
        }
    }
    get strokeWidth() {
        return this._strokeWidth ?? this.iconConfig.strokeWidth;
    }
    set strokeWidth(value) {
        if (value) {
            this._strokeWidth = this.parseNumber(value);
        }
        else {
            delete this._strokeWidth;
        }
    }
    ngOnChanges(changes) {
        if (changes.name ||
            changes.img ||
            changes.color ||
            changes.size ||
            changes.absoluteStrokeWidth ||
            changes.strokeWidth ||
            changes.class) {
            this.color = this.color ?? this.iconConfig.color;
            this.size = this.parseNumber(this.size ?? this.iconConfig.size);
            this.strokeWidth = this.parseNumber(this.strokeWidth ?? this.iconConfig.strokeWidth);
            this.absoluteStrokeWidth = this.absoluteStrokeWidth ?? this.iconConfig.absoluteStrokeWidth;
            const nameOrIcon = this.img ?? this.name;
            const restAttributes = this.getRestAttributes();
            if (!hasA11yProp(restAttributes)) {
                this.renderer.setAttribute(this.elem.nativeElement, 'aria-hidden', 'true');
            }
            if (typeof nameOrIcon === 'string') {
                const icoOfName = this.getIcon(this.toPascalCase(nameOrIcon));
                if (icoOfName) {
                    this.replaceElement(icoOfName);
                }
                else {
                    throw new Error(`The "${nameOrIcon}" icon has not been provided by any available icon providers.`);
                }
            }
            else if (Array.isArray(nameOrIcon)) {
                this.replaceElement(nameOrIcon);
            }
            else {
                throw new Error(`No icon name or image has been provided.`);
            }
        }
        this.changeDetector.markForCheck();
    }
    replaceElement(img) {
        const childElements = this.elem.nativeElement.childNodes;
        const attributes = {
            ...defaultAttributes,
            width: this.size,
            height: this.size,
            stroke: this.color ?? this.iconConfig.color,
            'stroke-width': this.absoluteStrokeWidth
                ? formatFixed(this.strokeWidth / (this.size / this.defaultSize))
                : this.strokeWidth.toString(10),
        };
        const icoElement = this.createElement(['svg', attributes, img]);
        icoElement.classList.add('lucide');
        if (typeof this.name === 'string') {
            icoElement.classList.add(`lui-icon-${this.name.replace('_', '-')}`);
        }
        if (this.class) {
            icoElement.classList.add(...this.class
                .split(/ /)
                .map((a) => a.trim())
                .filter((a) => a.length > 0));
        }
        for (const child of childElements) {
            this.renderer.removeChild(this.elem.nativeElement, child);
        }
        this.renderer.appendChild(this.elem.nativeElement, icoElement);
    }
    getRestAttributes() {
        const restAttributeMap = this.elem.nativeElement.attributes;
        const restAttributes = Object.fromEntries(Array.from(restAttributeMap).map((item) => [item.name, item.value]));
        return restAttributes;
    }
    toPascalCase(str) {
        return str.replace(/(\w)([a-z0-9]*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
    }
    parseNumber(value) {
        if (typeof value === 'string') {
            const parsedValue = parseInt(value, 10);
            if (isNaN(parsedValue)) {
                throw new Error(`${value} is not numeric.`);
            }
            return parsedValue;
        }
        return value;
    }
    getIcon(name) {
        for (const iconProvider of Array.isArray(this.iconProviders)
            ? this.iconProviders
            : [this.iconProviders]) {
            if (iconProvider.hasIcon(name)) {
                return iconProvider.getIcon(name);
            }
        }
        return null;
    }
    createElement(params) {
        const [tag, attrs, children = []] = params;
        const element = this.renderer.createElement(tag, 'http://www.w3.org/2000/svg');
        Object.keys(attrs).forEach((name) => {
            const attrValue = typeof attrs[name] === 'string' ? attrs[name] : attrs[name].toString(10);
            this.renderer.setAttribute(element, name, attrValue);
        });
        if (children.length) {
            children.forEach((child) => {
                const childElement = this.createElement(child);
                this.renderer.appendChild(element, childElement);
            });
        }
        return element;
    }
}
LucideAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideAngularComponent, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: ChangeDetectorRef }, { token: LUCIDE_ICONS }, { token: LucideIconConfig }], target: i0.ɵɵFactoryTarget.Component });
LucideAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: { class: "class", name: "name", img: "img", color: "color", absoluteStrokeWidth: "absoluteStrokeWidth", size: "size", strokeWidth: "strokeWidth" }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lucide-angular, lucide-icon, i-lucide, span-lucide',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LUCIDE_ICONS]
                }] }, { type: i1.LucideIconConfig, decorators: [{
                    type: Inject,
                    args: [LucideIconConfig]
                }] }]; }, propDecorators: { class: [{
                type: Input
            }], name: [{
                type: Input
            }], img: [{
                type: Input
            }], color: [{
                type: Input
            }], absoluteStrokeWidth: [{
                type: Input
            }], size: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVpLWljb24tYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2x1aS1pY29uLWFuZ3VsYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLGlCQUFpQixNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQStCLE1BQU0sMEJBQTBCLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFtQm5ELE1BQU0sVUFBVSxXQUFXLENBQUMsTUFBYyxFQUFFLFFBQVEsR0FBRyxDQUFDO0lBQ3RELE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQU1ELE1BQU0sT0FBTyxzQkFBc0I7SUFRakMsWUFDOEIsSUFBZ0IsRUFDakIsUUFBbUIsRUFDWCxjQUFpQyxFQUN0QyxhQUE0QyxFQUN4QyxVQUE0QjtRQUpsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDdEMsa0JBQWEsR0FBYixhQUFhLENBQStCO1FBQ3hDLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBUnZELHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQVVuQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBSUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJ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LEtBQUssRUFBRSxFQUFFO2dCQUN6QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O29IQTlLVSxzQkFBc0Isa0JBU3ZCLFVBQVUsYUFDVixTQUFTLGFBQ1QsaUJBQWlCLGFBQ2pCLFlBQVksYUFDWixnQkFBZ0I7d0dBYmYsc0JBQXNCLDJRQUZ2QiwyQkFBMkI7NEZBRTFCLHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0RBQW9EO29CQUM5RCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7MEJBVUksTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyxTQUFTOzswQkFDaEIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLFlBQVk7OzBCQUNuQixNQUFNOzJCQUFDLGdCQUFnQjs0Q0FaakIsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFtQk8sSUFBSTtzQkFBaEIsS0FBSztnQkFjTyxXQUFXO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMdWNpZGVJY29uRGF0YSB9IGZyb20gJy4uL2ljb25zL3R5cGVzJztcbmltcG9ydCBkZWZhdWx0QXR0cmlidXRlcyBmcm9tICcuLi9pY29ucy9jb25zdGFudHMvZGVmYXVsdC1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IExVQ0lERV9JQ09OUywgTHVjaWRlSWNvblByb3ZpZGVySW50ZXJmYWNlIH0gZnJvbSAnLi9sdWktaWNvbi1pY29uLnByb3ZpZGVyJztcbmltcG9ydCB7IEx1Y2lkZUljb25Db25maWcgfSBmcm9tICcuL2x1aS1pY29uLWljb24uY29uZmlnJztcbmltcG9ydCB7IGhhc0ExMXlQcm9wIH0gZnJvbSAnLi4vdXRpbHMvaGFzQTExeVByb3AnO1xuXG5pbnRlcmZhY2UgVHlwZWRDaGFuZ2U8VD4gZXh0ZW5kcyBTaW1wbGVDaGFuZ2Uge1xuICBwcmV2aW91c1ZhbHVlOiBUO1xuICBjdXJyZW50VmFsdWU6IFQ7XG59XG5cbnR5cGUgU3ZnQXR0cmlidXRlcyA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH07XG5cbnR5cGUgTHVjaWRlQW5ndWxhckNvbXBvbmVudENoYW5nZXMgPSB7XG4gIG5hbWU/OiBUeXBlZENoYW5nZTxzdHJpbmcgfCBMdWNpZGVJY29uRGF0YT47XG4gIGltZz86IFR5cGVkQ2hhbmdlPEx1Y2lkZUljb25EYXRhIHwgdW5kZWZpbmVkPjtcbiAgY29sb3I/OiBUeXBlZENoYW5nZTxzdHJpbmc+O1xuICBzaXplPzogVHlwZWRDaGFuZ2U8bnVtYmVyPjtcbiAgc3Ryb2tlV2lkdGg/OiBUeXBlZENoYW5nZTxudW1iZXI+O1xuICBhYnNvbHV0ZVN0cm9rZVdpZHRoPzogVHlwZWRDaGFuZ2U8Ym9vbGVhbj47XG4gIGNsYXNzOiBUeXBlZENoYW5nZTxzdHJpbmc+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZpeGVkKG51bWJlcjogbnVtYmVyLCBkZWNpbWFscyA9IDMpOiBzdHJpbmcge1xuICByZXR1cm4gcGFyc2VGbG9hdChudW1iZXIudG9GaXhlZChkZWNpbWFscykpLnRvU3RyaW5nKDEwKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHVjaWRlLWFuZ3VsYXIsIGx1Y2lkZS1pY29uLCBpLWx1Y2lkZSwgc3Bhbi1sdWNpZGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBMdWNpZGVBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY2xhc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU/OiBzdHJpbmcgfCBMdWNpZGVJY29uRGF0YTtcbiAgQElucHV0KCkgaW1nPzogTHVjaWRlSWNvbkRhdGE7XG4gIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBhYnNvbHV0ZVN0cm9rZVdpZHRoID0gZmFsc2U7XG4gIGRlZmF1bHRTaXplOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KExVQ0lERV9JQ09OUykgcHJpdmF0ZSBpY29uUHJvdmlkZXJzOiBMdWNpZGVJY29uUHJvdmlkZXJJbnRlcmZhY2VbXSxcbiAgICBASW5qZWN0KEx1Y2lkZUljb25Db25maWcpIHByaXZhdGUgaWNvbkNvbmZpZzogTHVjaWRlSWNvbkNvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5kZWZhdWx0U2l6ZSA9IGRlZmF1bHRBdHRyaWJ1dGVzLmhlaWdodDtcbiAgfVxuXG4gIF9zaXplPzogbnVtYmVyO1xuXG4gIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemUgPz8gdGhpcy5pY29uQ29uZmlnLnNpemU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgc2l6ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zaXplID0gdGhpcy5wYXJzZU51bWJlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9zaXplO1xuICAgIH1cbiAgfVxuXG4gIF9zdHJva2VXaWR0aD86IG51bWJlcjtcblxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGggPz8gdGhpcy5pY29uQ29uZmlnLnN0cm9rZVdpZHRoO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHN0cm9rZVdpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdGhpcy5wYXJzZU51bWJlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9zdHJva2VXaWR0aDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBMdWNpZGVBbmd1bGFyQ29tcG9uZW50Q2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZXMubmFtZSB8fFxuICAgICAgY2hhbmdlcy5pbWcgfHxcbiAgICAgIGNoYW5nZXMuY29sb3IgfHxcbiAgICAgIGNoYW5nZXMuc2l6ZSB8fFxuICAgICAgY2hhbmdlcy5hYnNvbHV0ZVN0cm9rZVdpZHRoIHx8XG4gICAgICBjaGFuZ2VzLnN0cm9rZVdpZHRoIHx8XG4gICAgICBjaGFuZ2VzLmNsYXNzXG4gICAgKSB7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvciA/PyB0aGlzLmljb25Db25maWcuY29sb3I7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLnBhcnNlTnVtYmVyKHRoaXMuc2l6ZSA/PyB0aGlzLmljb25Db25maWcuc2l6ZSk7XG4gICAgICB0aGlzLnN0cm9rZVdpZHRoID0gdGhpcy5wYXJzZU51bWJlcih0aGlzLnN0cm9rZVdpZHRoID8/IHRoaXMuaWNvbkNvbmZpZy5zdHJva2VXaWR0aCk7XG4gICAgICB0aGlzLmFic29sdXRlU3Ryb2tlV2lkdGggPSB0aGlzLmFic29sdXRlU3Ryb2tlV2lkdGggPz8gdGhpcy5pY29uQ29uZmlnLmFic29sdXRlU3Ryb2tlV2lkdGg7XG4gICAgICBjb25zdCBuYW1lT3JJY29uID0gdGhpcy5pbWcgPz8gdGhpcy5uYW1lO1xuICAgICAgY29uc3QgcmVzdEF0dHJpYnV0ZXMgPSB0aGlzLmdldFJlc3RBdHRyaWJ1dGVzKCk7XG5cbiAgICAgIGlmICghaGFzQTExeVByb3AocmVzdEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG5hbWVPckljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGljb09mTmFtZSA9IHRoaXMuZ2V0SWNvbih0aGlzLnRvUGFzY2FsQ2FzZShuYW1lT3JJY29uKSk7XG4gICAgICAgIGlmIChpY29PZk5hbWUpIHtcbiAgICAgICAgICB0aGlzLnJlcGxhY2VFbGVtZW50KGljb09mTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBcIiR7bmFtZU9ySWNvbn1cIiBpY29uIGhhcyBub3QgYmVlbiBwcm92aWRlZCBieSBhbnkgYXZhaWxhYmxlIGljb24gcHJvdmlkZXJzLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5hbWVPckljb24pKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZUVsZW1lbnQobmFtZU9ySWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGljb24gbmFtZSBvciBpbWFnZSBoYXMgYmVlbiBwcm92aWRlZC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVwbGFjZUVsZW1lbnQoaW1nOiBMdWNpZGVJY29uRGF0YSk6IHZvaWQge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAgIC4uLmRlZmF1bHRBdHRyaWJ1dGVzLFxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZSxcbiAgICAgIGhlaWdodDogdGhpcy5zaXplLFxuICAgICAgc3Ryb2tlOiB0aGlzLmNvbG9yID8/IHRoaXMuaWNvbkNvbmZpZy5jb2xvcixcbiAgICAgICdzdHJva2Utd2lkdGgnOiB0aGlzLmFic29sdXRlU3Ryb2tlV2lkdGhcbiAgICAgICAgPyBmb3JtYXRGaXhlZCh0aGlzLnN0cm9rZVdpZHRoIC8gKHRoaXMuc2l6ZSAvIHRoaXMuZGVmYXVsdFNpemUpKVxuICAgICAgICA6IHRoaXMuc3Ryb2tlV2lkdGgudG9TdHJpbmcoMTApLFxuICAgIH07XG4gICAgY29uc3QgaWNvRWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudChbJ3N2ZycsIGF0dHJpYnV0ZXMsIGltZ10pO1xuICAgIGljb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbHVjaWRlJyk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpY29FbGVtZW50LmNsYXNzTGlzdC5hZGQoYGx1aS1pY29uLSR7dGhpcy5uYW1lLnJlcGxhY2UoJ18nLCAnLScpfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICBpY29FbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIC4uLnRoaXMuY2xhc3NcbiAgICAgICAgICAuc3BsaXQoLyAvKVxuICAgICAgICAgIC5tYXAoKGEpID0+IGEudHJpbSgpKVxuICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEubGVuZ3RoID4gMCksXG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRFbGVtZW50cykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgY2hpbGQpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBpY29FbGVtZW50KTtcbiAgfVxuXG4gIGdldFJlc3RBdHRyaWJ1dGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIGNvbnN0IHJlc3RBdHRyaWJ1dGVNYXA6IE5hbWVkTm9kZU1hcCA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXM7XG4gICAgY29uc3QgcmVzdEF0dHJpYnV0ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBBcnJheS5mcm9tKHJlc3RBdHRyaWJ1dGVNYXApLm1hcCgoaXRlbSkgPT4gW2l0ZW0ubmFtZSwgaXRlbS52YWx1ZV0pLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3RBdHRyaWJ1dGVzO1xuICB9XG5cbiAgdG9QYXNjYWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoXG4gICAgICAvKFxcdykoW2EtejAtOV0qKShffC18XFxzKikvZyxcbiAgICAgIChnMCwgZzEsIGcyKSA9PiBnMS50b1VwcGVyQ2FzZSgpICsgZzIudG9Mb3dlckNhc2UoKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZU51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgaWYgKGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIG5vdCBudW1lcmljLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldEljb24obmFtZTogc3RyaW5nKTogTHVjaWRlSWNvbkRhdGEgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IGljb25Qcm92aWRlciBvZiBBcnJheS5pc0FycmF5KHRoaXMuaWNvblByb3ZpZGVycylcbiAgICAgID8gdGhpcy5pY29uUHJvdmlkZXJzXG4gICAgICA6IFt0aGlzLmljb25Qcm92aWRlcnNdKSB7XG4gICAgICBpZiAoaWNvblByb3ZpZGVyLmhhc0ljb24obmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGljb25Qcm92aWRlci5nZXRJY29uKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudChwYXJhbXM6IHJlYWRvbmx5IFtzdHJpbmcsIFN2Z0F0dHJpYnV0ZXMsIEx1Y2lkZUljb25EYXRhP10pIHtcbiAgICBjb25zdCBbdGFnLCBhdHRycywgY2hpbGRyZW4gPSBbXV0gPSBwYXJhbXM7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0YWcsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJWYWx1ZTogc3RyaW5nID1cbiAgICAgICAgdHlwZW9mIGF0dHJzW25hbWVdID09PSAnc3RyaW5nJyA/IChhdHRyc1tuYW1lXSBhcyBzdHJpbmcpIDogYXR0cnNbbmFtZV0udG9TdHJpbmcoMTApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgYXR0clZhbHVlKTtcbiAgICB9KTtcblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudChjaGlsZCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCwgY2hpbGRFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iXX0=