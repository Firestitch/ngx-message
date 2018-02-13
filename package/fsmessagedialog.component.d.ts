import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class FsMessageDialogComponent implements OnInit {
    dialogRef: MatDialogRef<FsMessageDialogComponent>;
    data: any;
    constructor(dialogRef: MatDialogRef<FsMessageDialogComponent>, data: any);
    ngOnInit(): void;
    hide(): void;
}
