export interface Project extends ProjectStatic{
    slug: string,
    hook: string,
    title: string,
    description: string,
    highlights: string[],
}

export interface ProjectStatic {
    id: number;
    color: string;
    textColor: string;
    type: string;
    images: string[];
    role: string[],
    stack: string[],
    links: {
        demo: string | null;
        repository: string | null;
    }
}