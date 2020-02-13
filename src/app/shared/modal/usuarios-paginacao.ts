export class Paginacao<T> {

    data: T[];
    page = 1;​
    per_page: number;
    total: number;
    ​total_pages: number;

    // apenas para o front:
    paginas = new Array<number>();
}
