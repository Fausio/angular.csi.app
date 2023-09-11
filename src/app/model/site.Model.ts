export class Site {

    Id: number;
    Name: string;
    Location: string;

    constructor(
        name: string,
        location: string,
        id?: number,
    ) {

        this.Name = name;
        this.Location = location;
        this.Id = id || 0;

    }
}