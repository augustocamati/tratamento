interface PageHeaderProps {
  title: string
  description?: string
  icon?: string
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <header className="bg-gradient-header p-6 text-white rounded-b-xl shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-3">
          {icon && <span className="material-symbols-outlined text-3xl">{icon}</span>}
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            {description && <p className="text-primary-100 mt-1">{description}</p>}
          </div>
        </div>
      </div>
    </header>
  )
}

