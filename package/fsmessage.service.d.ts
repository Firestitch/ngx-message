import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
export declare class FsMessage {
    private toastr;
    private dialog;
    private _modals;
    private _alerts;
    private _options;
    constructor(toastr: ToastrService, dialog: MatDialog);
    readonly alerts: any[];
    success(message: string, options?: object): Observable<any>;
    info(message: string, options?: object): Observable<any>;
    error(message: string, options?: object): Observable<any>;
    warning(message: string, options?: object): Observable<any>;
    private show(type, message, options);
    private getIconName(type);
    toast(type: string, message: string, options: any): void;
    banner(type: string, message: string, options: any): void;
    modal(type: string, message: string, options: any): void;
    private clear();
}
