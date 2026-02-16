export interface Project {
    id: number,
    color: string,
    slug: string,
    hook: string,
    title: string,
    description: string,
    highlights: string[],
    role: string[],
    stack: string[],
    links: {
        demo: string | null,
        repository: string | null
    }
}