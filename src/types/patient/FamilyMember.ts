export interface FamilyMember {
  Id?: number;
  UserId?: string;
  FullName: string;
  AgeTypeId: number;
  Address?: string;
  AgeType?: string;
  AgeYear?: number;
  GenderId: number;
  Gender?: string;
  DateOfBirth: string;
  ContactNumber: string;
  Email: string;
  RelationshipId: number;
  RelationshipType?: string;
  Height?: string;
  Weight?: string;
  IsSmoker?: boolean;
  HasDiabetis?: boolean;
  IsCovidVaccinated?: boolean;
  HasHighBloodPresure?: boolean;
  CreatedAt?: string;
  UpdatedAt?: string;
  Avatar?: string;
}
