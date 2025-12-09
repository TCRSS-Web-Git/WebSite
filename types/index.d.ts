declare global {
  interface PaginationType {
    current_page: number
    from: number
    last_page: number
    path: string
    per_page: number
    to: number
    total: number
    links: {
      url?: string
      label?: string
      active: boolean
    }[]
  }

  // Collection with pagination
  interface Collection<T> {
    data: T[]
    meta: PaginationType
    links: {
      first?: string
      last?: string
      prev?: string
      next?: string
    }
  }

  // Collection without pagination (eg. countries)
  interface CollectionAll<T> {
    data: T[]
  }

  interface TemporaryMedia {
    name: string
    path: string
    url: string
  }

  interface Media {
    readonly id: string | number
    name: string
    url: string
    thumbnail?: string
  }

  // Data for models
  interface Item<T> {
    data: T
  }

  // Data

  interface Award {
    readonly id: string
    title: string
    published_at: string
    created_at: string
    updated_at: string
    status: string
    body_images?: Media[]
    translations?: {
      th: LocalizeForm
      en: LocalizeForm
    }
  }

  interface AwardImage {
    readonly id: string
    order: number
    created_at: string
    updated_at: string
    image?: Media[]
  }

  interface Blog {
    readonly id: string
    title: string
    slug: string
    meta_title: string
    meta_description: string
    published_at: string
    created_at: string
    updated_at: string
    updated_by: User
    status: string
    tags?: string[]
    thumbnail?: Media
    cover?: Media
    body_images?: Media[]
    translations?: {
      th: LocalizeForm
      en: LocalizeForm
    }
  }

  interface Career {
    readonly id: string
    location: Category
    department: Category
    type: Category
    title: string
    meta_title: string
    meta_description: string
    published_at: string
    created_at: string
    updated_at: string
    updated_by: User
    status: string
    body_images?: Media[]
    translations?: {
      th: LocalizeForm
      en: LocalizeForm
    }
  }

  interface Category {
    readonly id: string
    name: string
    description: string
    slug: string
    sort: string
    created_at: string
    updated_at: string
  }

  interface Career {
    readonly id: string
    title: string
    body: string
    location: Category
    type: Category
    department: Category
    body_images: Media[]
    status: string
    published_at: string
    created_at: string
    updated_at: string
    updated_by: string
  }

  interface Role {
    readonly id: string
    name: string
    created_at: string
    updated_at: string
  }

  interface ProductAndService {
    readonly id: string
    title: string
    published_at: string
    created_at: string
    updated_at: string
    cover: Media
    file: File
    status: string
    translations?: {
      th: { title: string }
      en: { title: string }
    }
  }

  interface User {
    readonly id: string
    title: string
    first_name: string
    last_name: string
    role: Role
    email: string
    phone?: string | null
    permissions: string[]
    created_at: string
    updated_at: string
  }

  interface Title {
    value: string
    label: string
  }

  interface Province {
    readonly id: string
    iso_code: string
    name: string
    name_en: string
    name_th: string
  }

  interface District {
    readonly id: string
    iso_code: string
    name: string
    name_en: string
    name_th: string
  }

  interface Subdistrict {
    readonly id: string
    iso_code: string
    name: string
    name_en: string
    name_th: string
    zip: string
  }

  // Form
  interface ContactUsForm {
    name: string
    surname: string
    phone: string
    email: string
    department_type: string
    detail: string
  }

  interface ApplicationForm {
    career_id: string | null
    salary?: string | null
    title?: string | null
    first_name_th?: string | null
    last_name_th?: string | null
    first_name_en?: string | null
    last_name_en?: string | null
    nick_name?: string | null
    date_of_birth?: string | null
    address?: string | null
    province_id?: string | null
    district_id?: string | null
    sub_district_id: string | null
    postal_code: string | null
    registered_province_id: string | null
    phone: string | null
    email: string | null
    family_status: string | null
    military_service: string | null
    education: string | null
    major: string | null
    institution: string | null
    gpa: string | null
    resume_file: Media[]
    transcript_file: Media[]
    certificate_files: Media[]
    photo: Media[]
  }

  interface Popup {
    readonly id: string
    order: number
    created_at: string
    updated_at: string
    image?: Media[]
  }
}

