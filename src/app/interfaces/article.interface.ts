export interface IArticle{
    title: string;
    definition: string;
  
    sections: {
        title: string;
        content: string;
        subsections: {
            title: string;
            content: string;
        }[];
    }[];
}