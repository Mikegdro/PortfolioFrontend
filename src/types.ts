export type Project = {
    id: string
    name: string
    type: 'personal' | 'private'
    PersonalProject?: PersonalProject
    PrivateProject?: PrivateProject
}

export type PersonalProject = {
    id: string
    idProject: string
    title: string
    repository: string | null
    image: string | null
    imageReduced: string | null
}

export type PrivateProject = {
    id: string
    idProject: string
    title: string
    companyId: string
    startDate: string
    endDate: string
    experienceId: string
    Company: Company
}

export type Company = {
    id: string
    name: string
    linkedin: string | null
    logo: string | null
    description: string | null
}

export type Experience = {
    id: string
    description: string | null
    companyId: string
    role: "frontend" | "backend" | "devops" | "fullstack"
    startDate: string | null
    endDate: string | null
    PrivateProject: PrivateProject[]
    Company: Company
}

export type Tecnologies = {
    id: string
    name: string
    type: 'frontend' | 'backend' | 'devops' | null
    description: string | null
    logo: string | null
    site: string | null
    twitter: string | null
}