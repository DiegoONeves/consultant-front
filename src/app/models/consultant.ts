export class Consultant {
    _id: string;
    name: string;
    email: string;
    projects: string[] = [];
    createDate: Date;
    isActive: boolean;

    load(r: any) {
        this._id = r._id;
        this.name = r.name;
        this.email = r.email;
        this.createDate = r.createDate;
        this.isActive = r.isActive;
        this.projects = r.projects;
    }
}