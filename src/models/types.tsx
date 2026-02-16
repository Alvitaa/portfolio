export interface Project {
    slug: string,
    hook: string,
    title: string,
    description: string,
    highlights: string[],
    id: number;
    color: string;
    type: string;
    images: string[];
    role: string[],
    stack: string[],
    links: {
        demo: string | null;
        repository: string | null;
    }
}

export interface ProjectStatic {
    id: number;
    color: string;
    type: string;
    images: string[];
    role: string[],
    stack: string[],
    links: {
        demo: string | null;
        repository: string | null;
    }
}