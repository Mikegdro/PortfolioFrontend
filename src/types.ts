export type Project = {
    id: string
    name: string
    type: 'personal' | 'privado'
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
    repository: string | null
    image: string | null
    imageReduced: string | null
}