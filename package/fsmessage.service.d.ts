import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
export declare class FsMessage {
    private toastr;
    private matDialog;
    private _dialogs;
    private _alerts;
    private _options;
    constructor(toastr: ToastrService, matDialog: MatDialog);
    readonly alerts: any[];
    success(message: string, options?: object): Observable<any>;
    info(message: string, options?: object): Observable<any>;
    error(message: string, options?: object): Observable<any>;
    warning(message: string, options?: object): Observable<any>;
    show(type: string, message: string, options: any): Observable<any>;
    private getIconName(type);
    toast(type: string, message: string, options: any): void;
    banner(type: string, message: string, options: any): void;
    dialog(type: string, message: string, options: any): void;
    private clear();
}
