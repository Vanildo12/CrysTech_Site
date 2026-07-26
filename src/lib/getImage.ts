const projectImages = import.meta.glob('../assets/images/projects/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>;

export const getProjectImage = (imageName: string): string => {
    if (imageName.startsWith('http')) return imageName;


    const path = `../assets/images/projects/${imageName}`;
    return projectImages[path] || "/placeholder-project.jpg"
} 