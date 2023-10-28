export interface MyDocument {
  Id: string;
  UserId: string;
  FolderName: string;
  CreatedById: string;
  ReportList: Report[];
}

export interface Report {
  Id: string;
  FolderId: string;
  BlobName: string;
  DisplayName?: any;
  DocumentPath: string;
  LastUpdatedAt: string;
}
