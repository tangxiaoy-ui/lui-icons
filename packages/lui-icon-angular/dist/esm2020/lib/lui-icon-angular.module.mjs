import { NgModule, Optional } from '@angular/core';
import { LucideAngularComponent } from './lui-icon-angular.component';
import { LUCIDE_ICONS, LucideIconProvider } from './lui-icon-icon.provider';
import { Icons } from './icons.provider';
import * as i0 from "@angular/core";
const legacyIconProviderFactory = (icons) => {
    return new LucideIconProvider(icons ?? {});
};
export class LucideAngularModule {
    static pick(icons) {
        return {
            ngModule: LucideAngularModule,
            providers: [
                { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) },
                {
                    provide: LUCIDE_ICONS,
                    multi: true,
                    useFactory: legacyIconProviderFactory,
                    deps: [[new Optional(), Icons]],
                },
            ],
        };
    }
}
LucideAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LucideAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideAngularModule, declarations: [LucideAngularComponent], exports: [LucideAngularComponent] });
LucideAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideAngularModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LucideAngularComponent],
                    imports: [],
                    exports: [LucideAngularComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVpLWljb24tYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2x1aS1pY29uLWFuZ3VsYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUV6QyxNQUFNLHlCQUF5QixHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFO0lBQ3hELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBT0YsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWtCO1FBQzVCLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0U7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztpSEFkVSxtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFKZixzQkFBc0IsYUFFM0Isc0JBQXNCO2tIQUVyQixtQkFBbUIsWUFIckIsRUFBRTs0RkFHQSxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHVjaWRlQW5ndWxhckNvbXBvbmVudCB9IGZyb20gJy4vbHVpLWljb24tYW5ndWxhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHVjaWRlSWNvbnMgfSBmcm9tICcuLi9pY29ucy90eXBlcyc7XG5pbXBvcnQgeyBMVUNJREVfSUNPTlMsIEx1Y2lkZUljb25Qcm92aWRlciB9IGZyb20gJy4vbHVpLWljb24taWNvbi5wcm92aWRlcic7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4vaWNvbnMucHJvdmlkZXInO1xuXG5jb25zdCBsZWdhY3lJY29uUHJvdmlkZXJGYWN0b3J5ID0gKGljb25zPzogTHVjaWRlSWNvbnMpID0+IHtcbiAgcmV0dXJuIG5ldyBMdWNpZGVJY29uUHJvdmlkZXIoaWNvbnMgPz8ge30pO1xufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHVjaWRlQW5ndWxhckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbTHVjaWRlQW5ndWxhckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEx1Y2lkZUFuZ3VsYXJNb2R1bGUge1xuICBzdGF0aWMgcGljayhpY29uczogTHVjaWRlSWNvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEx1Y2lkZUFuZ3VsYXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx1Y2lkZUFuZ3VsYXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBMVUNJREVfSUNPTlMsIG11bHRpOiB0cnVlLCB1c2VWYWx1ZTogbmV3IEx1Y2lkZUljb25Qcm92aWRlcihpY29ucykgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExVQ0lERV9JQ09OUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBsZWdhY3lJY29uUHJvdmlkZXJGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIEljb25zXV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==