export class SearchConsultant {
    name: string;
    email: string;
    totalItems: number;
    currentPage: number = 1;
    skip: number = 0;
    limit: number = 5;
}