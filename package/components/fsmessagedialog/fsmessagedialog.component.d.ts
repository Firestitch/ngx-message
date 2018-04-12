import { MatDialogRef } from '@angular/material';
export declare class FsMessageDialogComponent {
    private dialogRef;
    data: any;
    constructor(dialogRef: MatDialogRef<FsMessageDialogComponent>, data: any);
    hide(): void;
}
