export class DisplayBlog {
    constructor(
        public titlePrincipal: string,
        public resume: string,
        public numberLike: number,
        public actif: boolean,
    )
    {
        this.titlePrincipal = titlePrincipal;
        this.resume = resume;
        this.numberLike = numberLike;
        this.actif = actif;
    };
}